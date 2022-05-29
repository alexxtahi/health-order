import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import Icons from '../basics/Icons';
import { colorScheme, styles } from '../basics/Styles';

export default function ThemeCard(props: any) {
    const icon = props.theme === 'dark' ?
        {
            name: props.isSelected ? 'moon' : 'moon-outline',
        } : {
            name: props.isSelected ? 'sunny' : 'sunny-outline',
        };
    // Rendu du composant
    return (
        <View style={styles().themeCard}>
            <Icons framework={'Ionicons'} name={icon.name} color={colorScheme.backgroundColor} size={50} />
        </View>
    );
}