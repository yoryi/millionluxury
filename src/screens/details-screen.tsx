import React from "react";
import { Colors } from "../config";
import { Wrapper } from "../components";
import { View, StyleSheet, Text } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Header from "../components/header";

const DetailsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Wrapper>
      <View style={{ paddingLeft: 25, paddingRight: 25, height: "100%" }}>
        <Header
          title="USD"
          type={'nav'}
          onLeftPress={() => navigation.goBack()}
        />

        {/* Text */}
        <View style={{ paddingTop: 50 }}>
          <Text style={styles.title}>Información de la Moneda</Text>
          <Text style={styles.subtitle}>
            Consulta los detalles completos de la moneda seleccionada.
          </Text>
        </View>

        {/* Info */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionItem}>
            <Text style={styles.label}>Network</Text>
            <Text style={styles.value}>Ethereum</Text>
          </View>

          <View style={styles.sectionItem}>
            <Text style={styles.label}>Network fee</Text>
            <Text style={styles.value}>~ USD 0.01</Text>
          </View>

          <View style={styles.sectionItem}>
            <Text style={styles.label}>Send time</Text>
            <Text style={styles.value}>est. about 30 min</Text>
          </View>

          <View style={styles.sectionItem}>
            <Text style={styles.label}>Total</Text>
            <Text style={styles.totalValue}>20.00 USD (0.013 ETH)</Text>
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    borderRadius: 20,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: Colors.background,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  iconContainer: {
    padding: 5,
  },
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
  sectionContainer: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 12,
    marginVertical: 25,
  },
  sectionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  label: {
    color: "#aaa",
  },
  value: {
    color: "#fff",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default DetailsScreen;
