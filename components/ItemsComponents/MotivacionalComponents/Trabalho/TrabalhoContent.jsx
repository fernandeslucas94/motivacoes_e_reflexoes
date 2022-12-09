import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigator from '../../../BottomNavigator/BottomNavigator';
import TrabalhoData from './TrabalhoData';

export default function TrabalhoContent() {
const navigation = useNavigation();
const route = useRoute();
const title = route.params?.title;
const content = route.params?.content;

    return (
        <>
            <View style={styles.pageContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text>{content}</Text>
            </View>
            <BottomNavigator />
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
})