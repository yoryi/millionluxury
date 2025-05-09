import React, { useState } from 'react';
import { Colors } from '../../config';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CoinsWallet = () => {
    const [isLiked, setIsLiked] = useState(false);
    const toggleLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>Bitcoin (BTC)</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>$6456.52</Text>
                    <TouchableOpacity onPress={toggleLike}>
                        <Ionicons
                            name={isLiked ? "heart" : "heart-outline"}
                            size={24}
                            color={isLiked ? "#e74c3c" : "#757575"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.statsContainer}>
                <Text style={styles.stat}>24h: -1.47%</Text>
                <Text style={styles.stat}>1h: 0.05%</Text>
                <Text style={styles.stat}>7d: -1.07%</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.Background50,
        padding: 16,
        borderRadius: 12,
        shadowRadius: 4,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.Secondary,
    },
    price: {
        fontSize: 15,
        color: Colors.Primary,
        fontWeight: 'bold',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    stat: {
        fontSize: 14,
        color: '#757575',
    }
});

export default CoinsWallet;
