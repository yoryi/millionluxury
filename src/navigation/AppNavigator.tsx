import React from 'react';
import { Colors } from '../config';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { CoinsScreen, ConfigScreen } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

class AppNavigator extends React.Component {
  getScreenOptions() {
    return {
      tabBarActiveTintColor: Colors.Primary,
      tabBarInactiveTintColor: Colors.Secondary,
      tabBarStyle: {
        backgroundColor: Colors.Background,
        borderTopWidth: 0,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        marginTop: 5,
      },
      tabBarIconStyle: {
        marginTop: 1,
      },
      tabBarItemStyle: {
        borderBottomWidth: 0,
      },
    };
  }
  render() {
    const Tab = createBottomTabNavigator();
    return (
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
          name="Profile"
          component={ConfigScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face-woman-profile" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default AppNavigator;
