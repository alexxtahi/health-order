import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import Icons from '../basics/Icons';
import { styles } from '../basics/Styles';
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from './custom-basics/CustomButton';

export default function Drug(props: any) {
    // Propriétés
    var style: any = styles();
    const { colors } = useTheme();
    const [currentPage, setCurrentPage] = useState(0);
    // Rendu du composant
    return props.extended === false ? (
        <TouchableOpacity>
            <View style={style.drugCard}>
                <ImageBackground imageStyle={{ borderRadius: 30 }} style={style.drugExtendedImage} source={props.image} >
                    <LinearGradient
                        colors={["rgba(0,0,0,0)", colors.card]}
                        // start={[0, 0]}
                        style={style.drugExtendedImageGradient}>
                        <Text numberOfLines={2} style={style.drugTitle}>
                            {props.name}
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    ) : (
        <View>
            {/* Pager */}
            <PagerView
                style={style.drugExtendedPagerView}
                initialPage={currentPage}
                pageMargin={15}
                onPageSelected={(page) => {
                    const pageIndex = page.nativeEvent.position;
                    setCurrentPage(pageIndex);
                }}>
                {/* Première Page */}
                <TouchableOpacity onPress={() => {
                    console.log('Pressed drug ' + props.name);
                }}>
                    <View key="1" style={style.drugExtendedCard}>
                        <ImageBackground imageStyle={{ borderRadius: 30 }} style={style.drugExtendedImage} source={props.image} >
                            <LinearGradient
                                colors={["rgba(0,0,0,0)", colors.card]}
                                // start={[0, 0]}
                                style={style.drugExtendedImageGradient}>
                                <Text numberOfLines={2} style={style.drugExtendedTitle}>
                                    {props.name}
                                </Text>
                                <Text numberOfLines={2} style={style.drugExtendedSubtitle}>
                                    {props.usage}
                                </Text>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
                {/* Deuxième Page */}
                <View key="2" style={[style.drugExtendedCard, style.drugExtendedCardDescriptionBox]}>
                    {/* Description du médicament */}
                    <Text numberOfLines={9} style={style.drugDescription}>
                        Ceci est la description du médicament présent sur la première page du widget.
                        Ceci est la description du médicament présent sur la première page du widget.
                        Ceci est la description du médicament présent sur la première page du widget.
                        Ceci est la description du médicament présent sur la première page du widget.
                        Ceci est la description du médicament présent sur la première page du widget.
                        Ceci est la description du médicament présent sur la première page du widget.
                        Ceci est la description du médicament présent sur la première page du widget.
                        Ceci est la description du médicament présent sur la première page du widget.
                    </Text>
                    {/* Bouton 'Lire plus' */}
                    <View style={style.drugExtendedButtonBox}>
                        <CustomButton title="Lire plus" onPress={() => {
                            console.log('CustomButton pressed');
                        }} suffixIcon={(
                            <Icons framework="Feather" name="arrow-right-circle" color="#222" size={15} style={{ marginLeft: 5 }} />
                        )} />
                    </View>
                </View >
            </PagerView>
            {/* Indicateurs */}
            <View style={style.drugExtendedCardIndicators}>
                {/* Première Point */}
                <View style={[style.indicatorDot, { backgroundColor: currentPage === 0 ? colors.notification : colors.card }]} />
                {/* Deuxième Point */}
                <View style={[style.indicatorDot, { backgroundColor: currentPage === 1 ? colors.notification : colors.card }]} />
            </View>
        </View>
    );
}