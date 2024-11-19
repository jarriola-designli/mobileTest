import {useEffect, useState} from 'react';

import {MainNavigatorProps} from '../../navigation';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useProducts} from '../../Infrastructure';
import {Products} from '../../Infrastructure/products/types';
import {Layout, Text} from '@ui-kitten/components';
import * as S from './styles';

type ProductDetailProps = RouteProp<MainNavigatorProps, 'ProductDetail'>;

const ProductDetail = () => {
  const route = useRoute<ProductDetailProps>();
  const {productId} = route.params;
  const {getSingleProduct} = useProducts();

  const [product, setProduct] = useState<Products | undefined>();

  const getData = async () => {
    const res = await getSingleProduct(productId);
    setProduct(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <S.Title allowFontScaling category="h2">
        {product?.title}
      </S.Title>
      <S.StyledImage source={{uri: product?.images[0]}} />
      <Text>{product?.description}</Text>
    </Layout>
  );
};

export default ProductDetail;
