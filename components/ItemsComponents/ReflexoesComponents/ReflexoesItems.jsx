import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
 
export default function ReflexoesItems(props) {
    const navigation = useNavigation();

    const handleNavigate = () => {
        // navigation.navigate("");
    }

    return (
        <>
            <Pressable style={styles.item} onPress={handleNavigate}>
                <Text style={styles.itemTitle}>{props.data.title}</Text>
            </Pressable>
        </>
    )
}

// Styles
const styles = StyleSheet.create({
    item: {
        backgroundColor: "#5B35B0",
        width: 300,
        height: 75,
        borderRadius: 8,
        marginTop: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },

    itemTitle: {
        color: "#FFF",
        fontSize: 21,
        fontWeight: '500',
    }
})