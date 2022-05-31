import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import CacheManager from '../basics/CacheManager';
import { APP_THEME, THEMES } from '../basics/constants';
let app_theme = require('../basics/constants').APP_THEME;
import { styles } from '../basics/Styles';
import ThemeCard from './ThemeCard';

export default function ThemeBox() {

    // Récupérer le thème récent depuis le cache
    // componentDidMount() {
    //     CacheManager.getItem('theme').then(theme => {
    //         console.log('[INFO] Theme gotten! -> (' + theme + ')');
    //         this.setState({ themeSelected: theme ?? 'light' });
    //     });
    // }
    // Propriétés
    var style: any = styles();
    const [themeSelected, setThemeSelected] = useState('light');
    // Rendu du composant
    var cards: any = [];
    THEMES.forEach(theme => {
        // console.log(theme);
        cards.push(
            <TouchableOpacity
                key={theme + '-theme'}
                onPress={() => {
                    // console.log("Selected theme: " + theme);
                    CacheManager.setItem('theme', theme);
                    setThemeSelected(theme);
                }}>
                <ThemeCard theme={theme} isSelected={themeSelected === theme ? true : false} />
            </TouchableOpacity>
        );
    });

    return (
        <View style={style.themeBox}>
            {cards}
        </View>
    );
}