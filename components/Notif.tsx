import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import Icons from '../basics/Icons';
import { styles } from '../basics/Styles';
import CustomButton from './custom-basics/CustomButton';

export default function Notif(props: any) {
    // Propriétés
    var style: any = styles();
    const { colors } = useTheme();
    // Rendu du composant
    return (
        <TouchableOpacity style={style.notifCard} onPress={() => {
            console.log('Notif clicked');
        }}>
            {/* Illustration */}
            <Image style={style.notifIllustration} source={require('../assets/img/alex.jpg')} />
            {/* Aperçu du contenu */}
            <View>
                <Text numberOfLines={1} style={style.notifTitle}>
                    Titre de la notif
                </Text>

                <Text numberOfLines={4} style={style.notifContentPreview}>
                    Ceci est la description du médicament présent sur la première page du widget.
                    Ceci est la description du médicament présent sur la première page du widget.
                    Ceci est la description du médicament présent sur la première page du widget.
                </Text>
            </View>
        </TouchableOpacity >
    );
}