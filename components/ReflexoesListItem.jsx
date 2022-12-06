import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

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
    return (
        <>
            <Pressable style={styles.item}>
                <Text style={styles.itemTitle}>{props.data.title}</Text>
            </Pressable>
        </>
    )
}