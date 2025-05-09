import React, { useCallback, useRef, useState } from "react";
import { Colors } from "../config";
import { View, FlatList } from "react-native";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Wrapper, InputRN, Modal, Card, Header, Switch } from "../components";
import { RootStackParamList } from "../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { formatDate } from "../utils";
import StatsCard from "../features/statsCard";
import WalletList from "../features/walletList";
import { StateType } from "../components/switch";

const HomeScreen = () => {
  const [inputSearch, setInputSearch] = useState("");
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


        {/* Modals */}
        {isFilterOpen && <Modal
          snapPoints={["85%"]}
          bottomSheetModalRef={bottomSheetModalRef}
          onClose={() => bottomSheetModalRef.current?.close()}
          backgroundStyle={{ backgroundColor: Colors.background }}
          modalContainerStyle={{ backgroundColor: Colors.background }}>
          <InputRN
            value={inputSearch}
            iconLeft={'magnify'}
            placeholder={"Search"}
            onChangeText={setInputSearch}
            onClear={() => setInputSearch('')}
            style={{ color: Colors.secondary }}
            placeholderTextColor={Colors.textSecondary}
            containerStyle={{ backgroundColor: Colors.background50 }}
          />
          <FlatList
            renderItem={() => {
              return (
                <Card
                  onPress={() => navigation.navigate({ name: 'Details', params: { coinId: 1 } })}
                  id={""}
                  title={""}
                  value={""}
                  subtitle={""}
                />
              )
            }}
            data={Array.from({ length: 15 })}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 30 }}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          />
        </Modal>}
      </View>
    </Wrapper>
  );
};

export default HomeScreen;
