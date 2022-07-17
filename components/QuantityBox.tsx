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
    const [maxQuantity, setMaxQuantity] = useState(99);
    // Rendu du composant
    return (
        <View style={style.quantityBox}>
            {/* Diminuer */}
            <TouchableOpacity
                style={[style.quantityBtn, quantity <= 1 ? { opacity: 0.2 } : null]}
                disabled={quantity <= 1 ? true : false}
                onPress={() => {
                    if (quantity > 1)
                        setQuantity(quantity - 1);
                }}>
                <Icons framework="Ionicons" name="remove" color={colors.background} size={20} />
            </TouchableOpacity>
            {/* Champ */}
            <TextInput
                style={style.quantityInput}
                onChangeText={(newText: string) => {
                    if (newText === "")
                        setQuantity(1);
                    else
                        setQuantity(parseInt(newText));

                }}
                value={quantity.toString()}
                keyboardType="numeric"
            />
            {/* Augmenter */}
            <TouchableOpacity
                style={[style.quantityBtn, quantity >= maxQuantity ? { opacity: 0.2 } : null]}
                disabled={quantity >= maxQuantity ? true : false}
                onPress={() => {
                    setQuantity(quantity + 1);
                }}>
                <Icons framework="Ionicons" name="add" color={colors.background} size={20} />
            </TouchableOpacity>
        </View>
    );
}