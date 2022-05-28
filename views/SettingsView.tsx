import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { colorScheme, styles } from '../basics/Styles';

export default class SettingsView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style={colorScheme.statusbarContentColor} />
                <Text>Réglages</Text>
            </View>
        );
    }
}

