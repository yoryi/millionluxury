import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

class SplashScreenManager {
  isReady: boolean = false;
  preventAutoHide() {
    SplashScreen.preventAutoHideAsync();
  }
  async loadAssets() {
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    this.isReady = true;
    SplashScreen.hideAsync();
  }
  getIsReady() {
    return this.isReady;
  }
}

export function useSplashLoader() {
  const splashScreenManager = new SplashScreenManager();
  useEffect(() => {
    splashScreenManager.preventAutoHide();
    splashScreenManager.loadAssets();
  }, []);
  return {
    isReady: splashScreenManager.getIsReady(),
  };
}
