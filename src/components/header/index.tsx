import React, { Component } from "react";
import { Colors } from "../../config";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";

/**
 * A header component that displays either a navigation header or a text-based header.
 *
 * @component
 * @param {string} [title] - The title of the header.
 * @param {"nav" | "text"} [type="nav"] - The type of header to display (navigation or text).
 * @param {keyof typeof MaterialCommunityIcons.glyphMap} [leftIcon] - Optional left icon from MaterialCommunityIcons.
 * @param {keyof typeof MaterialCommunityIcons.glyphMap} [rightIcon] - Optional right icon from MaterialCommunityIcons.
 * @param {() => void} [onLeftPress] - Optional callback triggered on left icon press.
 * @param {() => void} [onRightPress] - Optional callback triggered on right icon press.
 * @param {ViewStyle} [style] - Optional style for the container.
 * @param {TextStyle} [titleStyle] - Optional style for the title.
 * @param {string} [optinalText] - Optional text displayed in the text header type.
 * @param {string} [subtitle] - Optional subtitle for the text header.
 *
 * @example
 * ```tsx
 * <Header 
 *   title="USD" 
 *   type="nav" 
 *   leftIcon="menu" 
 *   rightIcon="settings" 
 *   onLeftPress={() => console.log("Left icon pressed")} 
 *   onRightPress={() => console.log("Right icon pressed")} 
 * />
 * ```
 * 
 *  * Example of using the Header component with type "text".
 *
 * @example
 * ```tsx
 * <Header 
 *   title="Bienvenido" 
 *   type="text" 
 *   subtitle="Hola!"
 *   optinalText="Nota: Example" 
 * />
 * ```
 * 
 */

interface HeaderProps {
  title?: string;
  type?: "nav" | "text";
  leftIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
  rightIcon?: keyof typeof MaterialCommunityIcons.glyphMap;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  optinalText?: string;
  subtitle?: string;
}

class Header extends Component<HeaderProps> {
  /**
   * Renders the navigation header with left and right icons.
   * @returns {JSX.Element} The navigation header component.
   */
  renderNav() {
    const {
      title,
      leftIcon = "arrow-left",
      rightIcon = "reload",
      onLeftPress,
      onRightPress,
      style,
      titleStyle,
    } = this.props;

    return (
      <View style={[styles.headerContainerNav, style]}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
            <MaterialCommunityIcons name={leftIcon} size={24} color={Colors.secondary} />
          </TouchableOpacity>
        )}
        <Text style={[styles.headerTitle, titleStyle]}>{title}</Text>
        {rightIcon && (
          <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
            <MaterialCommunityIcons name={rightIcon} size={24} color={Colors.secondary} />
          </TouchableOpacity>
        )}
      </View>
    );
  }

  /**
   * Renders the text-based header with optional subtitle and additional text.
   * @returns {JSX.Element} The text header component.
   */
  renderText() {
    const { title, subtitle, optinalText } = this.props;

    return (
      <View style={styles.headerContainerText}>
        <Text style={styles.greeting}>{title}</Text>
        {subtitle && <Text style={styles.greeting2}>{subtitle}</Text>}
        {optinalText && <Text style={styles.date}>{optinalText}</Text>}
      </View>
    );
  }

  /**
   * Main render method that determines the type of header to display.
   * @returns {JSX.Element} The rendered header component.
   */
  render() {
    const { type } = this.props;

    return type === "nav" ? this.renderNav() : this.renderText();
  }
}

const styles = StyleSheet.create({
  headerContainerText: {
    gap: 5,
    paddingTop: 20,
  },
  headerContainerNav: {
    borderRadius: 20,
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: Colors.background,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  iconContainer: {
    padding: 5,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  greeting2: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  date: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});

export default Header;
