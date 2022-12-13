import React from "react";
import { Text, StyleSheet, View, FlatList, Pressable } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import BottomNavigator from '../../../BottomNavigator/BottomNavigator';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import FilosoficasData from './FilosoficasData';

export default function MotivacionaisConteudo(props) {
    
const HandleClick = (props) => {

const title = props.data.title;
const content = props.data.content;
const author = props.data.author;
const navigation = useNavigation();
const handleNavigate = () => {
    navigation.navigate("FilosoficasContent", {title, content, author});
}
    return (
        <>
            <Pressable style={styles.item} onPress={handleNavigate}>
                <Text style={styles.itemTitle}>{title}</Text>
            </Pressable>
        </>
    )
}

    return (
        <>
            <StatusBar style="light" backgroundColor="#5B35B0"/>
            <View style={styles.pageContainer}>
                <Text style={styles.title}>Filosóficas</Text>
                <FlatList 
                    data={FilosoficasData}
                    vertical
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <HandleClick data={item}/>}
                    style={styles.listItems}
                />
            </View>
            <BannerAd
            unitId={TestIds.BANNER}
            size={BannerAdSize.INLINE_ADAPTIVE_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
            />
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
    listItems: {
        flexGrow: 0,
        height: "78%",
    },
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
