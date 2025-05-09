import React, { Component } from "react";
import { StatusBar } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { useSplashLoader } from "./hooks/useSplashLoader";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

interface AppState {
  isReady: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  componentDidMount() {
    this.loadSplash();
  }

  loadSplash = async () => {
    const { isReady } = useSplashLoader();
    this.setState({ isReady });
  };

  render() {
    const { isReady } = this.state;
    if (isReady) return null;
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <StatusBar barStyle={"light-content"} />
              <AppNavigator />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    );
  }
}

export default App;