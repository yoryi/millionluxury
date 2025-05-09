/**
 * Manages the splash screen lifecycle by preventing auto-hide and loading assets.
 *
 * @class SplashScreenManager
 */
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

class SplashScreenManager {
  isReady: boolean = false;

  /**
   * Prevents the splash screen from auto-hiding.
   */
  preventAutoHide() {
    SplashScreen.preventAutoHideAsync();
  }

  /**
   * Simulates loading assets and hides the splash screen once complete.
   * 
   * @async
   */
  async loadAssets() {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    this.isReady = true;
    SplashScreen.hideAsync();
  }

  /**
   * Returns whether the splash screen is ready to be hidden.
   * 
   * @returns {boolean}
   */
  getIsReady() {
    return this.isReady;
  }
}

/**
 * Custom hook that manages splash screen visibility during app initialization.
 * 
 * @returns - { isReady: boolean }
 */
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
