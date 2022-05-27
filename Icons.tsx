import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

export default class Icons extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        switch (this.props.framework) {
            case 'FontAwesome': return <FontAwesome name={this.props.name} color={this.props.color} size={this.props.size} />;
            case 'Ionicons': return <Ionicons name={this.props.name} color={this.props.color} size={this.props.size} />;
            case 'Octicons': return <Octicons name={this.props.name} color={this.props.color} size={this.props.size} />;
            case 'AntDesign': return <AntDesign name={this.props.name} color={this.props.color} size={this.props.size} />;
            case 'Feather': return <Feather name={this.props.name} color={this.props.color} size={this.props.size} />;
            default: return <FontAwesome name={this.props.name} color={this.props.color} size={this.props.size} />;
        }
    }
}