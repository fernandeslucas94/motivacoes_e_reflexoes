import React from "react";
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MotivacionalItems from './MotivacionalItems';
import MotivacionalData from "../../../src/data/MotivacionalContent/MotivacionalData";
import MotivacionalListItem from "../../MotivacionalListItem";

export default function MotivacionaisConteudo(props) {
    const route = useRoute();
    const title = props.route.params?.title;

    return (
        <>
            <StatusBar style="light" backgroundColor="#5B35B0"/>
            <View style={styles.pageContainer}>
                <Text style={styles.title}>{title}</Text>
                <FlatList 
                    data={MotivacionalData}
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
        fontSize: 26,
        fontWeight: '600',
        color: '#000',
        marginTop: 20,
        marginBottom: 20,
    },
    listItems: {
        flexGrow: 0,
        height: "76%",
    }
})
