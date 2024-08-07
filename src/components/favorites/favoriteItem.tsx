import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {height, width} from '../../utils/constants';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {Product} from '../../store/slice/productSlice';
import {Colors} from '../../theme/colors';
import {Routes} from '../../utils/routes';
import {RootStackParamList} from '../../models/productList/productListTypes';
import CustomButton from '../products/customButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {updateCarts} from '../../store/actions/cartsActions';
import { removeFavorite } from '../../store/slice/favoritesSlice';

interface FavoriteItemProps {
  item: Product;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({item}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Pressable
      style={styles.container}
      // böyle yaptık çünkü product'ın null olma ihtimalinden dolayı burası hata veriyordu. product varsa yönlendir diyoruz
      onPress={() => {
        if (item) navigation.navigate(Routes.PRODUCT_DETAIL, {item: item});
      }}>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item?.image}} style={styles.image} />
        </View>
        <View style={{flex: 4, gap: 5}}>
          <Text numberOfLines={1} style={{fontSize: 16, fontWeight: '500'}}>
            {item?.title}
          </Text>
          <View style={styles.rateContainer}>
            <Text style={{fontSize: 14}}>{item?.rating?.rate}</Text>
            <FontAwesome size={14} color={Colors.Primary} name="star" />
          </View>
          <Text style={{fontSize: 14, color: 'green'}}>Kargo Bedava</Text>
          <Text style={styles.price}>{item?.price} TL</Text>
          {/* Buttons */}
          <View style={styles.buttons}>
            <CustomButton
              title="Sil"
              text={Colors.Primary}
              bg={Colors.White}
              onPress={() =>
                dispatch(removeFavorite(item.id))
              }
            />
            <CustomButton
              title="Sepete Ekle"
              text={Colors.White}
              bg={Colors.Primary}
              onPress={() =>
                dispatch(
                  updateCarts({
                    userId: 2,
                    date: '2019-12-10',
                    products: [{productId: item.id, quantity: 1}],
                  }),
                )
              }
            />
          </View>
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
    marginTop: 6,
    padding: 10,
    paddingRight: 20,
    borderWidth: 0.5,
    borderColor: Colors.Platinium,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.2,
    height: height * 0.12,
    resizeMode: 'contain',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  price: {
    fontSize: 16,
    color: Colors.Primary,
    fontWeight: '600',
    textAlign: 'right',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 45,
    paddingTop: 10,
  },
});

export default FavoriteItem;
