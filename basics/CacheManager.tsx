import AsyncStorage from "@react-native-async-storage/async-storage"

export default class CacheManager {
    // Sauvegarder une donnée dans le cache
    static async setItem(key: string, value: string | Object) {
        try {
            await AsyncStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
            console.log('[INFO] Stored item! -> (' + key + ', ' + value + ')');
        } catch (e) {
            console.log('[ERROR] ${e}');
        }
    }
    // Récupérer une donnée depuis le cache
    static async getItem(key: string, type: string = 'string') {
        try {
            const cacheData = await AsyncStorage.getItem(key);
            console.log('[INFO] Item gotten! -> (' + key + ', ' + cacheData + ')');
            if (type === 'string') {
                return cacheData;
            } else if (cacheData != null) {
                return JSON.parse(cacheData);
            }
        } catch (e) {
            console.log('[ERROR] ${e}');
            return null;
        }
    }
}