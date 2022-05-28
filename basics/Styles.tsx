import { StyleSheet } from 'react-native';
import { APP_THEME } from './constants';
// Sélection du thème à appliquer
export const colorScheme = APP_THEME === 'light' ? require('./ColorScheme.json').light : require('./ColorScheme.json').dark;

export const styles = StyleSheet.create({
    //! All Views
    container: {
        flex: 1,
        backgroundColor: colorScheme.backgroundColor,
        alignItems: 'center',
        paddingTop: 50,
        // justifyContent: 'center',
    },
    bottomTabs: {
        backgroundColor: colorScheme.backgroundColor,
    },
    viewHeader: {
        width: '90%',
        // backgroundColor: '#ddd',
    },
    viewBody: {
        width: '90%',
        marginTop: 50,
        // backgroundColor: '#ddd',
    },
    viewHeaderTop: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // backgroundColor: '#ddd',
        alignItems: 'center',
    },
    viewTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colorScheme.primaryColor,
    },
    viewSubtitle: {
        fontSize: 16,
        marginTop: 10,
        color: colorScheme.primaryColor,
    },
    componentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colorScheme.primaryColor,
        marginBottom: 15,
    },
    //! Components
    // MapPreview
    mapPreview: {
        width: '100%',
        height: 150,
        backgroundColor: '#ddd',
        borderRadius: 30,
        marginBottom: 20,
    },
    // Drug
    drugsGrid: {
        width: '100%',
        height: 420,
        borderRadius: 30,
        // marginBottom: 20,
    },
    drugsGridContent: {
        alignSelf: 'center',
    },
    drugCard: {
        width: 170,
        height: 170,
        backgroundColor: '#ddd',
        borderRadius: 30,
        margin: 10,
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
    },
    walletBox: { // Le portefeuille de cartes d'assurance
        width: '90%',
        height: 200,
        backgroundColor: '#ddd',
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
    },
});