import React, { useState, useEffect } from "react";
import { View, Image, Pressable, Text } from 'react-native';
import styles from './BottomNavigationStyles'
import { useNavigation } from "@react-navigation/native";
import { InterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

import Motivacionais from '../ItemsComponents/MotivacionalComponents/Motivacionais';

// Images
import HomeIcon from '../../assets/images/home.png';
import SaveIcon from '../../assets/images/save.png';
import AccountIcon from '../../assets/images/user.png';

const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true
});

export default function BottomNavigator() {
    const [interstitialLoaded, setinterstitialLoaded] = useState(false);

    const loadInterstitial = () => {
        const unsubscribeLoaded = interstitial.addAdEventListener(
            AdEventType.LOADED, 
            () => {
                setinterstitialLoaded(true);
            }
        );

        const unsubscribeClosed = interstitial.addAdEventListener(
            AdEventType.CLOSED, 
            () => {
                setinterstitialLoaded(false);
                interstitial.load();
            }
        );

        interstitial.load();

        return () => {
            unsubscribeClosed();
            unsubscribeLoaded();
        }
    };

    useEffect(() => {
        const unsubscribeInterstitialEvents = loadInterstitial();
        
        return unsubscribeInterstitialEvents;
    }, []);
    
    const navigation = useNavigation();
    const handleNavigateHome = () => {
        navigation.navigate("Home");
        interstitial.show();
    }
    const handleNavigatAboutUs = () => {
        navigation.navigate("About Us");
    }

    return (
        <>
            <View style={styles.navigatorContainer}>
                <View style={styles.iconsContainer}>
                    {interstitialLoaded ? 
                    <Pressable onPress={handleNavigateHome}>
                        <Image source={HomeIcon} style={styles.icons}/>
                        <Text>Home</Text>
                    </Pressable> : 
                    <Pressable onPress={handleNavigateHome}>
                        <Image source={HomeIcon} style={styles.icons}/>
                        <Text>Home</Text>
                    </Pressable>}
                </View>

                <View style={styles.iconsContainer}>
                    <Pressable onPress={handleNavigatAboutUs}>
                        <Image source={AccountIcon} style={styles.icons}/>
                        <Text>Sobre</Text>
                </Pressable>
                </View>
            </View>
        </>
    )
}