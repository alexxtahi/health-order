import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { styles } from '../basics/Styles';
import Drug from './Drug';

const drugList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 5, 5, 5, 66861, 641, 146, 5, 5];

export default function DrugsGrid() {
    // Rendu du composant
    return (
        <View>
            <Text style={styles().componentTitle}>Médicaments</Text>
            <FlatList
                data={drugList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    if (index !== drugList.length - 1) {
                        return (<Drug />);
                    } else {
                        return (
                            <View>
                                <Drug />
                                {/* Créer un espace à la fin de la liste */}
                                <View style={{ height: 20 }} />
                            </View>
                        );

                    }
                }}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles().drugsGrid}
                numColumns={2}
                contentContainerStyle={styles().drugsGridContent}
            />
        </View>
    );
}