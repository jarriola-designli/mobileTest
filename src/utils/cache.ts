import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour

export const saveToCache = async (key: string, data: any) => {
  const cachedData = {
    data,
    timestamp: Date.now(),
  };
  await AsyncStorage.setItem(key, JSON.stringify(cachedData));
};

export const getFromCache = async (key: string) => {
  const cachedData = await AsyncStorage.getItem(key);
  if (!cachedData) return null;

  const { data, timestamp } = JSON.parse(cachedData);
  if (Date.now() - timestamp > CACHE_EXPIRATION_TIME) {
    // Cache expired
    await AsyncStorage.removeItem(key);
    return null;
  }

  return data;
};
