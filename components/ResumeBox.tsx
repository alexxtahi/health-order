import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ZigzagLines from 'react-native-zigzag-lines';
import { getScreenSize } from '../basics/constants';
import Icons from '../basics/Icons';
import { styles } from '../basics/Styles';

export default function ResumeBox(props: any) {
    // Propriétés
    var style: any = styles();
    const { colors } = useTheme();
    // Rendu du composant
    return (
        <View style={style.cartResumeContainer}>
            <ZigzagLines
                position="top"
                height={5}
                width={getScreenSize().width}
                backgroundColor="transparent"
                color={colors.notification}
            />
            <View style={style.cartResumeBox}>
                <View style={style.cartResumeDetailsBox}>
                    <View style={style.cartResumeDetailsLine}>
                        <Text style={style.cartResumeTitleText}>Quantité Totale:</Text>
                        <Text style={style.cartResumeText}>{props.totalQuantity}</Text>
                    </View>
                    <View style={style.cartResumeDetailsLine}>
                        <Text style={style.cartResumeTitleText}>Montant Total:</Text>
                        <Text style={style.cartResumeText}>{props.totalPrice} FCFA</Text>
                    </View>
                </View>
                {/* Bouton 'Commander' */}
                <TouchableOpacity
                    style={style.cartResumeOrderBtn}
                    onPress={() => {
                        console.log('Finalizing order...');
                    }}>
                    <Text style={style.cartResumeOrderBtnText}>COMMANDER</Text>
                    <Icons framework="Feather" name="check-circle" color={colors.border} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
}