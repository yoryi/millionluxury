import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, SafeAreaView } from "react-native";
import { Colors } from "../../config";

const GradientWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <LinearGradient
            colors={[Colors.Primary, Colors.Background]}
            style={styles.gradient}
            start={{ x: 1, y: -2 }}
            end={{ x: -1, y: 0 }}
        >
            <SafeAreaView>{children}</SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
});

export default GradientWrapper;
