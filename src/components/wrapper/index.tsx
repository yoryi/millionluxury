import React, { ReactNode, Component } from "react";
import { Colors } from "../../config";
import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

/**
 * A gradient background wrapper component using LinearGradient (OOP version).
 *
 * @component
 * @param {ReactNode} children - Content to be rendered inside the wrapper.
 *
 * @example
 * ```tsx
 * <Wrapper>
 *   <Text>Contenido</Text>
 * </Wrapper>
 * ```
 */

class Wrapper extends Component<{ children: ReactNode }> {
  render() {
    const { children } = this.props;
    return (
      <LinearGradient
        colors={[Colors.primary, Colors.background]}
        start={{ x: 1, y: -2 }}
        end={{ x: -1, y: 0 }}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default Wrapper;
