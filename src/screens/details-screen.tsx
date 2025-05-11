import React, { useMemo } from "react";
import { Wrapper } from "../components";
import Header from "../components/header";
import { useAPIClient } from "../hooks/useAPIClient";
import { View, StyleSheet, Text } from "react-native";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

class CoinDetails {
  name: string;
  price: Float;
  symbol: string;
  volume: Float;
  constructor(data: { name: string; price_usd: string; symbol: string; volume24: number; }) {
    this.name = data?.name || "-";
    this.price = parseFloat(data?.price_usd) || 0;
    this.symbol = data?.symbol || "-";
    this.volume = data?.volume24 || 0;
  }

  getDisplayData() {
    return [
      { label: "Nombre", value: this.name },
      { label: "Precio", value: `$ ${this.price.toFixed(2)}` },
      { label: "Symbol", value: this.symbol },
      { label: "Volumen", value: this.volume.toLocaleString() }
    ];
  }
}

const DetailsScreen = () => {
  const { data, fetch } = useAPIClient();
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute<RouteProp<{ DetailsScreen: { coinId?: string; type?: string; payload?: any } }, 'DetailsScreen'>>();
  const { coinId, type, payload } = route.params || {};

  const isCoin = type === "moneda";
  const newData = useMemo(() => {
    if (isCoin) {
      fetch("GET", `api/ticker/?id=${coinId}`);
      return new CoinDetails(data?.[0]);
    }
    return payload || {};
  }, [data, isCoin, payload, coinId]);

  const displayData = useMemo<Array<{ label: string; value: string | number }>>(() =>
    isCoin ? newData.getDisplayData() : [
      { label: "Título", value: newData.title || "-" },
      { label: "Subtítulo", value: newData.subtitle || "-" },
      { label: "Valor", value: newData.value?.toLocaleString() || "-" }
    ], [newData, isCoin]
  );

  return (
    <Wrapper>
      <View style={styles.container}>
        <Header
          type="nav"
          title={isCoin ? newData.name : newData.title}
          onRightPress={() => fetch("GET", `api/ticker/?id=${coinId}`)}
          onLeftPress={() => navigation.goBack()}
        />
        <View style={{ paddingTop: 50 }}>
          <Text style={styles.title}>Información de la Moneda</Text>
          <Text style={styles.subtitle}>
            Consulta los detalles completos de la moneda seleccionada.
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          {displayData.map(({ label, value }) => (
            <View style={styles.sectionItem} key={label}>
              <Text style={styles.label}>{label}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          ))}
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 10,
  },
  subtitle: {
    color: "#aaa",
    marginBottom: 20,
  },
  container: {
    padding: 25,
    height: "100%"
  },
  sectionContainer: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 12,
    marginTop: 25
  },
  sectionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5
  },
  label: {
    color: "#aaa"
  },
  value: {
    color: "#fff",
    fontWeight: "bold"
  }
});

export default DetailsScreen;