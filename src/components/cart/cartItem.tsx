import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {height, width} from '../../utils/constants';
import {ProductQuantity, setTotalPrice} from '../../store/slice/cartsSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {getRequest} from '../../service/requests';
import {PRODUCTS_URL} from '../../service/urls';
import {Product} from '../../store/slice/productSlice';
import {Colors} from '../../theme/colors';
import {Routes} from '../../utils/routes';
import {RootStackParamList} from '../../models/productList/productListTypes';

interface CartItemProps {
  item: ProductQuantity;
}

const CartItem: React.FC<CartItemProps> = ({item}) => {
  const [product, setProduct] = useState<Product | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const productUrl: string = `${PRODUCTS_URL}/${item.productId}`;
    getRequest<Product>(productUrl, {}).then(data => {
      setProduct(data.data);
      dispatch(setTotalPrice(data.data.price))      
    });
  }, [item.productId, item.quantity, dispatch]);  

  return (
    <Pressable
      style={styles.container}
      // böyle yaptık çünkü product'ın null olma ihtimalinden dolayı burası hata veriyordu. product varsa yönlendir diyoruz
      onPress={() => {
        if (product)
          navigation.navigate(Routes.PRODUCT_DETAIL, {item: product});
      }}>
      <View style={styles.wrapper}>
        <View style={{flex: 1}}>
          <Image source={{uri: product?.image}} style={styles.image} />
        </View>
        <View style={{flex: 4, gap: 5}}>
          <Text numberOfLines={1} style={{fontSize: 16, fontWeight: '500'}}>
            {product?.title}
          </Text>
          <Text style={{fontSize: 14}}>{product?.rating?.rate}</Text>
          <Text style={{fontSize: 14, color: 'green'}}>Kargo Bedava</Text>
          <Text
            style={styles.price}>
            {product?.price} TL
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: Colors.White,
    marginTop: 10,
    padding: 10,
    paddingRight: 20,
    borderWidth: 0.5,
    borderColor: Colors.Platinium,
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'contain',
  },
  price: {
    fontSize: 16,
    color: Colors.Primary,
    fontWeight: '500',
    textAlign: 'right',
  }
});

export default CartItem;
