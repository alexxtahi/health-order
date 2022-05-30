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
    const { colors } = useTheme();
    // Rendu du composant
    return (
        <SafeAreaView style={styles().container} >
            <StatusBar style="auto" />
            {/* Header */}
            <View style={styles().viewHeader} >
                <View style={styles().viewHeaderTop}>
                    <Text style={styles().viewTitle}>Bonjour !</Text>
                    <TouchableOpacity>
                        <Icons framework={"Feather"} name={"bell"} color={colors.primary} size={24} />
                    </TouchableOpacity>
                </View>
                <Text style={styles().viewSubtitle}>Bienvenue sur l'application d'achat de médicaments en ligne.</Text>
            </View>
            {/* Body */}
            <View style={styles().viewBody} >
                {/* Carte */}
                < MapPreview />
                {/* Médicaments */}
                < DrugsGrid />
            </View >
        </SafeAreaView >
    );
}