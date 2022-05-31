import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Icons from '../basics/Icons';
import { styles } from '../basics/Styles';
import MapPreview from '../components/MapPreview';
import DrugsGrid from '../components/DrugsGrid';
import { useTheme } from '@react-navigation/native';

export default function HomeView() {
    // Propriétés
    var style: any = styles();
    const { colors } = useTheme();
    // Rendu du composant
    return (
        <SafeAreaView style={style.container} >
            <StatusBar style="auto" />
            {/* Header */}
            <View style={style.viewHeader} >
                <View style={style.viewHeaderTop}>
                    <Text style={style.viewTitle}>Bonjour !</Text>
                    <TouchableOpacity>
                        <Icons framework={"Feather"} name={"bell"} color={colors.primary} size={24} />
                    </TouchableOpacity>
                </View>
                <Text style={style.viewSubtitle}>Bienvenue sur l'application d'achat de médicaments en ligne.</Text>
            </View>
            {/* Body */}
            <View style={style.viewBody} >
                {/* Carte */}
                < MapPreview />
                {/* Médicaments */}
                < DrugsGrid />
            </View >
        </SafeAreaView >
    );
}