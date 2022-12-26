import { SafeAreaView, Text, View, Pressable, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6506458857770558/6290952933';

// Styles
import styles from './homeStyling';

export default function HomeScreen() {
    return (
        <>
            <StatusBar style="light" backgroundColor="#5B35B0"/>
            <SafeAreaView style={styles.pageContainer}>
                <Text style={{
                    fontSize: 19,
                    fontWeight: '500',
                    paddingLeft: 18,
                    marginTop: 23
                }}>
                    Bem estar e positividade para seus dias!
                </Text>
                <Text style={styles.subtitle}>Destaques</Text>
                <View style={styles.destaquesContainer}>
                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "#D3D3D3" : '#E5E5E5'
                            },
                            styles.item,
                        ]} onPress={() => console.log("Funcionou!")}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.itemTitle}>Motivações</Text>
                                <Image source={require('../../../assets/images/motivational.png')} style={styles.itemImage}/>
                            </View>
                        </Pressable>

                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "#D3D3D3" : '#E5E5E5'
                            },
                            styles.item,
                        ]} onPress={() => console.log("Funcionou!")}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.itemTitle}>Reflexões</Text>
                                <Image source={require('../../../assets/images/yoga.png')} style={styles.itemImage}/>
                            </View>
                        </Pressable>
                </View>

                <Text style={styles.subtitle}>Conteúdos</Text>

                <View style={styles.allContentContainer}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "#D3D3D3" : '#E5E5E5'
                            },
                            styles.item,
                        ]} onPress={() => console.log("Funcionou!")}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.itemTitle}>Motivações</Text>
                                <Image source={require('../../../assets/images/motivational.png')} style={styles.itemImage}/>
                            </View>
                        </Pressable>

                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "#D3D3D3" : '#E5E5E5'
                            },
                            styles.item,
                        ]} onPress={() => console.log("Funcionou!")}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.itemTitle}>Reflexões</Text>
                                <Image source={require('../../../assets/images/yoga.png')} style={styles.itemImage}/>
                            </View>
                        </Pressable>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "#D3D3D3" : '#E5E5E5'
                            },
                            styles.item,
                        ]} onPress={() => console.log("Funcionou!")}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.itemTitle}>Positividade e Espiritual</Text>
                                <Image source={require('../../../assets/images/positividade.png')} style={styles.itemImage}/>
                            </View>
                        </Pressable>

                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "#D3D3D3" : '#E5E5E5'
                            },
                            styles.item,
                        ]} onPress={() => console.log("Funcionou!")}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.itemTitle}>Autoestima e Bem Estar</Text>
                                <Image source={require('../../../assets/images/autoestima.png')} style={styles.itemImage}/>
                            </View>
                        </Pressable>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                    }}>
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