import React, { useCallback, useEffect, useState } from "react";
import { Card } from "../../components";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import { RootStackParamList } from "../../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAPIClient } from "../../hooks/useAPIClient";
import { Colors } from "../../config";
import { StateType } from "../../components/switch";
import { transformData } from "./utils/transformData";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  }, []);

  return { favorites, toggleFavorite };
};

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

export default function WalletList({ type, searchQuery, onlyFavorite }: WalletListProps) {
  const [dataNew, setDataNew] = useState<any[]>([]);
  const { data, loading, error, fetch } = useAPIClient();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { favorites, toggleFavorite } = useFavorites();

  const typeMode = type ?? 'moneda'
  const walletList = new WalletListClass(typeMode, fetch, transformData, setDataNew, navigation);

  useEffect(() => {
    walletList.fetchDataByType();
  }, [type]);

  useEffect(() => {
    walletList.handleTransformedData(data || []);
  }, [data, type]);

  const handleLike = (id: string) => {
    toggleFavorite(id);
  };

  const filteredData = (dataNew || []).filter(item => {
    const matchesSearch = searchQuery ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    const isFavorite = onlyFavorite ? favorites.includes(item.id) : true;
    return matchesSearch && isFavorite;
  });


  const renderItem = ({ item }: { item: any }) => (
    <Card
      id={item.id}
      title={item.title}
      value={item.value}
      subtitle={item.subtitle}
      onLike={() => handleLike(item.id)}
      isLike={favorites.includes(item.id)}
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
