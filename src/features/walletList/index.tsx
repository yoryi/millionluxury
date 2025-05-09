import React, { useEffect, useState } from "react";
import { Card } from "../../components";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import { RootStackParamList } from "../../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAPIClient } from "../../hooks/useAPIClient";
import { Colors } from "../../config";
import { StateType } from "../../components/switch";
import { transformData } from "./utils/transformData";

export type WalletListProps = {
  type: StateType
};

export default function WalletList({ type }: WalletListProps) {
  const [dataNew, setDataNew] = useState<any[]>([]);
  const { data, loading, error, fetch } = useAPIClient();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const urlMap = {
    moneda: "api/tickers/?start=0&limit=30",
    exchange: "api/exchanges/",
  };

  useEffect(() => {
    fetch("GET", urlMap[type]);
  }, [type]);

  useEffect(() => {
    const transformedData = transformData(data || [], type);
    setDataNew(transformedData);
  }, [data, type]);

  const renderItem = ({ item }: { item: any }) => (
    <Card
      onPress={() => navigation.navigate("Details", { coinId: item.id })}
      id={item.id}
      title={item.title}
      value={item.value}
      subtitle={item.subtitle}
    />
  );

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <View style={{ height: '100%', justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>
          <Text style={{ color: Colors.secondary }}>Error al cargar los datos</Text>
        </View>
      ) : (
        <FlatList
          data={dataNew}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          keyExtractor={(item, index) => item.id ? `index-${item.id}` : `index-${index}`}
          ListEmptyComponent={() =>
            <View style={{ height: '100%', justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>
              <Text style={{ color: Colors.secondary }}>No se encontraron resultados</Text>
            </View>
          }
        />
      )}
    </View>
  );
}
