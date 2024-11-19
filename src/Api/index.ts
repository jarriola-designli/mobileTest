import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1/';

const ProductsApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

ProductsApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const errorMsg = error.response.data.message;
      return Promise.reject({isError: true, errorMsg} as unknown as ApiError);
    } else if (error.request) {
      const errorMsg = error.request;
      return Promise.reject({isError: true, errorMsg} as unknown as ApiError);
    } else {
      const errorMsg = error.message;
      return Promise.reject({isError: true, errorMsg} as unknown as ApiError);
    }
  },
);

export default ProductsApi;
