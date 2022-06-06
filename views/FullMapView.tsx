import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../basics/Styles';
import MapView, { AnimatedRegion, Animated, Marker } from 'react-native-maps'
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CustomIconButton from '../components/custom-basics/CustomIconButton';
import { markers } from '../datas/markers';

export default function FullMapView({ route, navigation }: { route: any, navigation: any }) {
    // Propriétés
    const { colors } = useTheme();
    var style: any = styles();
    const { location } = route.params;
    const region = new AnimatedRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0.025,
    });
    const [mapMarkers, setMapMarkers] = useState(markers);
    // Rendu du composant
    return (
        <SafeAreaView style={style.container}>
            <StatusBar style="auto" />
            {/* Header */}
            <View style={style.viewHeader}>
                <View style={style.viewHeaderTop}>
                    <View style={style.viewTitleBoxWithBackBtn}>
                        <CustomIconButton framework="Octicons" iconName="chevron-left" iconColor={colors.activeIcon} iconSize={24} style={style.viewHeaderBackButton} onPress={() => {
                            navigation.goBack();
                            // navigation.back();
                        }} />
                        <Text style={style.viewTitle}>Carte</Text>
                    </View>
                </View>
                <Text style={style.viewSubtitle}>Retrouvez toutes les pharmacies aux alentours de votre position.</Text>
            </View>
            {/* Body */}
            <View style={style.fullMapBox}>
                {/* Carte */}
                <MapView
                    style={style.fullMap}
                    mapType="standard"
                    region={{ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0, longitudeDelta: 0.025 }}
                    showsUserLocation={true}
                    userLocationAnnotationTitle="Vous êtes ici"
                    userLocationCalloutEnabled={true}
                >
                    {mapMarkers.map((marker, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={marker.coordinate}
                                title={marker.title}
                                description={marker.description}
                            />
                        );
                    })}
                </MapView>
            </View>
        </SafeAreaView>
    );
}