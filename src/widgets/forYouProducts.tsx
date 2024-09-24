import React, { memo, useEffect } from 'react';
import {FlatList, View} from 'react-native';
import widgetsStyle from '../styles/widgets/widgetsStyles';
import WidgetHeader from '../components/ui/widgetHeader';
import {WidgetProps} from '../models/widgets/widget';
import ProductItem from '../components/products/productItem';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import { getProducts } from '../store/actions/productActions';

const ForYouProducts: React.FC<WidgetProps> = ({item}) => {
  const {products} = useSelector((state: RootState) => state.products);
  const {selectedCategory} = useSelector((state:RootState)=> state.categories)
  const dispatch = useDispatch<AppDispatch>(); // dispatch'in tipi  
  useEffect(() => {
    dispatch(getProducts({category: selectedCategory}));
  }, [selectedCategory])
  
  return (
    <View style={widgetsStyle.container}>
      <WidgetHeader widgetTitle={item.title} seeAll={false} />
      <FlatList
        style={{marginLeft: 4}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => (
          <ProductItem
            item={item}
          />
        )}
      />
    </View>
  );
};

export default memo(ForYouProducts);
