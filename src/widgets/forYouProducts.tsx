import React from 'react';
import {FlatList, View} from 'react-native';
import widgetsStyle from '../styles/widgets/widgetsStyles';
import WidgetHeader from '../components/ui/widgetHeader';
import {WidgetProps} from '../models/widgets/widget';
import ProductItem from '../components/products/productItem';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const ForYouProducts: React.FC<WidgetProps> = ({item}) => {
  const {products} = useSelector((state: RootState) => state.products);
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

export default ForYouProducts;
