import React from "react";
import { View } from "react-native";
import { Header, Wrapper } from "../components";

import { RootStackParamList } from "../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useAPIClient } from "../hooks/useAPIClient";
import { WalletList } from "../features";

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
        <WalletList onlyFavorite={true} />
      </View>
    </Wrapper>
  )
};

export default FavoriteScreen