import React, { memo, useEffect } from 'react';
import {FlatList, ImageBackground, View, StyleSheet} from 'react-native';
import WidgetHeader from '../components/ui/widgetHeader';
import widgetsStyle from '../styles/widgets/widgetsStyles';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';
import {AppDispatch, RootState} from '../store';
import { WidgetProps } from '../models/widgets/widget';
import { height, width } from '../utils/constants';
import { Colors } from '../theme/colors';
import { getBestSellerProducts } from '../store/actions/productActions';

const BestSeller: React.FC<WidgetProps> = ({item}) => {
  // Redux state'e erişirken ve useSelector kullanırken, TypeScript'in state'in tipini bilmesini sağlamak gerekir.
  const {bestSeller} = useSelector((state: RootState) => state.products);
  const image = {uri: 'https://cdn.dsmcdn.com/mobile/background/flashsales_widgetbacground_android.png'};

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBestSellerProducts({limit:5}));
  }, [])
  
  return (
    <ImageBackground source={image} style={styles.container} resizeMode="stretch">
      <View style={[widgetsStyle.container, {position: "absolute", backgroundColor: "transparent"}]}>
        <WidgetHeader widgetTitle={item.title} seeAll={true} color={Colors.White} category={"jewelery"} />
        <FlatList
          style={{marginLeft: 4}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={bestSeller}
          renderItem={({item}) => (
            <ProductItem
              item={item}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: width,
    height: height*0.33,
    marginVertical: 10
  },
});

export default memo(BestSeller); 
// bu componenti gereksiz render etmememek için memo kullandık
