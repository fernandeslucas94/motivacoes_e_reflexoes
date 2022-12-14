import { StatusBar, View, Text, Image } from 'react-native';
import React from 'react';
import styles from './AboutUsStyles';
import BottomNavigator from '../../../components/BottomNavigator/BottomNavigator';
import LogoImage from '../../../assets/images/logo-com-texto-escuro.png';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

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

                <Text style={styles.description}>
                    Desta forma, nós tivemos a idéia de desenvolver 
                    este aplicativo, para que compartilhar com outras pessoas, reflexões, pensamentos, frases motivacionais que pudessem trazer benefícios 
                    para todos que usufruam do aplicativo!
                </Text>
            </View>
            <BannerAd
            unitId={TestIds.BANNER}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
             />
            <BottomNavigator />
        </>
    )
}