import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl, ScrollView, Text, View } from 'react-native';
import { drugList } from '../basics/constants';
import { styles } from '../basics/Styles';
import Drug from './Drug';
import Notif from './Notif';

// Timer
const wait = (timeout: number | undefined) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
// Composant
export default function NotifsList() {
    // Propriétés
    var style: any = styles();
    const [refreshing, setRefreshing] = useState(false);
    // Rendu du composant
    return (
        <View>
            <FlatList
                data={drugList}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={useCallback(() => {
                            setRefreshing(true);
                            wait(2000).then(() => setRefreshing(false));
                        }, [])}
                    />
                }
                renderItem={({ item, index }) => {
                    if (index !== drugList.length - 1) {
                        return (<Notif extended={true} name={item.name} usage={item.usage} image={item.image} />);
                    } else {
                        return (
                            <View>
                                <Notif extended={true} name={item.name} usage={item.usage} image={item.image} />
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
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                contentContainerStyle={style.drugsListContent}
            />
        </View>
    );
}