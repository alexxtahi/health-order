import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../basics/Styles';

export default function MapPreview() {
    // Rendu du composant
    return (
        <View>
            <Text style={styles().componentTitle}>Près de chez vous</Text>
            <View style={styles().mapPreview}>
            </View>
        </View>
    );
}