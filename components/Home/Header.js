import React from 'react';

import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Food Order</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        marginTop:StatusBar.currentHeight,
        flexDirection:"row",
        alignSelf:"center"
    },
    title: {
        fontSize: 32,
        color:'purple',
        fontWeight:'bold'
    }
})
