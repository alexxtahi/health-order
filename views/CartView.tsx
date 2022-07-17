import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../basics/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import CartDrugsList from '../components/CartDrugsList';
import { useTheme } from '@react-navigation/native';
import ResumeBox from '../components/ResumeBox';
import Icons from '../basics/Icons';

export default function CartView({ navigation }: { navigation: any }) {
    // Propriétés
    var style: any = styles();
    const { colors } = useTheme();
    var totalPrice: number = 999999;
    var totalQuantity: number = 999999;
    // Rendu du composant
    return (
        <SafeAreaView style={style.container}>
            <StatusBar style="auto" />
            {/* Header */}
            <View style={style.viewHeader}>
                <View style={style.viewHeaderTop}>
                    <Text style={style.viewTitle}>Panier</Text>
                    <TouchableOpacity onPress={() => {
                        console.log('Clearing cart...');
                    }}>
                        <Icons framework="Feather" name="trash-2" color={colors.primary} size={24} />
                    </TouchableOpacity>
                </View>

                <Text style={style.viewSubtitle}>Retrouvez ici tous les médicaments que vous avez décidé de garder.</Text>
            </View>
            {/* Body */}
            <View style={[style.viewBody, { height: 600 }]}>
                {/* Liste de médicaments */}
                < CartDrugsList />
            </View>
            {/* Résumé de la commande */}
            <ResumeBox totalQuantity={totalQuantity} totalPrice={totalPrice} />
        </SafeAreaView >
    );
}

