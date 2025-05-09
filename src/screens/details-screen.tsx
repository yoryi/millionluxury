import React from "react";
import { Colors } from "../config";
import { Wrapper } from "../components";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const DetailsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Wrapper>
      <View style={{ paddingLeft: 25, paddingRight: 25, height: '100%' }}>

        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={Colors.secondary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>USD</Text>
          <TouchableOpacity onPress={() => console.log("Reload pressed")} style={styles.iconContainer}>
            <MaterialCommunityIcons name="reload" size={24} color={Colors.secondary} />
          </TouchableOpacity>
        </View>


      </View>
    </Wrapper>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  headerContainer: {
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
});

export default DetailsScreen;