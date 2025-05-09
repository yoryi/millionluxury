import React, { Component } from 'react';
import { Colors } from '../../config';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Pressable, StyleSheet, Animated } from 'react-native';

/**
 * GlobalCard Component - Displays stats and animates expanded view.
 */

interface GlobalCardState {
  isExpanded: boolean;
}

class GlobalCard extends Component<{}, GlobalCardState> {
  height: Animated.Value;
  opacity: Animated.Value;

  constructor(props: {}) {
    super(props);
    this.state = {
      isExpanded: false,
    };

    this.height = new Animated.Value(0);
    this.opacity = new Animated.Value(0);
  }

  handlePress = () => {
    this.setState(
      (prevState) => ({
        isExpanded: !prevState.isExpanded,
      }),
      () => {
        this.animateCard();
      }
    );
  };

  animateCard = () => {
    const { isExpanded } = this.state;

    Animated.timing(this.height, {
      toValue: isExpanded ? 80 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(this.opacity, {
      toValue: isExpanded ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  render() {
    return (
      <LinearGradient
        colors={[Colors.primary, Colors.background]}
        style={styles.gradient}
        start={{ x: 1, y: -2 }}
        end={{ x: -1, y: 0 }}
      >
        <Pressable onPress={this.handlePress}>
          <Text style={styles.title}>Estadísticas Globales</Text>
          <Text style={styles.subTitle}>
            {this.state.isExpanded ? null : 'Presiona para ver detalles'}
          </Text>
          <Animated.View style={{ height: this.height, opacity: this.opacity }}>
            <Text style={styles.info}>💰 Total en portafolio: $5,250.45</Text>
            <Text style={styles.info}>📊 Criptomonedas activas: 8</Text>
          </Animated.View>
        </Pressable>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 16,
    marginVertical: 16,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: '100%',
    alignSelf: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  info: {
    fontSize: 16,
    color: Colors.secondary,
    marginTop: 8,
  },
});

export default GlobalCard;
