import {RouteProp} from '@react-navigation/native';
import { Routes } from '../../utils/routes';
import { Product } from '../../store/slice/productSlice';

type RootStackParamList = {
  [Routes.PRODUCT_DETAIL]: {item: Product};
  [Routes.PRODUCT_LIST]: {category: string};
  [Routes.TAB]: undefined; // Parametre gerekmiyorsa 'undefined'
  [Routes.HOME_SCREEN]: undefined; // Parametre gerekmiyorsa 'undefined'
};

// productList ekranı için route türünü belirle
type ProductListScreenRouteProp = RouteProp<RootStackParamList, Routes.PRODUCT_LIST>;
// productDetail ekranı için route türünü belirle
type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, Routes.PRODUCT_DETAIL>;

type ProductListProps = {
  route: ProductListScreenRouteProp;
};
type ProductDetailProps = {
  route: ProductDetailScreenRouteProp;
};

export type {ProductListProps, RootStackParamList, ProductDetailProps};
