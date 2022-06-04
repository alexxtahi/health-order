import { useTheme } from '@react-navigation/native';
import React from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { drugList } from '../basics/constants';
import Icons from '../basics/Icons';
import { styles } from '../basics/Styles';
import Drug from './Drug';
import SeeMoreCard from './SeeMoreCard';


export default function DrugsGrid() {
    // Propriétés
    const { colors } = useTheme();
    var style: any = styles();
    // Génération des drugCards
    const drugCards: JSX.Element[] = [];
    drugList.slice(0, 9).forEach((drug, index) => {
        drugCards.push(
            <Drug extended={false} name={drug.name} usage={drug.usage} image={drug.image} />
        );
        // Afficher un élément de plus pour voir tout
        if (index === 8) {
            drugCards.push(
                <SeeMoreCard onPress={() => {
                    console.log('Voir tout')
                }} />
            );
        }
    });

    // Rendu du composant
    return (
        <View>
            {/* Titre */}
            <Text style={style.componentTitle}>Médicaments</Text>
            {/* Cartes */}
            <ScrollView
                style={style.drugsGridScrollView}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={style.drugsGridScrollViewContent}
            >
                {drugCards}
            </ScrollView>
        </View>
    );
}