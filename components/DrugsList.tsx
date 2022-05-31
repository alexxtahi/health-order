import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { styles } from '../basics/Styles';
import Drug from './Drug';

const drugList = [
    '../assets/img/drugs/1.jpg',
    '../assets/img/drugs/2.jpg',
    '../assets/img/drugs/3.png',
];

export default function DrugsList() {
    // Propriétés
    var style: any = styles();
    // Rendu du composant
    return (
        <View>
            <FlatList
                data={drugList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    if (index !== drugList.length - 1) {
                        return (<Drug extended={true} image={drugList[index]} />);
                    } else {
                        return (
                            <View>
                                <Drug extended={true} image={drugList[index]} />
                                {/* Créer un espace à la fin de la liste */}
                                <View style={{ height: 20 }} />
                            </View>
                        );

                    }
                }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={style.drugsList}
                numColumns={1}
                contentContainerStyle={style.drugsListContent}
            />
        </View>
    );
}