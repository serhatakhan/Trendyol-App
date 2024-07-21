import React from 'react';
import {Text, StyleSheet, View, Pressable, Image} from 'react-native';
import ProductItemProps from '../../models/components/productItem';
import {height, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';

const ProductItem: React.FC<ProductItemProps> = ({
  title,
  description,
  price,
  image,
}) => {
  return (
    <Pressable style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <Text numberOfLines={2} style={styles.title}>
        {title.slice(0,12)}
        <Text style={styles.description}> {description}</Text>
      </Text>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={styles.price}>{price} TL</Text>
      </View>
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
    shadowOpacity: 0.20,
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
});

export default ProductItem;
