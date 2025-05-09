import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../config';

type StateType = 'moneda' | 'exchange';

interface SwitchComponentProps {
  onSelect?: (selected: StateType) => void;
  onOpenFilters?: () => void;
  containerStyle?: ViewStyle;
}

interface SwitchComponentState {
  currentSelection: StateType;
}

/**
 * A switch component for toggling between "Moneda" and "Exchange" options, with a filter button.
 *
 * @component
 * @param {() => void} [onSelect] - Optional callback triggered when a selection is made.
 * @param {() => void} [onOpenFilters] - Optional callback triggered when the filter button is pressed.
 * @param {ViewStyle} [containerStyle] - Optional style for the container.
 *
 * @example
 * ```tsx
 * <Switch 
 *   onSelect={(selection) => console.log("Selected:", selection)} 
 *   onOpenFilters={() => console.log("Filter opened")} 
 * />
 * ```
 */

class Switch extends Component<SwitchComponentProps, SwitchComponentState> {
  constructor(props: SwitchComponentProps) {
    super(props);
    this.state = {
      currentSelection: 'moneda',
    };
  }

  handleSelect = (selection: StateType) => {
    this.setState({ currentSelection: selection });
    if (this.props.onSelect) {
      this.props.onSelect(selection);
    }
  };

  /**
   * Renders the toggle buttons for "Moneda" and "Exchange".
   * @returns {JSX.Element} The rendered switch component.
   */
  render() {
    const { onOpenFilters, containerStyle } = this.props;
    const { currentSelection } = this.state;

    const monedaStyle = currentSelection === 'moneda' ? styles.active : styles.inactive;
    const exchangeStyle = currentSelection === 'exchange' ? styles.active : styles.inactive;

    return (
      <View style={[styles.container, containerStyle]}>
        <TouchableOpacity
          style={[styles.button, monedaStyle]}
          onPress={() => this.handleSelect('moneda')}>
          <MaterialCommunityIcons name="currency-usd" size={20} color="#fff" />
          <Text style={styles.text}>Moneda</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, exchangeStyle]}
          onPress={() => this.handleSelect('exchange')}>
          <MaterialCommunityIcons name="swap-horizontal" size={20} color="#fff" />
          <Text style={styles.text}>Exchange</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton} onPress={onOpenFilters}>
          <MaterialCommunityIcons name="filter" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    );
  }
}

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
    backgroundColor: Colors.primary,
  },
  inactive: {
    backgroundColor: Colors.background50,
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

export default Switch;
