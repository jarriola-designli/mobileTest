import ProductsApi from '../../Api';
import {useNetworkingStore} from '../../store';
import {Products} from './types';
import {saveToCache, getFromCache} from '../../utils/cache';
import NetInfo from '@react-native-community/netinfo';

const useProducts = () => {
  const setErrorMsgAndShowup = useNetworkingStore(
    state => state.setErrorMsgAndShowup,
  );
  const setLoading = useNetworkingStore(state => state.setLoading);

  const getProducts = async (start: number = 0, end: number = 10) => {
    setLoading(true);
    // add 1 second delay to show the loading spinner... absolutely unnecessary but I added it just to make it look cool
    await new Promise(resolve => setTimeout(resolve, 500));
    try {
      const networkStatus = await NetInfo.fetch();
      const isConnected = networkStatus.isConnected;

      const cacheKey = `products_${start}_${end}`;
      if (!isConnected) {
        const cachedData = await getFromCache(cacheKey);
        if (cachedData) {
          return cachedData;
        } else {
          return [];
        }
      } else {
        const res = await ProductsApi.get<Products[]>(
          `/products?offset=${start}&limit=${end}`,
        );
        await saveToCache(cacheKey, res.data);
        return res.data;
      }
    } catch (error) {
      const apiError = error as ApiError;
      setErrorMsgAndShowup(apiError.errorMsg, apiError.isError);
    } finally {
      setLoading(false);
    }
  };

  const getSingleProduct = async (id: number) => {
    setLoading(true);
    // add 1 second delay to show the loading spinner... absolutely unnecessary but I added it just to make it look cool
    await new Promise(resolve => setTimeout(resolve, 500));
    const cacheKey = `product_${id}`;
    try {
      const networkStatus = await NetInfo.fetch();
      const isConnected = networkStatus.isConnected;
      if (!isConnected) {
        const cachedData = await getFromCache(cacheKey);
        if (cachedData) {
          return cachedData;
        } else {
          return [];
        }
      } else {
        const res = await ProductsApi.get<Products>(`/products/${id}`);
        return res.data;
      }
    } catch (error) {
      const apiError = error as ApiError;
      setErrorMsgAndShowup(apiError.errorMsg, apiError.isError);
    } finally {
      setLoading(false);
    }
  };

  return {
    getProducts,
    getSingleProduct,
  };
};

export default useProducts;
