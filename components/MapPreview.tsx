import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../basics/Styles';

export default function MapPreview() {
    // Propriétés
    var style: any = styles();
    // Rendu du composant
    return (
        <View>
            <Text style={style.componentTitle}>Près de chez vous</Text>
            <View style={style.mapPreview}>
            </View>
        </View>
    );
}