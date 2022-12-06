import React from "react";
import { Text, StyleSheet, View } from 'react-native';
import { StatusBar } from "expo-status-bar";

import data from '../../../src/data/motivacional';

export default function Motivacionais(props) {
    return (
        <>
            <StatusBar style="light" backgroundColor="#5B35B0"/>
            <View style={styles.pageContainer}>
                <Text style={styles.title}>{data[0].title}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: 27,
        fontWeight: '600',
        color: '#353535',
        marginTop: 20,
    },
})
