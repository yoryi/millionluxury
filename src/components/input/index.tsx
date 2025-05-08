import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View, TextInputProps, ViewStyle } from "react-native";

interface Input extends TextInputProps {
  value?: string;
  placeholder?: string;
  onClear?: () => void;
  inputStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  placeholderTextColor?: string;
  onChangeText: (text: string) => void;
  iconLeft?: keyof typeof MaterialCommunityIcons.glyphMap;
}

const InputRN: React.FC<Input> = ({
  value,
  iconLeft,
  inputStyle,
  placeholder,
  onChangeText,
  containerStyle,
  placeholderTextColor,
  onClear,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialCommunityIcons name={iconLeft} size={24} color="#555" style={styles.icon} />
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
};

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
