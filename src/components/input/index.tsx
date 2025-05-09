import React, { Component } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View, TextInputProps, ViewStyle } from "react-native";

/**
 * A reusable input component with optional icon and clear functionality (OOP version).
 *
 * @component
 * @param {string} [value] - The input value.
 * @param {string} [placeholder] - Placeholder text for the input.
 * @param {() => void} [onClear] - Optional callback to clear the input value.
 * @param {ViewStyle} [inputStyle] - Optional style for the input.
 * @param {ViewStyle} [containerStyle] - Optional style for the container.
 * @param {string} [placeholderTextColor] - Color for the placeholder text.
 * @param {(text: string) => void} onChangeText - Function to handle text change.
 * @param {keyof typeof MaterialCommunityIcons.glyphMap} [iconLeft] - Optional left icon name.
 *
 * @example
 * ```tsx
 * <InputRN placeholder="Enter text" onChangeText={(text) => console.log(text)} />
 * ```
 */

interface InputProps extends TextInputProps {
  value?: string;
  placeholder?: string;
  onClear?: () => void;
  inputStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  placeholderTextColor?: string;
  onChangeText: (text: string) => void;
  iconLeft?: keyof typeof MaterialCommunityIcons.glyphMap;
}

class InputRN extends Component<InputProps> {
  render() {
    const { value, iconLeft, inputStyle, placeholder, onChangeText, containerStyle, placeholderTextColor, onClear, ...props } = this.props;

    return (
      <View style={[styles.container, containerStyle]}>
        {iconLeft && <MaterialCommunityIcons name={iconLeft} size={24} color="#555" style={styles.icon} />}
        <View style={{ flex: 1 }}>
          <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={[styles.input, inputStyle]}
            placeholderTextColor={placeholderTextColor}
            {...props}
          />
        </View>
        {value && (
          <MaterialCommunityIcons
            size={24}
            color="#888"
            name="close-circle"
            style={styles.clearIcon}
            onPress={onClear}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  clearIcon: {
    marginLeft: 8,
  },
});

export default InputRN;
