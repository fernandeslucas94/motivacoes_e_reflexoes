import { SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6506458857770558/6290952933';

// Buttons
import { Motivacoes, Reflexoes, Positividade, Autoestima } from "../../../components/Buttons/HomeButtons";

// Styles
import styles from './homeStyling';

export default function HomeScreen() {

    return (
        <>
            <StatusBar style="light" backgroundColor="#5B35B0"/>
            <SafeAreaView style={styles.pageContainer}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '600',
                    paddingLeft: 18,
                    marginTop: 23,
                    color: "#434343"
                }}>
                    Bem estar e positividade para seus dias!
                </Text>

                <Text style={styles.subtitle}>Destaques</Text>
                <View style={styles.destaquesContainer}>
                        <Motivacoes />
                        <Reflexoes />
                </View>

                <Text style={styles.subtitle}>Conteúdos</Text>
                <View style={styles.allContentContainer} >

                    <View style={{flexDirection: 'row'}}>
                        <Motivacoes />
                        <Reflexoes />
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Positividade />
                        <Autoestima />
                    </View>

                </View>
            </SafeAreaView>
            <BannerAd
                    unitId={adUnitId}
                    size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
            />
        </>
    )
}