import React from "react";
import { Colors } from "../config";
import { Wrapper } from "../components";
import { View, StyleSheet, Text } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const DetailsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Wrapper>
      <View style={{ paddingLeft: 25, paddingRight: 25, height: '100%' }}>
        <View style={styles.headerContainer}>
          <Text style={styles.greeting}>Favoritos</Text>
          <Text style={styles.greeting2}>Aquí puedes ver todos tus coins favoritos</Text>
        </View>
      </View>
    </Wrapper>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  headerContainer: {
    gap: 5,
    paddingTop: 20,
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

export default DetailsScreen;