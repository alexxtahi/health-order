import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../basics/Styles';
import ThemeBox from '../components/ThemeBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import CartDrugsList from '../components/CartDrugsList';

export default function CartView() {
    // Propriétés
    var style: any = styles();
    // Rendu du composant
    return (
        <SafeAreaView style={style.container}>
            <StatusBar style="auto" />
            {/* Header */}
            <View style={style.viewHeader}>
                <View style={style.viewHeaderTop}>
                    <Text style={style.viewTitle}>Panier</Text>
                </View>
                <Text style={style.viewSubtitle}>Retrouvez ici tous les médicaments que vous avez décidé de garder.</Text>
            </View>
            {/* Body */}
            <View style={style.viewBody}>
                {/* Liste de médicaments */}
                < CartDrugsList />
            </View>
        </SafeAreaView>
    );
}

