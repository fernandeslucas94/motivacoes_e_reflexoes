import React from "react";
import { Text, StyleSheet, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";

// Components
import ReflexoesItems from '../ReflexoesComponents/ReflexoesItems';

export default function ReflexoesConteudo(props) {
    const route = useRoute();

    return (
        <>
            <StatusBar style="light" backgroundColor="#5B35B0"/>
            <View style={styles.pageContainer}>
            <Text style={styles.title}>{title}</Text>
                <FlatList 
                    data={MotivacionalData}
                    vertical
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <ReflexoesItems data={item}/>}
                    style={styles.listItems}
                />
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