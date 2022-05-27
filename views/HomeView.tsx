import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../Styles';

export default class HomeView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text>Accueil</Text>
            </View>
        );
    }
}

