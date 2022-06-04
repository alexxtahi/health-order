import AsyncStorage from '@react-native-async-storage/async-storage';
import CacheManager from './CacheManager';

export let APP_THEME = 'light';
export const THEMES = ['dark', 'light'];

export const drugList = [
    {
        name: 'Efferalgan 500mg',
        usage: 'Contre les maux de tête, douleurs et fortes migraines.',
        image: require('../assets/img/drugs/1.jpg'),
    },
    {
        name: 'Doliprane 5mg',
        usage: 'Contre les douleurs du corps et la fatigue excessive.',
        image: require('../assets/img/drugs/2.jpg'),
    },
    {
        name: 'CAC 1000',
        usage: 'Contre les maux de tête, douleurs et fortes migraines',
        image: require('../assets/img/drugs/3.png'),
    },
];

for (let i = 0; i < 100; i++) {
    drugList.push({
        name: 'Efferalgan 500mg',
        usage: 'Contre les maux de tête, douleurs et fortes migraines.',
        image: require('../assets/img/drugs/1.jpg'),
    });
}