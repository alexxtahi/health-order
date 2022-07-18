import { Dimensions } from 'react-native';

export let APP_THEME = 'light';
export const THEMES = ['dark', 'light'];

export const drugList = [
    {
        name: 'Efferalgan 500mg',
        usage: 'Contre les maux de tête, douleurs et fortes migraines.',
        price: 1569,
        image: require('../assets/img/drugs/1.jpg'),
    },
    {
        name: 'Doliprane 5mg',
        usage: 'Contre les douleurs du corps et la fatigue excessive.',
        price: 3650,
        image: require('../assets/img/drugs/2.jpg'),
    },
    {
        name: 'CAC 1000',
        usage: 'Contre les maux de tête, douleurs et fortes migraines',
        price: 780,
        image: require('../assets/img/drugs/3.png'),
    },
];

for (let i = 0; i < 20; i++) {
    drugList.push({
        name: 'Efferalgan 500mg',
        usage: 'Contre les maux de tête, douleurs et fortes migraines.',
        image: require('../assets/img/drugs/1.jpg'),
        price: 780,
    });
}

// Avoir les dimensions de l'écran
export const getScreenSize = () => {
    const { width, height } = Dimensions.get('window');
    return { width, height };
}