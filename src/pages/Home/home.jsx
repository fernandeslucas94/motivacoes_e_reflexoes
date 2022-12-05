import { SafeAreaView, Text, View, FlatList, ScrollView, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

// Styles
import styles from './homeStyling';

// data
import Motivacionais from '../../data/motivacional';
import Reflexoes from '../../data/reflexoes';

// Components
import ListItem from "../../../components/StatusBar/ListItem";

export default function HomeScreen() {
    return (
        <>
        <StatusBar style="light" backgroundColor="#5B35B0"/>
        <SafeAreaView style={styles.pageContainer}>
            <Text style={styles.greeting}>Olá, bem vindo (a)!</Text>
            <Text style={styles.subtitle}>
                Logo abaixo estão sugestões de reflexões e motivações para tornar seus dias mais leves, tranquilos e felizes!
            </Text>
            <View style={styles.contentContainer}>
                <Text style={styles.motivationTitle}>Frases Motivacionais</Text>
                <FlatList 
                    data={Motivacionais}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <ListItem data={item}/>}
                    style={{flexGrow: 0, marginBottom: 20}}
                />

                <Text style={styles.motivationTitle}>Reflexões</Text>
                <FlatList 
                    data={Reflexoes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <ListItem data={item}/>}
                    style={{flexGrow: 0}}
                />
            </View>
        </SafeAreaView>
        </>
    )
}