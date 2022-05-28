import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { colorScheme, styles } from '../basics/Styles';

export default class ActusView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style={colorScheme.statusbarContentColor} />
                <Text>Actualités</Text>
            </View>
        );
    }
}
