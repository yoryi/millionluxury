import React from "react";
import { Colors } from "../config";
import { GradientWrapper} from "../components";
import { View, StyleSheet, Text } from "react-native";

const DetailsScreen = () => {
  const headerHome = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.greeting}>¡Hola! 👋 </Text>
        <Text style={styles.greeting2}>Bienvenido a Million Luxury</Text>
        <Text style={styles.date}>Viernes, 12 de Diciembre, 2025</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <GradientWrapper>
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          {headerHome()}
        </View>
      </GradientWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    gap: 5,
    marginTop: 35,
  },
  greeting2: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.Secondary,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.Secondary,
  },
  date: {
    fontSize: 14,
    color: Colors.TextSecondary,
  },
});

export default DetailsScreen;