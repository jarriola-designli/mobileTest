import {ListItem} from '@ui-kitten/components'; // Example library
import {Layout, Text, Button} from '@ui-kitten/components'; // Adjust imports
import {
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {Products} from '../Infrastructure/products/types'; // Adjust imports
import {DetailsContainer} from '../Components';
import {MainNavigatorProps} from '../navigation';
import { useState } from 'react';
import { useProducts } from '../Infrastructure';

const useHome = () => {
  const {getProducts} = useProducts();
  const [products, setProducts] = useState<Products[] | undefined>();
  const [startIndex, setstartIndex] = useState(0);
  const [endIndex, setendIndex] = useState(10);
  const navigation = useNavigation<NavigationProp<MainNavigatorProps>>();

  const renderItem = ({
    item,
  }: {
    item: Products;
    index: number;
  }): React.ReactElement => (
    <ListItem
      title={
        <Layout level="2">
          <Text>{item.title}</Text>
          <Text>${item.price}</Text>
        </Layout>
      }
      description={
        <DetailsContainer>
          <Text>{item.category.name}</Text>
          <Button
            onPress={() => {
              navigation.navigate('ProductDetail', {productId: item.id});
            }}>
            More
          </Button>
        </DetailsContainer>
      }
    />
  );

  

  const getData = async (isFirstTime: boolean) => {
    const newStartIndex = isFirstTime ? startIndex : startIndex + 10;
    const newEndIndex = isFirstTime ? endIndex : endIndex + 10;
    const res = await getProducts(startIndex, endIndex);
    setProducts([...(products || []), ...(res || [])]);
    setstartIndex(newStartIndex);
    setendIndex(newEndIndex);
  };

  return {renderItem,getData,products,setProducts,setstartIndex,setendIndex};
};

export default useHome;
