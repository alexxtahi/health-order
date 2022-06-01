import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { styles } from '../basics/Styles';
import Drug from './Drug';

const drugList = [
    {
        name: 'Efferalgan 500mg',
        usage: 'Contre les maux de tête, douleurs et fortes migraines.',
        image: require('../assets/img/drugs/1.jpg'),
    },
    {
        name: 'Doliprane 5mg',
        usage: 'Contre les douleurs du corps et la fatigue excessive.',
        image: require('../assets/img/drugs/2.jpg'),
    },
    {
        name: 'CAC 1000',
        usage: 'Contre les maux de tête, douleurs et fortes migraines',
        image: require('../assets/img/drugs/3.png'),
    },
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
                        return (<Drug extended={true} name={drugList[index].name} usage={drugList[index].usage} image={drugList[index].image} />);
                    } else {
                        return (
                            <View>
                                <Drug extended={true} name={drugList[index].name} usage={drugList[index].usage} image={drugList[index].image} />
                                {/* Créer un espace à la fin de la liste */}
                                <View style={{ height: 100 }} />
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