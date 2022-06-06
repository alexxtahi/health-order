import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icons from '../basics/Icons';
import { styles } from '../basics/Styles';
import MapPreview from '../components/MapPreview';
import DrugsGrid from '../components/DrugsGrid';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeView({ navigation }: { navigation: any }) {
    // Propriétés
    var style: any = styles();
    const hour: number = new Date().getHours();
    const { colors } = useTheme();
    // Rendu du composant
    return (
        <SafeAreaView style={style.container} >
            <StatusBar style="auto" />
            {/* Header */}
            <View style={style.viewHeader} >
                <View style={style.viewHeaderTop}>
                    <Text style={style.viewTitle}>
                        {hour < 18 ? 'Bonjour !' : 'Bonsoir !'}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Notifications');
                    }}>
                        <Icons framework={"Feather"} name={"bell"} color={colors.primary} size={24} badge={true} />
                    </TouchableOpacity>
                </View>
                <Text style={style.viewSubtitle}>Bienvenue sur l'application d'achat de médicaments en ligne.</Text>
            </View>
            {/* Body */}
            <View style={style.viewBody} >
                {/* Carte */}
                < MapPreview navigation={navigation} />
                {/* Médicaments */}
                < DrugsGrid />
            </View >
        </SafeAreaView >
    );
}