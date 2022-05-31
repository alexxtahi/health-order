import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { styles } from '../basics/Styles';

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
            </View >
            {/* Personal Infos Box */}
            <View style={style.personalInfosBox}>
                <Text style={style.profileTitle}>Informations personnelles</Text>
            </View >
        </SafeAreaView>
    );
}

