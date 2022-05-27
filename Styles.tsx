import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //! All Views
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    //! ProfileView
    userAvatarBox: { // La box qui contient l'avatar et le nom de l'utilisateur
        alignItems: 'center',
        marginVertical: 50,
    },
    userAvatar: { // L'avatar
        backgroundColor: '#ddd',
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