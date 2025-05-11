import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import { RootStackParamList } from "../../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAPIClient } from "../../hooks/useAPIClient";
import { Colors } from "../../config";
import { StateType } from "../../components/switch";
import { transformData } from "./utils/transformData";

/**
 * WalletList component displays a list of wallets based on the provided type and fetches data from an API.
 * 
 * This component utilizes the WalletListClass for managing the fetching and transformation of data based on 
 * the provided wallet type (either 'moneda' or 'exchange'). It displays the data in a FlatList with an option 
 * to navigate to a details screen when a card is pressed.
 * 
 * @component
 * @example
 * ```tsx
 * <WalletList type="moneda" searchQuery="Bitcoin" />  // Displays wallets of type 'moneda' filtered by 'Bitcoin'
 * <WalletList type="exchange" searchQuery="Binance" /> // Displays wallets of type 'exchange' filtered by 'Binance'
 * ```
 * 
 * @param {Object} props - The properties for the component.
 * @param {StateType} props.type - The type of data to fetch and display (either 'moneda' or 'exchange').
 * @param {string} [props.searchQuery] - An optional search query to filter the wallets by name or title.
 */

export type WalletListProps = {
  type: StateType;
  searchQuery?: string;
};

class WalletListClass {
  private type: StateType;
  private fetchData: Function;
  private transformData: Function;
  private setDataNew: Function;
  private navigation: NavigationProp<RootStackParamList>;

  constructor(type: StateType, fetchData: Function, transformData: Function, setDataNew: Function, navigation: NavigationProp<RootStackParamList>) {
    this.type = type;
    this.fetchData = fetchData;
    this.transformData = transformData;
    this.setDataNew = setDataNew;
    this.navigation = navigation;
  }

  urlMap = {
    moneda: "api/tickers/?start=0&limit=30",
    exchange: "api/exchanges/",
  };

  fetchDataByType() {
    const url = this.urlMap[this.type];
    this.fetchData("GET", url);
  }

  handleTransformedData(data: any[]) {
    const transformedData = this.transformData(data, this.type);
    this.setDataNew(transformedData);
  }

  handleCardPress(id: string, type: string, payload?: object) {
    this.navigation.navigate("Details", { coinId: id, type: type, payload: payload ?? {} });
  }
}

export default function WalletList({ type, searchQuery }: WalletListProps) {
  const [dataNew, setDataNew] = useState<any[]>([]);
  const { data, loading, error, fetch } = useAPIClient();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const walletList = new WalletListClass(type, fetch, transformData, setDataNew, navigation);

  useEffect(() => {
    walletList.fetchDataByType();
  }, [type]);

  useEffect(() => {
    walletList.handleTransformedData(data || []);
  }, [data, type]);

  const renderItem = ({ item }: { item: any }) => (
    <Card
      id={item.id}
      title={item.title}
      value={item.value}
      subtitle={item.subtitle}
      onPress={() => walletList.handleCardPress(item.id, type, item)}
    />
  );

  const filteredData = searchQuery
    ? dataNew.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : dataNew;

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : error ? (
        <View style={{ height: '100%', justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ color: Colors.secondary }}>Error al cargar los datos</Text>
        </View>
      ) : (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          keyExtractor={(item, index) => item.id ? `index-${item.id}` : `index-${index}`}
          ListEmptyComponent={() => (
            <View style={{ height: '100%', justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>
              <Text style={{ color: Colors.secondary }}>No se encontraron resultados</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
