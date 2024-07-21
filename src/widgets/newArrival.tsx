import React from 'react';
import {FlatList, View} from 'react-native';
import WidgetHeader from '../components/ui/widgetHeader';
import widgetsStyle from '../styles/widgets/widgetsStyles';
import {useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';
import { RootState } from '../store';
import { WidgetProps } from '../models/widgets/widget';

const NewArrival: React.FC<WidgetProps> = ({item}) => {
  const {newArrival} = useSelector((state:RootState) => state.products);  

  return (
    <View style={widgetsStyle.container}>
      <WidgetHeader widgetTitle={item.title} seeAll={true} />
      <FlatList
        style={{marginLeft: 4}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={newArrival}
        renderItem={({item}) => (
          <ProductItem
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default NewArrival;
