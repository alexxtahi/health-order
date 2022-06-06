import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../basics/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileView() {
    // Propriétés
    var style: any = styles();
    // Rendu du composant
    return (
        <SafeAreaView style={style.container}>
            <StatusBar style="auto" />
            {/* Avatar Box */}
            <View style={style.userAvatarBox}>
                <Image style={style.userAvatar} source={require('../assets/img/alex.jpg')} />
                <Text style={style.username}>Alexandre TAHI</Text>
            </View>
            {/* Wallet Box */}
            <View style={style.walletBox}>
                <View style={[style.walletCard, style.cardWithShadow]}>
                </View >
                <View style={[style.walletUnderCard, style.cardWithShadow]} />
                <View style={[style.walletUnderCard2, style.cardWithShadow]} />
            </View >
            {/* Personal Infos Box */}
            <View style={style.personalInfosBox}>
                <Text style={style.profileTitle}>Informations personnelles</Text>
            </View >
        </SafeAreaView>
    );
}

