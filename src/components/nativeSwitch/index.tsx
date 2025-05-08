import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../config';

type StateType = 'moneda' | 'exchange';
const NativeSwitchComponent = () => {
  const [currentSelection, setCurrentSelection] = useState<StateType>('moneda');
  const monedaStyle = currentSelection === 'moneda' ? styles.active : styles.inactive;
  const exchangeStyle = currentSelection === 'exchange' ? styles.active : styles.inactive;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.button, monedaStyle]} 
        onPress={() => setCurrentSelection('moneda')}>
        <MaterialCommunityIcons name="currency-usd" size={20} color="#fff" />
        <Text style={styles.text}>Moneda</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, exchangeStyle]} 
        onPress={() => setCurrentSelection('exchange')}>
        <MaterialCommunityIcons name="swap-horizontal" size={20} color="#fff" />
        <Text style={styles.text}>Exchange</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterButton}>
        <MaterialCommunityIcons name="filter" size={24} color="#4CAF50" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 15,
  },
  active: {
    backgroundColor: Colors.Primary,
  },
  inactive: {
    backgroundColor: Colors.Background50,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,
  },
  filterButton: {
    padding: 8,
  }
});

export default NativeSwitchComponent;
