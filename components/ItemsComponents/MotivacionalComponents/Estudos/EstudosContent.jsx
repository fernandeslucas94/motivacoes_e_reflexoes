import React from "react";
import { Text, StyleSheet, View, FlatList, Pressable } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import BottomNavigator from "../../../BottomNavigator/BottomNavigator";

export default function MotivacionaisConteudo(props) {
    const route = useRoute();
    const title = route.params?.title;
    const content = route.params?.content;
    const author = route.params?.author;
    
    return (
        <>
           <View style={styles.pageContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
                <Text style={styles.author}>{author}</Text>
            </View>
            <BottomNavigator />
        </>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 15,
      textAlign: 'justify',
    },
    title: {
        fontSize: 27,
        fontWeight: '600',
        color: '#353535',
        marginTop: 20,
    },
    content: {
        fontSize: 18,
        fontWeight: '400',
        marginTop: 30,
        marginBottom: 21,
    },
    author: {
        fontSize: 20,
        fontWeight: '600',
        borderBottomColor: '#CCC',
        borderBottomWidth: 3,
        paddingBottom: 3,
    }
})