import React from "react";
import { Colors } from "../config";
import { View, StyleSheet, Text,  FlatList } from "react-native";
import CoinsWallet from "../components/card";
import { GradientWrapper } from "../components";
import { RootStackParamList } from "../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const FavoriteScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <GradientWrapper>
      <View style={{ paddingLeft: 25, paddingRight: 25, height: '100%' }}>
        <View style={styles.headerContainer}>
          <Text style={styles.greeting}>Favoritos</Text>
          <Text style={styles.greeting2}>Aquí puedes ver todos tus coins favoritos</Text>
        </View>
        <FlatList
          renderItem={() => <CoinsWallet onPress={() => navigation.navigate({ name: 'Details', params: { coinId: 1 } })}  />}
          data={Array.from({ length: 15 })}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 30 }}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        />
      </View>
    </GradientWrapper>
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

export default FavoriteScreen;
