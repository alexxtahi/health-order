import { useTheme } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icons from "../basics/Icons";
import { styles } from "../basics/Styles";

export default function SeeMoreCard(props: any) {
    // Propriétés
    const { colors } = useTheme();
    var style: any = styles();
    // Rendu du composant
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={style.seeMoreCard}>
                <Icons framework="Feather" name="arrow-right-circle" color="#222" size={40} />
                <Text style={style.seeMoreText}>{props.title ?? 'Voir tout'}</Text>
            </View>
        </TouchableOpacity>
    );
}