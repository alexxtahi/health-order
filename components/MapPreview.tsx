import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../basics/Styles';
import MapView from 'react-native-maps'
import CustomIconButton from './custom-basics/CustomIconButton';
import { useTheme } from '@react-navigation/native';
import * as Location from 'expo-location';
import Icons from '../basics/Icons';

export default function MapPreview() {
    // Propriétés
    const { colors } = useTheme();
    var style: any = styles();
    const [isLocationAccessGranted, setIsLocationAccessGranted] = useState(false);
    const [location, setLocation] = useState({ coords: { latitude: 0, longitude: 0 } });
    // Méthodes
    const getLocation = async () => {
        // Demande de permission pour accéder à la localisation
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;
        // Récupération de la position actuelle
        let location = await Location.getCurrentPositionAsync({});
        setIsLocationAccessGranted(true);
        setLocation(location);
    }
    // Avant de monter le composant
    useEffect(() => { getLocation() }, []);
    // Rendu du composant
    return isLocationAccessGranted ? (
        <View>
            <View style={style.componentTitleBox}>
                <Text style={style.componentTitle}>Près de chez vous</Text>
                {/* <CustomIconButton
                    framework="MaterialIcons"
                    iconName="location-pin"
                    iconColor={colors.text}
                    iconSize={20}
                    onPress={() => {
                        console.info("MapPreview.tsx: onPress");
                    }} /> */}
            </View>
            <View style={style.mapPreview}>
                <MapView
                    style={style.mapPreview}
                    region={{ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0, longitudeDelta: 0.025 }}
                    showsUserLocation={true}
                />
            </View>
        </View>
    ) : (
        <View>
            <Text style={style.componentTitle}>Près de chez vous</Text>
            <TouchableOpacity style={[style.mapPreview, {
                justifyContent: 'center',
                alignItems: 'center',
            }]} onPress={async () => {
                console.info("Location permission asking");
                await getLocation();
            }} >
                <Icons framework="MaterialCommunityIcons" name="map-search-outline" color="#888" size={80} />
                <Text style={style.errorMsg}>
                    Nous ne pouvons pas accéder à votre position. Appuyez pour recharger.
                </Text>
            </TouchableOpacity>
        </View>
    );
}