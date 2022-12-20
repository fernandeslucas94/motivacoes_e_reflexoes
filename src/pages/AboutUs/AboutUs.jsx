import { StatusBar, View, Text, Image } from 'react-native';
import React from 'react';
import styles from './AboutUsStyles';
import BottomNavigator from '../../../components/BottomNavigator/BottomNavigator';
import LogoImage from '../../../assets/images/logo-com-texto-escuro.png';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6506458857770558/6290952933';

export default function AboutUs() {
    return (
        <>
            <StatusBar style="light" backgroundColor="#5B35B0"/>
            <View style={styles.pageArea}>
                <Image source={LogoImage} style={styles.image}/>
                <Text style={styles.description}>
                    Nosso propósito é lhe auxiliar no dia a dia, para que você possa viver sua vida com mais tranquilidade, felicidade e paz, e assim, possa desfrutar de momentos prazerosos com amigos, 
                    família e consigo próprio! 
                </Text>
            </View>
            <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
             />
            <BottomNavigator />
        </>
    )
}