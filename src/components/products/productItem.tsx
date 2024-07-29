import React from 'react';
import {Text, StyleSheet, View, Pressable, Image} from 'react-native';
import ProductItemProps from '../../models/components/productItem';
import {height, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Routes} from '../../utils/routes';
import {RootStackParamList} from '../../models/productList/productListTypes';

const ProductItem: React.FC<ProductItemProps> = ({item, style}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    // dışardan style geliyorsa o uygulansın gelmiyorsa buradaki styles uygulansın.
    <Pressable
      style={style ? style : styles.container}
      onPress={() => navigation.navigate(Routes.PRODUCT_DETAIL, {item: item})}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <Text numberOfLines={2} style={styles.title}>
        {item.title.slice(0, 12)}
        <Text style={styles.description}> {item.description}</Text>
      </Text>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={styles.price}>{item.price} TL</Text>
      </View>
      <Pressable style={styles.favoriteButton}>
        <AntDesign size={18} color={Colors.Black} name="hearto" />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.35,
    marginVertical: 10,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.Platinium,
    backgroundColor: Colors.White,
    borderRadius: 10,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  image: {
    width: width * 0.3,
    height: height * 0.15,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.Black,
    margin: 10,
  },
  description: {
    color: Colors.Gray,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  price: {
    color: Colors.Primary,
    marginHorizontal: 10,
    fontWeight: '500',
  },
  favoriteButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: Colors.White,
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default ProductItem;
