import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class CoinsScreen extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default CoinsScreen;
