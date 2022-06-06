import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../basics/Styles';
import ThemeBox from '../components/ThemeBox';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsView() {
    // Propriétés
    var style: any = styles();
    // Rendu du composant
    return (
        <SafeAreaView style={style.container}>
            <StatusBar style="auto" />
            {/* Header */}
            <View style={style.viewHeader}>
                <View style={style.viewHeaderTop}>
                    <Text style={style.viewTitle}>Réglages</Text>
                </View>
                <Text style={style.viewSubtitle}>Ajustez les réglages en fonction de votre utilisation.</Text>
            </View>
            {/* Body */}
            <View style={style.viewBody}>
                {/* Changement du thème */}
                <ThemeBox />
            </View>
        </SafeAreaView>
    );
}

