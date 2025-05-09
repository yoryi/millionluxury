import React, { ReactNode } from "react";
import { Colors } from "../../config";
import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <LinearGradient
            colors={[Colors.Primary, Colors.Background]}
            start={{ x: 1, y: -2 }}
            end={{ x: -1, y: 0 }}
        >
            <SafeAreaView>{children}</SafeAreaView>
        </LinearGradient>
    );
};
export default GradientWrapper;
