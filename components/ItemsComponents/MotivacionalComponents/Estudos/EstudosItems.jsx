import React from "react";
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from "expo-status-bar";
import MotivacionalItems from '../MotivacionalItems';

import EstudosData from './EstudosData'

export default function MotivacionaisConteudo(props) {
    return (
        <>
            <StatusBar style="light" backgroundColor="#5B35B0"/>
            <View style={styles.pageContainer}>
                <Text style={styles.title}>Estudos</Text>
                <FlatList 
                    data={EstudosData}
                    vertical
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <MotivacionalItems data={item}/>}
                    style={styles.listItems}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 27,
        fontWeight: '600',
        color: '#353535',
        marginTop: 20,
    },
    listItems: {
        flexGrow: 0,
        height: "78%"
    }
})
