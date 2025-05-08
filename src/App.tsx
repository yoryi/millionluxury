import React, { Component } from "react";
import { StatusBar } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

class App extends Component {
  renderStatusBar() {
    return <StatusBar barStyle={'light-content'} />;
  }
  renderNavigator() {
    return <AppNavigator />
  }
  render() {
    return (
      <NavigationContainer>
        {this.renderStatusBar()}
        {this.renderNavigator()}
      </NavigationContainer>
    );
  }
}
export default App;
