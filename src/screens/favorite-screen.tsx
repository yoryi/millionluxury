import React from "react";
import { Colors } from "../config";
import { View, StyleSheet, Text } from "react-native";
import { GradientWrapper } from "../components";

const FavoriteScreen = () => {
  const headerHome = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.greeting}>Favoritos</Text>
        <Text style={styles.greeting2}>Aquí puedes ver todos tus coins favoritos</Text>
      </View>
    );
  };

  return <GradientWrapper>
    <View style={{ paddingLeft: 30, paddingRight: 30 }}>
      {headerHome()}
    </View>
  </GradientWrapper>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  headerContainer: {
    gap: 5,
    marginTop: 35,
  },
  greeting2: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.TextSecondary,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.Secondary,
  },
});

export default FavoriteScreen;
