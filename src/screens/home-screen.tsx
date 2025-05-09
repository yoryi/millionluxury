import React, { useCallback, useRef, useState } from "react";
import { Colors } from "../config";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text, Pressable, FlatList } from "react-native";
import Reanimated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Wrapper, InputRN, Modal, Card } from "../components";
import SwitchWithFilters from "../features/switchFilters";
import { RootStackParamList } from "../types/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [inputSearch, setInputSearch] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const contentStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(isExpanded ? 80 : 0, { duration: 300 }),
      opacity: withTiming(isExpanded ? 1 : 0, { duration: 300 }),
    };
  });

  const handlePress = () => {
    setIsExpanded(prev => !prev);
  };

  const toggleModal = useCallback(() => {
    setIsFilterOpen(!isFilterOpen)
    bottomSheetModalRef.current?.collapse()
  }, []);

  return (
    <Wrapper>
      <View style={{ paddingLeft: 25, paddingRight: 25, height: '100%' }}>

        <View style={styles.headerContainer}>
          <Text style={styles.greeting}>¡Hola! 👋 </Text>
          <Text style={styles.greeting2}>Bienvenido a Million Luxury</Text>
          <Text style={styles.date}>Viernes, 12 de Diciembre, 2025</Text>
        </View>

        <LinearGradient
          colors={[Colors.primary, Colors.background]}
          style={styles.gradient}
          start={{ x: 1, y: -2 }}
          end={{ x: -1, y: 0 }}
        >
          <Pressable onPress={handlePress}>
            <Text style={styles.title}>Estadísticas Globales</Text>
            <Text style={styles.subTitle}>{isExpanded ? null : 'Presiona para ver detalles'}</Text>
            <Reanimated.View style={contentStyle}>
              <Text style={styles.info}>💰 Total en portafolio: $5,250.45</Text>
              <Text style={styles.info}>📊 Criptomonedas activas: 8</Text>
            </Reanimated.View>
          </Pressable>
        </LinearGradient>

        <SwitchWithFilters
          containerStyle={{ paddingTop: 15 }}
          onOpenFilters={toggleModal}
        />

        <FlatList
          renderItem={() => <Card
            onPress={() => navigation.navigate({ name: 'Details', params: { coinId: 1 } })} />}
          data={Array.from({ length: 15 })}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 30 }}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        />

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
                <Card onPress={() => navigation.navigate({ name: 'Details', params: { coinId: 1 } })} />
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

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 16,
    marginVertical: 16,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: "100%",
    alignSelf: "center",
    marginTop: 30,
  },
  headerContainer: {
    gap: 5,
    paddingTop: 20,
  },
  greeting2: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  date: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  info: {
    fontSize: 16,
    color: Colors.secondary,
    marginTop: 8,
  }
});

export default HomeScreen;
