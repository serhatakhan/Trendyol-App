import React, { memo, useEffect } from 'react';
import {FlatList, View} from 'react-native';
import WidgetHeader from '../components/ui/widgetHeader';
import widgetsStyle from '../styles/widgets/widgetsStyles';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';
import { AppDispatch, RootState } from '../store';
import { WidgetProps } from '../models/widgets/widget';
import { getNewArrivalProducts } from '../store/actions/productActions';

const NewArrival: React.FC<WidgetProps> = ({item}) => {
  const {newArrival} = useSelector((state:RootState) => state.products);  
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getNewArrivalProducts({limit:5, sort:"desc"}));
  }, [])

  return (
    <View style={widgetsStyle.container}>
      <WidgetHeader widgetTitle={item.title} seeAll={true} category={"electronics"} />
      <FlatList
        style={{marginLeft: 4}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={newArrival}
        renderItem={({item}) => (
          <ProductItem
            item={item}
          />
        )}
      />
    </View>
  );
};

export default memo(NewArrival); // rerenderın önüne geçmek için
