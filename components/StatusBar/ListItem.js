import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Data
import Data from '../../src/data/motivacional';

// Styles
const styles = StyleSheet.create({
    item: {
        backgroundColor: "#5B35B0",
        width: 200,
        height: 120,
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
 
export default function ListItem(props) {
    return (
        <>
            <View style={styles.item} onPress={() => alert("Funcionou!")}>
                <Text style={styles.itemTitle}>{props.data.title}</Text>
            </View>
        </>
    )
}