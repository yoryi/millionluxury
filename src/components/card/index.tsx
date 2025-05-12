import React, { Component } from 'react';
import { Colors } from '../../config';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * A wallet card component displaying dynamic cryptocurrency information with a like button (OOP version).
 *
 * @component
 * @param {CardProps} props - Properties of the card component.
 *
 * @example
 * ```tsx
 * <Card id="1" title="Bitcoin" value="$6456.52" subtitle="USA" onPress={() => console.log("Card pressed")}/>
 * ```
 */

interface CardProps {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  onPress?: () => void;
}

interface CardState {
  isLiked: boolean;
}

class Card extends Component<CardProps, CardState> {
  render() {
    const { onPress, title, value, subtitle } = this.props;
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${value}</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.stat}>{subtitle || "-"}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.background50,
    padding: 16,
    borderRadius: 12,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  price: {
    fontSize: 15,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  stat: {
    fontSize: 14,
    color: '#757575',
  }
});

export default Card;