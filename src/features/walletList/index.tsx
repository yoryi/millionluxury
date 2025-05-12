import React, { useCallback, useEffect, useState } from "react";
import { Card } from "../../components";
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import { RootStackParamList } from "../../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAPIClient } from "../../hooks/useAPIClient";
import { Colors } from "../../config";
import { StateType } from "../../components/switch";
import { transformData } from "./utils/transformData";

/**
 * WalletList component displays a list of wallet items that are fetched and transformed based on the specified type.
 * 
 * This component utilizes the WalletListClass class to handle data fetching, transformation, and navigation.
 * The fetched data is displayed within a Card component, with support for filtering by search query.
 * 
 * @component
 * @example
 * ```tsx
 * <WalletList type="moneda" />
 * ```
 */

export type WalletListProps = {
  type?: StateType;
  searchQuery?: string;
  onlyFavorite?: boolean;
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

  const typeMode = type ?? 'moneda'
  const walletList = new WalletListClass(typeMode, fetch, transformData, setDataNew, navigation);

  useEffect(() => {
    walletList.fetchDataByType();
  }, [type]);

  useEffect(() => {
    walletList.handleTransformedData(data || []);
  }, [data, type]);

  const filteredData = (dataNew ?? []).filter(item =>
    searchQuery?.trim() ? item.title?.toLowerCase().includes(searchQuery.trim().toLowerCase()) : true
  );

  const renderItem = ({ item }: { item: any }) => (
    <Card
      id={item.id}
      title={item.title}
      value={item.value}
      subtitle={item.subtitle}
      onPress={() => walletList.handleCardPress(item.id, typeMode, item)}
    />
  );

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} />
      ) : error ? (
        <View style={{ height: '100%', justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ color: Colors.secondary }}>Error al cargar los datos</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
          {filteredData.length === 0 ? (
            <View style={{ height: '100%', justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>
              <Text style={{ color: Colors.secondary }}>No se encontraron resultados</Text>
            </View>
          ) : (
            filteredData.map((item, index) => (
              <View key={`index-${item.id || index}`}>
                {renderItem({ item })}
                <View style={{ height: 15 }} />
              </View>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
}