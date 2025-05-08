import React from 'react';
import { Colors } from '../config';
import { Ionicons } from '@expo/vector-icons';
import { CoinsScreen, ConfigScreen } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

class AppNavigator extends React.Component {
  getScreenOptions() {
    return {
      tabBarActiveTintColor: Colors.Background,
      tabBarInactiveTintColor: Colors.Background50
    };
  }
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={this.getScreenOptions()}>
        <Tab.Screen name="Coins" component={CoinsScreen} options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />, headerShown: false
        }} />
        <Tab.Screen name="Config" component={ConfigScreen} options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />, headerShown: false
        }} />
      </Tab.Navigator>
    );
  }
}

export default AppNavigator;
