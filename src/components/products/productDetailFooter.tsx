import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CustomButton from './customButton';
import { Colors } from '../../theme/colors';
import { Product } from '../../store/slice/productSlice';

interface ProductDetailFooterProps {
    item: Product
}

const ProductDetailFooter: React.FC<ProductDetailFooterProps> = ({item}) => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerPrice}>
        <Text style={styles.price}>{item.price} TL</Text>
        <Text style={styles.freeShipping}>Kargo Bedava</Text>
      </View>
      <View style={styles.footerButtons}>
        <CustomButton
          title="Şimdi Al"
          bg={Colors.White}
          text={Colors.Primary}
        />
        <CustomButton
          title="Sepete Ekle"
          bg={Colors.Primary}
          text={Colors.White}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: Colors.White,
    borderTopWidth: 0.5,
    borderColor: Colors.LightGray,
  },
  footerPrice: {
    flex: 1,
  },
  price: {
    fontWeight: '700',
    fontSize: 14,
    color: 'green',
  },
  freeShipping: {
    fontWeight: '600',
    color: '#32CD32',
  },
  footerButtons: {
    flex: 3,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
});

export default ProductDetailFooter;
