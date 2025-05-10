import React from "react";
import { Colors } from "../config";
import { View, StyleSheet, FlatList } from "react-native";
import { Card, Header, Wrapper } from "../components";

import { RootStackParamList } from "../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAPIClient } from "../hooks/useAPIClient";

const FavoriteScreen = () => {
  const { data, loading, error, fetch } = useAPIClient();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Wrapper>
      <View style={{ paddingLeft: 25, paddingRight: 25, height: '100%' }}>
        <Header
          type={'text'}
          title={'Favoritos'}
          optinalText={'Aquí puedes ver todos tus coins favoritos'}
          onLeftPress={() => navigation.goBack()}
        />
        <FlatList
          renderItem={() => (
            <Card
              onPress={() => navigation.navigate({ name: 'Details', params: { coinId: 1 } })}
              id={""}
              title={""}
              value={""}
              subtitle={""}
            />
          )}
          data={Array.from({ length: 1 })}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 30 }}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        />
      </View>
    </Wrapper>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerContainer: {
    gap: 5,
    paddingTop: 20,
  },
  greeting2: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.textSecondary,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary,
  },
});

export default FavoriteScreen;
