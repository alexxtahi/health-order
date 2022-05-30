import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Icons from '../basics/Icons';
import { styles } from '../basics/Styles';
import DrugsGrid from '../components/DrugsGrid';
import DrugsList from '../components/DrugsList';
import MapPreview from '../components/MapPreview';

export default function ActusView() {
    // Rendu du composant
    return (
        <SafeAreaView style={styles().container} >
            <StatusBar style="auto" />
            {/* Header */}
            <View style={styles().viewHeader} >
                <View style={styles().viewHeaderTop}>
                    <Text style={styles().viewTitle}>Actualités</Text>
                </View>
                <Text style={styles().viewSubtitle}>Vous trouverez ici les médicaments en rapport avec votre profil.</Text>
            </View>
            {/* Body */}
            <View style={styles().viewBody} >
                {/* Liste de médicaments */}
                < DrugsList />
            </View >
        </SafeAreaView >
    );
}
