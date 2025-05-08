import React from 'react';
import { Colors } from '../config';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

class ProductosScreen extends React.Component {
  render() {
    return <View style={styles.productosScreen} />;
  }
}

class FavoritosScreen extends React.Component {
  render() {
    return <View style={styles.favoritosScreen} />;
  }
}

class AppNavigator extends React.Component {
  getScreenOptions() {
    return {
      tabBarActiveTintColor: Colors.Primary,
      tabBarInactiveTintColor: Colors.Secondary
    };
  }
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={this.getScreenOptions()}
      >
        <Tab.Screen name="Coins" component={ProductosScreen} options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />, headerShown: false
        }} />

        <Tab.Screen name="Config" component={FavoritosScreen} options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />, headerShown: false
        }} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  productosScreen: { flex: 1, backgroundColor: 'red' },
  favoritosScreen: { flex: 1, backgroundColor: 'blue' },
});

export default AppNavigator;
