import React from "react";
import { Colors } from "../config";
import { View, StyleSheet } from "react-native";
import { GradientWrapper } from "../components";

const FavoriteScreen = () => {
  return <GradientWrapper>
    <View></View>
  </GradientWrapper> 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
});

export default FavoriteScreen;
