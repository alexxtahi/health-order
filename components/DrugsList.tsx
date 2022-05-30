import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { styles } from '../basics/Styles';
import Drug from './Drug';

const drugList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 5, 5, 5, 66861, 641, 146, 5, 5];

export default function DrugsList() {
    // Rendu du composant
    return (
        <View>
            <FlatList
                data={drugList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    if (index !== drugList.length - 1) {
                        return (<Drug extended={true} />);
                    } else {
                        return (
                            <View>
                                <Drug extended={true} />
                                {/* Créer un espace à la fin de la liste */}
                                <View style={{ height: 20 }} />
                            </View>
                        );

                    }
                }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles().drugsList}
                numColumns={1}
                contentContainerStyle={styles().drugsListContent}
            />
        </View>
    );
}