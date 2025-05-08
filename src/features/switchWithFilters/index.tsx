import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../config';

type StateType = 'moneda' | 'exchange';
type NativeSwitchComponentProps = {
  onSelect?: (selected: StateType) => void;
  onOpenFilters?: () => void;
};

const SwitchWithFilters = ({
  onSelect,
  onOpenFilters,
}: NativeSwitchComponentProps) => {
  const [currentSelection, setCurrentSelection] = useState<StateType>('moneda');
  const monedaStyle = currentSelection === 'moneda' ? styles.active : styles.inactive;
  const exchangeStyle = currentSelection === 'exchange' ? styles.active : styles.inactive;

  const handleSelect = (selection: StateType) => {
    setCurrentSelection(selection);
    if (onSelect) {
      onSelect(selection);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, monedaStyle]}
        onPress={() => handleSelect('moneda')}>
        <MaterialCommunityIcons name="currency-usd" size={20} color="#fff" />
        <Text style={styles.text}>Moneda</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, exchangeStyle]}
        onPress={() => handleSelect('exchange')}>
        <MaterialCommunityIcons name="swap-horizontal" size={20} color="#fff" />
        <Text style={styles.text}>Exchange</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton} onPress={onOpenFilters}>
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
  },
});

export default SwitchWithFilters;
