import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
// Sélection du thème à appliquer
export const styles = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        //! All Views
        container: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 10,
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
        viewHeaderBackButton: {
            marginRight: 10,
        },
        viewTitleBoxWithBackBtn: {
            display: 'flex',
            flexDirection: 'row',
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
        componentTitleBox: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
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
            overflow: 'hidden',
            marginBottom: 20,
        },
        errorMsg: {
            color: "#888",
            textAlign: 'center',
        },
        // FullMapView
        fullMapBox: {
            width: '100%',
            height: '83%',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            overflow: 'hidden',
            marginTop: 50,
        },
        fullMap: {
            width: '100%',
            height: '100%',
        },
        // Drug
        drugsGrid: {
            width: '100%',
            height: 420,
            borderRadius: 30,
            // marginBottom: 20,
            // backgroundColor: 'red',
        },
        drugsGridColumn: {
            width: '100%',

            // alignSelf: 'center',
            // backgroundColor: 'green',
            // display: 'flex',
            // justifyContent: 'space-between',
            // flexDirection: 'row',
        },
        drugsGridScrollView: {
            // width: '100%',
            height: 420,
        },
        drugsGridScrollViewContent: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            paddingBottom: 15,
            // backgroundColor: 'blue',
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
            width: 160,
            height: 160,
            backgroundColor: colors.card,
            margin: 12,
            borderRadius: 30,
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
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 18,
        },
        drugExtendedTitle: {
            maxWidth: '70%',
            color: colors.text,
            fontWeight: 'bold',
            fontSize: 24,
        },
        drugExtendedSubtitle: {
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
        },
        customButtonTitle: {
            color: "#222",
        },
        customIconButton: {
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.card,
            borderRadius: 20,
        },
        seeMoreCard: {
            width: 160,
            height: 160,
            backgroundColor: colors.notification,
            margin: 12,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
        },
        seeMoreText: {
            color: "#222",
            fontWeight: 'bold',
            fontSize: 16,
        },
        // Notif
        notifCard: {
            width: '100%',
            padding: 10,
            backgroundColor: colors.card,
            borderRadius: 30,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        notifTitle: {
            color: colors.text,
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 5,
        },
        notifIllustration: {
            width: 125,
            height: 125,
            borderRadius: 20,
            marginRight: 10,
        },
        notifContentPreview: {
            color: colors.text,
        },
        // Icon
        iconBadge: {
            backgroundColor: colors.notification,
            position: 'absolute',
            top: 0,
            right: 0,
            width: 10,
            height: 10,
            borderRadius: 5,
            zIndex: 1,
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
        walletBox: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: 30,
        },
        cardWithShadow: {
            shadowColor: "rgba(0,0,0,0.4)",
            elevation: 5,
        },
        walletCard: { // Le portefeuille de cartes d'assurance
            width: '90%',
            height: 200,
            backgroundColor: colors.card,
            borderRadius: 30,
            zIndex: 10,
        },
        walletUnderCard: { // Le portefeuille de cartes d'assurance
            position: 'absolute',
            top: 7.5,
            width: '82.5%',
            height: 200,
            borderRadius: 30,
            backgroundColor: colors.card,
            zIndex: 5,
        },
        walletUnderCard2: { // Le portefeuille de cartes d'assurance
            position: 'absolute',
            top: 15,
            width: '75%',
            height: 200,
            borderRadius: 30,
            backgroundColor: colors.card,
            zIndex: 1,
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