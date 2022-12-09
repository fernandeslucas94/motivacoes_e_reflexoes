import React from "react";
import { View, Text, Image, Pressable } from 'react-native';
import styles from './BottomNavigationStyles'
import { useNavigation } from "@react-navigation/native";

import Motivacionais from '../ItemsComponents/MotivacionalComponents/Motivacionais';

// Images
import HomeIcon from '../../assets/images/home.png';
import SaveIcon from '../../assets/images/save.png';
import AccountIcon from '../../assets/images/user.png';

export default function BottomNavigator() {
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate("Home");
    }

    return (
        <>
            <View style={styles.navigatorContainer}>
                <Pressable onPress={handleNavigate}>
                    <Image source={HomeIcon} style={styles.icons}/>
                </Pressable>
                {/* <Pressable>
                    <Image source={SaveIcon} style={styles.icons}/>
                </Pressable> */}
               <Pressable>
                    <Image source={AccountIcon} style={styles.icons}/>
               </Pressable>
            </View>
        </>
    )
}