import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React from 'react';

export default function Icons(props: any) {
    switch (props.framework) {
        case 'FontAwesome': return <FontAwesome name={props.name} color={props.color} size={props.size} style={props.style ?? null} />;
        case 'Ionicons': return <Ionicons name={props.name} color={props.color} size={props.size} style={props.style ?? null} />;
        case 'Octicons': return <Octicons name={props.name} color={props.color} size={props.size} style={props.style ?? null} />;
        case 'AntDesign': return <AntDesign name={props.name} color={props.color} size={props.size} style={props.style ?? null} />;
        case 'Feather': return <Feather name={props.name} color={props.color} size={props.size} style={props.style ?? null} />;
        case 'Fontisto': return <Fontisto name={props.name} color={props.color} size={props.size} style={props.style ?? null} />;
        default: return <FontAwesome name={props.name} color={props.color} size={props.size} style={props.style ?? null} />;
    }
}