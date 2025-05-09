import React, { Component } from 'react';
import { Colors } from '../../config';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * A wallet card component displaying cryptocurrency information with a like button (OOP version).
 *
 * @component
 * @param {() => void} [onPress] - Optional callback triggered on card press.
 *
 * @example
 * ```tsx
 * <Card onPress={() => console.log("Card pressed")} />
 * ```
 */

interface CardProps {
  onPress?: () => void;
}

interface CardState {
  isLiked: boolean;
}

class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  toggleLike = () => {
    this.setState((prevState) => ({ isLiked: !prevState.isLiked }));
  };

  render() {
    const { onPress } = this.props;
    const { isLiked } = this.state;

    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.header}>
          <Text style={styles.title}>Bitcoin (BTC)</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>$6456.52</Text>
            <TouchableOpacity onPress={this.toggleLike}>
              <Ionicons
                name={isLiked ? "heart" : "heart-outline"}
                size={24}
                color={isLiked ? "#e74c3c" : "#757575"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.stat}>24h: -1.47%</Text>
          <Text style={styles.stat}>1h: 0.05%</Text>
          <Text style={styles.stat}>7d: -1.07%</Text>
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
    marginVertical: 10,
  },
  stat: {
    fontSize: 14,
    color: '#757575',
  }
});

export default Card;