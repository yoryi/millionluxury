import React, { useCallback, useRef, useState } from "react";
import { View } from "react-native"
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Wrapper, Header, Switch } from "../components";
import { RootStackParamList } from "../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { formatDate } from "../utils";
import { StateType } from "../components/switch";
import { StatsCard, WalletList, Filters } from "../features";

const HomeScreen = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [coinType, setCoinType] = useState<StateType>('moneda');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const formattedDate = formatDate(new Date());

  const toggleModal = useCallback(() => {
    setIsFilterOpen(!isFilterOpen)
    bottomSheetModalRef.current?.collapse()
  }, []);

  return (
    <Wrapper>
      <View style={{ paddingLeft: 25, paddingRight: 25, height: '100%' }}>
        <Header
          type={'text'}
          title={'¡Hola! 👋'}
          subtitle={'Bienvenido a Million Luxury'}
          optinalText={formattedDate}
          onLeftPress={() => navigation.goBack()}
        />
        <StatsCard />
        <Switch
          onSelect={setCoinType}
          onOpenFilters={toggleModal}
          containerStyle={{ paddingTop: 15 }}
        />
        <WalletList type={coinType} />
        <Filters isFilterOpen={isFilterOpen} bottomSheetModalRef={bottomSheetModalRef} />
      </View>
    </Wrapper>
  );
};

export default HomeScreen;
