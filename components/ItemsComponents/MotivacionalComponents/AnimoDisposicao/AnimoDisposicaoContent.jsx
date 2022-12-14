import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Pressable, Share } from 'react-native';
import BottomNavigator from '../../../BottomNavigator/BottomNavigator';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

// Ads
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6506458857770558~3914564433';

export default function AnimoContent() {
    const navigation = useNavigation();
    const route = useRoute();
    const title = route.params?.title;
    const content = route.params?.content;
    const author = route.params?.author;

    const onShare = async () => {
        try {
        const result = await Share.share({
            message:
            `${title}
            
            ${content} 
            
            ${author}`,
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {} else {}
        } else if (result.action === Share.dismissedAction) {}
        } catch (error) {
        alert(error.message);
        }
    };

    return (
        <>
        <View style={styles.pageContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
                <Text style={styles.author}>{author}</Text>

                <Pressable onPress={onShare} style={styles.share}>
                    <Text style={styles.shareText}>Compartilhe</Text>
                </Pressable>
            </View>
            <BannerAd
            unitId={adUnitId}
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
    },
    share: {
        width: "80%",
        backgroundColor: "#5B35B0",
        borderRadius: 5,
        height: "16%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55    
    },
    shareText: {
        color: "#EEE",
        fontWeight: "600",
        fontSize: 18
    }
})