import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import reflexoes from "../src/data/reflexoes";

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
 
export default function ReflexoesListItem(props) {
    const navigation = useNavigation();
    const filosoficasNavigate = () => {navigation.navigate("Filosóficas")};
    const biblicasNavigate = () => {navigation.navigate("Biblicas")};
    const pensadoresNavigate = () => {navigation.navigate("Pensadores")};
    const espirituaisNavigate = () => {navigation.navigate("Espirituais")};

    return (
        <>
            <Pressable style={styles.item} onPress={filosoficasNavigate}>
                <Text style={styles.itemTitle}>{reflexoes[0].title}</Text>
            </Pressable>

            <Pressable style={styles.item} onPress={biblicasNavigate}> 
                <Text style={styles.itemTitle}>{reflexoes[1].title}</Text>
            </Pressable>

            <Pressable style={styles.item} onPress={pensadoresNavigate}>
                <Text style={styles.itemTitle}>{reflexoes[2].title}</Text>
            </Pressable>

            <Pressable style={styles.item} onPress={espirituaisNavigate}>
                <Text style={styles.itemTitle}>{reflexoes[3].title}</Text>
            </Pressable>
        </>
    )
}