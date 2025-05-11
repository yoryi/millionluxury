import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../config";
import { Platform } from "react-native";
import { CoinsScreen, FavoriteScreen, DetailsScreen } from "../screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Routes } from "../types/navigation";

class TabNavigator extends React.Component {
  private Tab = createBottomTabNavigator();
  private screenOptions = {
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: Colors.secondary,
    tabBarStyle: {
      borderTopWidth: 0,
      backgroundColor: Colors.background,
      height: Platform.OS === "android" ? 70 : 90,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      marginTop: 5,
    },
    tabBarIconStyle: {
      marginTop: 0,
    },
    tabBarItemStyle: {
      borderBottomWidth: 0,
    },
  };
  render() {
    const { Tab } = this;
    return (
      <Tab.Navigator screenOptions={this.screenOptions}>
        <Tab.Screen
          name={Routes.Home}
          component={CoinsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="currency-usd"
                size={size}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
        {/* <Tab.Screen
          name={Routes.Favorite}
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" size={size} color={color} />
            ),
            headerShown: false,
          }}
        /> */}
      </Tab.Navigator>
    );
  }
}

class AppNavigator extends React.Component {
  private Stack = createNativeStackNavigator();
  render() {
    const { Stack } = this;
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.Tabs}
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.Details}
          component={DetailsScreen}
          options={{ title: "Detalles", headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
export default AppNavigator;