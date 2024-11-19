import {createStackNavigator} from '@react-navigation/stack';
import {Home, ProductDetail} from '../Screens';

interface ProductDetailProp {
  productId: number;
}

export type MainNavigatorProps = {
  Home: undefined;
  ProductDetail: ProductDetailProp;
};

const Stack = createStackNavigator<MainNavigatorProps>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
