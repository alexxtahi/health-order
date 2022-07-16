import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Icons from '../basics/Icons';
import { styles } from '../basics/Styles';

export default function QuantityBox(props: any) {
    // Propriétés
    var style: any = styles();
    const { colors } = useTheme();
    const [quantity, setQuantity] = useState(0);
    // Rendu du composant
    return (
        <View style={style.quantityBox}>
            {/* Diminuer */}
            <TouchableOpacity
                style={style.quantityBtn}
                onPress={() => {
                    if (quantity > 0)
                        setQuantity(quantity - 1);
                }}>
                <Icons framework="Ionicons" name="remove" color={colors.background} size={20} />
            </TouchableOpacity>
            {/* Champ */}
            <TextInput
                style={style.quantityInput}
                onChangeText={(newText: string) => {
                    setQuantity(parseInt(newText));
                }}
                value={quantity.toString()}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
            {/* Augmenter */}
            <TouchableOpacity
                style={style.quantityBtn}
                onPress={() => {
                    setQuantity(quantity + 1);
                }}>
                <Icons framework="Ionicons" name="add" color={colors.background} size={20} />
            </TouchableOpacity>
        </View>
    );
}