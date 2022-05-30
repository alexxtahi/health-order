import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { styles } from '../basics/Styles';

export default function Drug(props: any) {
    // Propriétés
    var style: any = styles();
    const { colors } = useTheme();
    const [currentPage, setCurrentPage] = useState(0);
    // Rendu du composant
    return props.extended === false ? (
        <View style={style.drugCard}>
        </View>
    ) : (
        <View style={style.drugExtendedCardContainer}>
            {/* Pager */}
            <PagerView
                style={style.drugExtendedPagerView}
                initialPage={currentPage}
                pageMargin={15}
                onPageSelected={(page) => {
                    const pageIndex = page.nativeEvent.position;
                    // console.log("[INFO] Page Target -> " + pageIndex);
                    setCurrentPage(pageIndex);
                }}
            >
                {/* Première Page */}
                <View key="1" style={style.drugExtendedCard}>
                </View>
                {/* Deuxième Page */}
                <View key="2" style={style.drugExtendedCard}>
                </View>
            </PagerView>
            {/* Indicateurs */}
            <View style={style.drugExtendedCardIndicators}>
                {/* Première Point */}
                <View style={[style.indicatorDot, { backgroundColor: currentPage === 0 ? colors.notification : '#333' }]} />
                {/* Deuxième Point */}
                <View style={[style.indicatorDot, { backgroundColor: currentPage === 1 ? colors.notification : '#333' }]} />
            </View>
        </View>
    );
}