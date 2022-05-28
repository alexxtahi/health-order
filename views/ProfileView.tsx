import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { colorScheme, styles } from '../basics/Styles';

export default class ProfileView extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar style={colorScheme.statusbarContentColor} />
                {/* Avatar Box */}
                <View style={styles.userAvatarBox}>
                    <Image style={styles.userAvatar} source={require('../assets/img/alex.jpg')} />
                    <Text style={styles.username}>Marylise KONAN</Text>
                </View>
                {/* Wallet Box */}
                <View style={styles.walletBox}>
                </View >
                {/* Personal Infos Box */}
                <View style={styles.personalInfosBox}>
                    <Text style={styles.profileTitle}>Informations personnelles</Text>
                </View >
            </SafeAreaView>
        );
    }
}

