import { useTheme } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { styles } from "../../basics/Styles";

export default function CustomButton(props: any) {
    // Propriétés
    const { colors } = useTheme();
    var style: any = styles();
    // Rendu du composant
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[style.customButton, props.style ?? null]}>
                {/* Icône avant le titre du bouton */}
                {props.prefixIcon ?? null}
                {/* Titre du bouton */}
                <Text style={[style.customButtonText, props.titleStyle ?? null]}>{props.title}</Text>
                {/* Icône après le titre du bouton */}
                {props.suffixIcon ?? null}
            </View>
        </TouchableOpacity >
    );
}