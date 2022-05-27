import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../Styles';

export default class SettingsView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text>Réglages</Text>
            </View>
        );
    }
}

