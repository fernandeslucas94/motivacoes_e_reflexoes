import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

// Styles
import styles from './homeStyling';

// Components
import MotivacionalListItem from "../../../components/MotivacionalListItem";
import ReflexoesListItem from "../../../components/ReflexoesListItem";
import BottomNavigator from "../../../components/BottomNavigator/BottomNavigator";


export default function HomeScreen() {
    return (
        <>
        <StatusBar style="light" backgroundColor="#5B35B0"/>
        <SafeAreaView style={styles.pageContainer}>
            <Text style={styles.subtitle}>
                Logo abaixo estão sugestões de reflexões e motivações para tornar seus dias mais leves, simples e tranquilos!
            </Text>
            <View style={styles.contentContainer}>
                <Text style={styles.motivationTitle}>Frases Motivacionais</Text>
                <ScrollView horizontal style={{flexGrow: 0, marginBottom: 20}} showsHorizontalScrollIndicator={false}>
                    <MotivacionalListItem />
                </ScrollView>

                <Text style={styles.motivationTitle}>Reflexões</Text>
                <ScrollView horizontal style={{flexGrow: 0, marginBottom: 20}} showsHorizontalScrollIndicator={false}>
                    <ReflexoesListItem />
                </ScrollView>
            </View>
        </SafeAreaView>
        </>
    )
}