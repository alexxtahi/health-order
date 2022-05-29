import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { styles } from '../basics/Styles';

export default function ProfileView() {
    return (
        <SafeAreaView style={styles().container}>
            <StatusBar style="auto" />
            {/* Avatar Box */}
            <View style={styles().userAvatarBox}>
                <Image style={styles().userAvatar} source={require('../assets/img/alex.jpg')} />
                <Text style={styles().username}>Alexandre TAHI</Text>
            </View>
            {/* Wallet Box */}
            <View style={styles().walletBox}>
            </View >
            {/* Personal Infos Box */}
            <View style={styles().personalInfosBox}>
                <Text style={styles().profileTitle}>Informations personnelles</Text>
            </View >
        </SafeAreaView>
    );
}

