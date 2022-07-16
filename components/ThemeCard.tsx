import React from 'react';
import { View } from 'react-native';
import Icons from '../basics/Icons';
import { styles } from '../basics/Styles';

export default function ThemeCard(props: any) {
    // Propriétés
    var style: any = styles();
    const icon = props.theme === 'dark' ?
        {
            name: props.isSelected ? 'moon' : 'moon-outline',
        } : {
            name: props.isSelected ? 'sunny' : 'sunny-outline',
        };
    // Rendu du composant
    return (
        <View style={style.themeCard}>
            <Icons framework={'Ionicons'} name={icon.name} color="#ddd" size={50} />
        </View>
    );
}