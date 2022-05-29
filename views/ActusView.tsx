import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../basics/Styles';

export default class ActusView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text>Actualités</Text>
            </View>
        );
    }
}
