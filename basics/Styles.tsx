import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { APP_THEME } from './constants';
// Sélection du thème à appliquer
export const styles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        //! All Views
        container: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 50,
            backgroundColor: colors.background,
            // justifyContent: 'center',
        },
        bottomTabs: {
            backgroundColor: colors.background,
        },
        viewHeader: {
            width: '90%',
            // backgroundColor: colors.card,
        },
        viewBody: {
            width: '90%',
            marginTop: 50,
            // backgroundColor: colors.card,
        },
        viewHeaderTop: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            // backgroundColor: colors.card,
            alignItems: 'center',
        },
        viewTitle: {
            fontSize: 26,
            fontWeight: 'bold',
            color: colors.primary,
        },
        viewSubtitle: {
            fontSize: 16,
            marginTop: 10,
            color: colors.primary,
        },
        componentTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: 15,
        },
        //! Components
        // MapPreview
        mapPreview: {
            width: '100%',
            height: 150,
            backgroundColor: colors.card,
            borderRadius: 30,
            marginBottom: 20,
        },
        // Drug
        drugsGrid: {
            width: '100%',
            height: 420,
            borderRadius: 30,
            // marginBottom: 20,
            // backgroundColor: 'red',
        },
        drugsGridContent: {
            width: '100%',
            alignItems: 'center',
            // backgroundColor: 'red',
        },
        drugsList: {
            width: '100%',
            // marginBottom: 20,
            // backgroundColor: 'red',
        },
        drugsListContent: {
            width: '100%',
            // backgroundColor: 'red',
        },
        drugCard: {
            width: 170,
            height: 170,
            backgroundColor: colors.card,
            borderRadius: 30,
            margin: 10,
        },
        drugExtendedCardContainer: {
            marginBottom: 20,
        },
        drugExtendedPagerView: {
            width: '100%',
            height: 250,
            alignSelf: 'center',
        },
        drugExtendedCard: {
            width: '100%',
            backgroundColor: colors.card,
            borderRadius: 30,
            // alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        },
        drugExtendedImage: {
            width: '100%',
            height: '100%',
            borderRadius: 30,
        },
        drugExtendedImageGradient: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 15,
            borderRadius: 29,
        },
        drugExtendedCardDescriptionBox: {
            padding: 15,
            // backgroundColor: '#f00',
            justifyContent: 'space-between',
        },
        drugTitle: {
            maxWidth: '70%',
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 24,
        },
        drugSubtitle: {
            color: colors.text,
        },
        drugDescription: {
            color: colors.text,
        },
        drugExtendedCardIndicators: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        drugExtendedButtonBox: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            // backgroundColor: '#f00',
        },
        indicatorDot: {
            width: 10,
            height: 10,
            margin: 5,
            borderRadius: 10,
        },
        // Theme
        themeBox: {
            width: '100%',
            // backgroundColor: '#f00',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        themeCard: {
            width: 175,
            height: 175,
            backgroundColor: colors.card,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
        },
        // CustomButton
        customButton: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.notification,
            paddingVertical: 5,
            paddingHorizontal: 15,
            borderRadius: 30,
            // width: 'min',
        },
        customButtonTitle: {
            color: colors.background,
        },
        //! HomeView

        //! ProfileView
        userAvatarBox: { // La box qui contient l'avatar et le nom de l'utilisateur
            alignItems: 'center',
            marginBottom: 50,
        },
        userAvatar: { // L'avatar
            width: 200,
            height: 200,
            borderRadius: 100,
            marginBottom: 20,
        },
        username: { // Le nom de l'utilisateur
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.primary,
        },
        walletBox: { // Le portefeuille de cartes d'assurance
            width: '90%',
            height: 200,
            backgroundColor: colors.card,
            borderRadius: 30,
            marginBottom: 25,
        },
        personalInfosBox: { // Le portefeuille de cartes d'assurance
            width: '90%',
            height: 200,
            borderRadius: 20,
            marginBottom: 50,
        },
        profileTitle: { // Titre des rubriques sur le profile
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            textDecorationLine: 'underline',
            color: colors.primary,
        },
        //! SettingsView
    })
};