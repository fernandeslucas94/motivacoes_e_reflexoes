import React, { useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import motivacional from "../src/data/motivacional";

// Styles
const styles = StyleSheet.create({
    item: {
        backgroundColor: "#5B35B0",
        width: 175,
        height: 105,
        borderRadius: 12,
        marginHorizontal: 10,
        marginTop: 27,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingBottom: 23,
        paddingLeft: 18,
    },

    itemTitle: {
        color: "#FFF",
        fontSize: 21,
        fontWeight: '500',
    }
})
 
export default function MotivacionalListItem(props) {
    const navigation = useNavigation();
    const diaADiaNavigate = () => {navigation.navigate("Dia a Dia")};
    const trabalhoNavigate = () => {navigation.navigate("Trabalho")};
    const esporteNavigate = () => {navigation.navigate("Esporte")};
    const estudosNavigate = () => {navigation.navigate("Estudos")};
    const animoNavigate = () => {navigation.navigate("Animo e Disposição")};

    return (
        <>
            <Pressable style={styles.item} onPress={diaADiaNavigate}>
                <Text style={styles.itemTitle}>{motivacional[0].title}</Text>
            </Pressable>

            <Pressable style={styles.item} onPress={trabalhoNavigate}> 
                <Text style={styles.itemTitle}>{motivacional[1].title}</Text>
            </Pressable>

            <Pressable style={styles.item} onPress={esporteNavigate}>
                <Text style={styles.itemTitle}>{motivacional[2].title}</Text>
            </Pressable>

            <Pressable style={styles.item} onPress={estudosNavigate}>
                <Text style={styles.itemTitle}>{motivacional[3].title}</Text>
            </Pressable>

            <Pressable style={styles.item} onPress={animoNavigate}>
                <Text style={styles.itemTitle}>{motivacional[4].title}</Text>
            </Pressable>
        </>
    )
}