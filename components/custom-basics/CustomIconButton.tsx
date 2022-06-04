import { useTheme } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icons from "../../basics/Icons";
import { styles } from "../../basics/Styles";

export default function CustomIconButton(props: any) {
    // Propriétés
    const { colors } = useTheme();
    var style: any = styles();
    // Rendu du composant
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[style.customIconButton, props.style ?? null]}>
                {/* Icône avant le titre du bouton */}
                <Icons framework={props.framework} name={props.iconName} color={props.iconColor} size={props.iconSize} />
            </View>
        </TouchableOpacity >
    );
}