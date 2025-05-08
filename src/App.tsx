import React from "react";
import { StatusBar } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { useSplashLoader } from "./hooks/useSplashLoader";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const { isReady } = useSplashLoader();
  if (isReady) return null;
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
