import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icons from '../basics/Icons';
import { styles } from '../basics/Styles';
import ThemeBox from '../components/ThemeBox';

export default function SettingsView() {
    return (
        <View style={styles().container}>
            <StatusBar style="auto" />
            {/* Header */}
            <View style={styles().viewHeader}>
                <View style={styles().viewHeaderTop}>
                    <Text style={styles().viewTitle}>Réglages</Text>
                </View>
                <Text style={styles().viewSubtitle}>Ajustez les réglages en fonction de votre utilisation.</Text>
            </View>
            {/* Body */}
            <View style={styles().viewBody}>
                {/* Changement du thème */}
                <ThemeBox />
            </View>
        </View>
    );
}

