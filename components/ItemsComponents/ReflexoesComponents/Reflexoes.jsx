import React from "react";
import { Text, StyleSheet, View } from 'react-native';
import { StatusBar } from "expo-status-bar";

import reflexoes from '../../../src/data/reflexoes';

export default function MotivacionaisConteudo(props) {
    const HandleItem = () => {
        for(let i = 0; i < reflexoes.length; i++) {
            <Text>{reflexoes[i].title}</Text>
        }
    }

    return (
        <>
            <StatusBar style="light" backgroundColor="#5B35B0"/>
            <View style={styles.pageContainer}>
                <HandleItem />
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
