import React from "react";
import { Colors } from "../config";
import { View, StyleSheet, Text } from "react-native";
import { GradientWrapper } from "../components";

const CoinScreen = () => {
  return <GradientWrapper>
    <View style={{backgroundColor: 'red'}}>
      <Text>ss</Text>
    </View>
  </GradientWrapper>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
});

export default CoinScreen;
