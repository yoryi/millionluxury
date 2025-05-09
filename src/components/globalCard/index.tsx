import React, { Component } from 'react';
import { Colors } from '../../config';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Pressable, StyleSheet, Animated, ActivityIndicator } from 'react-native';

/**
 * A global statistics card component displaying cryptocurrency data with an expandable view.
 * It includes a loading indicator while data is being fetched and allows expansion for more details.
 *
 * @component
 * @param {() => void} [onPress] - Optional callback triggered when the card is pressed.
 * @param {boolean} loading - A flag indicating whether the card is in loading state.
 * @param {MarketData} data - The market data to display in the card.
 *
 * @example
 * ```tsx
 * <GlobalCard
 *   onPress={() => console.log("Card pressed")}
 *   loading={false}
 *   data={{ total_mcap: 1000000000, coins_count: 10000, active_markets: 50 }}
 * />
 * ```
 */

interface GlobalCardProps {
  onPress?: () => void;
  loading: boolean;
  data: any;
}

interface GlobalCardState {
  isExpanded: boolean;
}

class GlobalCard extends Component<GlobalCardProps, GlobalCardState> {
  height: Animated.Value;
  opacity: Animated.Value;

  constructor(props: GlobalCardProps) {
    super(props);
    this.state = {
      isExpanded: false,
    };

    this.height = new Animated.Value(0);
    this.opacity = new Animated.Value(0);
  }

  handlePress = async () => {
    this.setState(
      (prevState) => ({
        isExpanded: !prevState.isExpanded,
      }),
      async () => {
        this.animateCard();
        if (this.state.isExpanded && this.props.onPress) {
          this.props.onPress();
        }
      }
    );
  };

  animateCard = () => {
    const { isExpanded } = this.state;

    Animated.timing(this.height, {
      toValue: isExpanded ? 120 : 0,
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
    const { data, loading } = this.props;
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
            {loading ? (
              <ActivityIndicator size="small" color={Colors.secondary} />
            ) : data ? (
              <>
                <Text style={styles.info}>💰 Capitalización Total: ${data.total_mcap}</Text>
                <Text style={styles.info}>📊 Criptomonedas Activas: {data.coins_count}</Text>
                <Text style={styles.info}>📈 Mercados Activos: {data.active_markets}</Text>
              </>
            ) : (
              <Text style={styles.info}>Cargando datos...</Text>
            )}
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
