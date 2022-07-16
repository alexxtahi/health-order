import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import Icons from '../basics/Icons';
import { styles } from '../basics/Styles';
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from './custom-basics/CustomButton';
import Divider from '../basics/Divider';
import QuantityBox from './QuantityBox';

export default function CartDrug(props: any) {
    // Propriétés
    var style: any = styles();
    const { colors } = useTheme();
    // Rendu du composant
    return (
        <View key="1" style={style.cartDrug}>
            {/* Image */}
            <TouchableOpacity
                onPress={() => {
                    console.log('Pressed cartDrug ' + props.name);
                }}>
                <Image style={style.cartDrugImage} source={props.image} />
            </TouchableOpacity>
            {/* Details */}
            <View style={style.cartDrugDetailsBox}>
                {/* Nom */}
                <Text numberOfLines={1} style={style.cartDrugTitle}>
                    {props.name}
                </Text>
                {/* Prix */}
                <View>
                    <Text style={style.cartDrugLabel}>
                        Prix :
                    </Text>
                    <Text style={style.cartDrugPrice}>
                        {props.price} FCFA
                    </Text>
                </View >
                <View style={style.quantityAndDeleteRow}>
                    {/* Quantité */}
                    <View>
                        <Text style={style.cartDrugLabel}>
                            Quantité :
                        </Text>
                        <QuantityBox />
                    </View >
                    {/* Bouton Supprimer */}
                    <TouchableOpacity
                        style={style.cartDrugRemoveBtn}
                        onPress={() => {
                            console.log('Removing ' + props.name + ' from cart...');
                        }}>
                        <Icons framework="FontAwesome" name="trash-o" color={colors.border} size={20} />
                    </TouchableOpacity>
                </View >
            </View >
        </View>
    );
}