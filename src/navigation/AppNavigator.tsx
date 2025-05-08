import React from "react";
import { Colors } from "../config";
import { Platform, StatusBar } from "react-native";
import { CoinsScreen, FavoriteScreen } from "../screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

class AppNavigator extends React.Component {
  getScreenOptions() {
    return {
      tabBarActiveTintColor: Colors.Primary,
      tabBarInactiveTintColor: Colors.Secondary,
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: Colors.Background,
        height: Platform.OS === 'android' ? 70 : 90,
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
  }
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Tab.Navigator screenOptions={this.getScreenOptions()}>
          <Tab.Screen
            name="Home"
            component={CoinsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="currency-usd" size={size} color={color} />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Favorite"
            component={FavoriteScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="heart" size={size} color={color} />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </>
    );
  }
}

export default AppNavigator;
