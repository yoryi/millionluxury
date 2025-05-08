import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../config";

class ConfigScreen extends Component {
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
    backgroundColor: Colors.Background,
  },
});

export default ConfigScreen;
