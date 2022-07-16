import React from 'react';
import { View } from 'react-native';
import { styles } from './Styles';

export default function Divider(props: any) {
    // Propriétés
    var style: any = styles();
    // Rendu du composant
    return (
        <View style={props.direction == 'horizontal' ? style.horizontalDivider : style.verticalDivider} />
    );
}