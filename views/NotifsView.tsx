import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../basics/Styles';
import CustomIconButton from '../components/custom-basics/CustomIconButton';
import { useTheme } from '@react-navigation/native';
import NotifsList from '../components/NotifsList';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotifsView({ navigation }: { navigation: any }) {
    // Propriétés
    const { colors } = useTheme();
    var style: any = styles();
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
                        <Text style={style.viewTitle}>Notifications</Text>
                    </View>
                </View>
                <Text style={style.viewSubtitle}>Restez au courant des dernières nouvelles de notre plateforme.</Text>
            </View>
            {/* Body */}
            <View style={style.viewBody}>
                {/* Liste de notifications */}
                <NotifsList />
            </View>
        </SafeAreaView>
    );
}