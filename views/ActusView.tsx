import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../basics/Styles';
import DrugsList from '../components/DrugsList';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ActusView() {
    // Propriétés
    var style: any = styles();
    // Rendu du composant
    return (
        <SafeAreaView style={style.container} >
            <StatusBar style="auto" />
            {/* Header */}
            <View style={style.viewHeader} >
                <View style={style.viewHeaderTop}>
                    <Text style={style.viewTitle}>Actualités</Text>
                </View>
                <Text style={style.viewSubtitle}>Vous trouverez ici les médicaments en rapport avec votre profil.</Text>
            </View>
            {/* Body */}
            <View style={style.viewBody} >
                {/* Liste de médicaments */}
                < DrugsList />
            </View >
        </SafeAreaView >
    );
}
