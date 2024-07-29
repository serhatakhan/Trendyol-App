import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './tabNavigation';
import Header from '../components/router/header';
import {Routes} from '../utils/routes';
import ProductDetail from '../screens/products/productDetail';
import ProductList from '../screens/products/productList';
import {RootStackParamList} from '../models/productList/productListTypes';
import HeaderProductRoute from '../components/router/headerProductRoutes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <HeaderProductRoute />,
      }}>
      <Stack.Screen
        name={Routes.TAB}
        component={TabNavigation}
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen name={Routes.PRODUCT_DETAIL} component={ProductDetail} />
      <Stack.Screen name={Routes.PRODUCT_LIST} component={ProductList} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
