import React, { useState } from "react";
import { Colors } from "../config";
import { GradientWrapper } from "../components";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Reanimated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

const HomeScreen = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contentStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(isExpanded ? 80 : 0, { duration: 300 }),
      opacity: withTiming(isExpanded ? 1 : 0, { duration: 300 }),
    };
  });

  const handlePress = () => {
    setIsExpanded(prev => !prev);
  };

  const CardTotal = () => {
    return (
      <LinearGradient
        colors={[Colors.Primary, Colors.Background]}
        style={styles.gradient}
        start={{ x: 2, y: -2 }}
        end={{ x: -1, y: 0 }}
      >
        <Pressable onPress={handlePress}>
          <Text style={styles.title}>Estadísticas Globales</Text>
          <Text style={styles.subTitle}>{isExpanded ? null : 'Despliega para ver mas informacion'}</Text>
          <Reanimated.View style={contentStyle}>
            <Text style={styles.info}>💰 Total en portafolio: $5,250.45</Text>
            <Text style={styles.info}>📊 Criptomonedas activas: 8</Text>
          </Reanimated.View>
        </Pressable>
      </LinearGradient>
    );
  };

  const headerHome = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.greeting}>¡Hola! 👋 </Text>
        <Text style={styles.greeting2}>Bienvenido a Million Luxury</Text>
        <Text style={styles.date}>Viernes, 12 de Diciembre, 2025</Text>
      </View>
    );
  };

  const ListCoins = () => {
    return (
      <View style={styles.listCoins}>
        <Text style={styles.listTitle}>Lista de Monedas</Text>
      </View>
    );
  };

  return (
    <GradientWrapper>
      <View style={{ paddingLeft: 30, paddingRight: 30 }}>
        {headerHome()}
        {CardTotal()}
        {ListCoins()}
      </View>
    </GradientWrapper>
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
    marginTop: 35,
  },
  greeting2: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.Secondary,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.Secondary,
  },
  date: {
    fontSize: 14,
    color: Colors.TextSecondary,
  },
  card: {
    backgroundColor: Colors.Primary,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: "100%",
    alignSelf: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.Secondary,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.Secondary,
  },
  info: {
    fontSize: 16,
    color: Colors.Secondary,
    marginTop: 8,
  },
  listCoins: {
    marginTop: 15,
    alignItems: 'flex-start'
  },
  listTitle: {
    fontSize: 18,
    paddingLeft: 2,
    color: Colors.Secondary,
    fontWeight: "bold",
  }
});

export default HomeScreen;