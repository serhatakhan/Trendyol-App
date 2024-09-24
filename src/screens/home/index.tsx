import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
} from 'react-native';
import widgets from '../../widgets/widgets.json';
import Categories from '../../widgets/categories';
import ForYouProducts from '../../widgets/forYouProducts';
import BestSeller from '../../widgets/bestSeller';
import Introduction from '../../widgets/introduction';
import NewArrival from '../../widgets/newArrival';
import {Widget} from '../../models/widgets/widget';

const Home: React.FC = () => {

  // * ListRenderItemInfo: renderItem fonksiyonuna geçirilen PARAMETRELERİN TÜRÜNÜ tanımlar.
  // * ListRenderItem: renderItem prop'u için kullanılan FONKSİYONUN TÜRÜNÜ tanımlar. Bu tür, öğe tipi ve fonksiyonun dönüş türünü içerir.
  const widgetItems: ListRenderItem<Widget> = ({item}) => {
    // console.log(item); -> baktık veri gelmiş. {item} yazarak alabildik, böyle gelmiş veriler
    switch (item.component) {
      case 'categories':
        return <Categories />;
      case 'introduction':
        return <Introduction />;
      case 'forYouProduct':
        return <ForYouProducts item={item} />;
      case 'bestSeller':
        return <BestSeller item={item} />;
      case 'newArrival':
        return <NewArrival item={item} />;
      default:
        return <Text>Veriler yüklenemedi :/ Daha sonra tekrar deneyin.</Text>;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={widgets}
        renderItem={widgetItems}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
// * bu component birden çok istek sonucu state'de değişiklik olduğu için rerender ediliyor(3 kez).
// * bunu engellemek için yani bu bileşenin gereksiz yere render edilmesini önlemek için 
// memo kullandık. ancak bu bileşenin yapısı gereği state çok defa güncellenmesi gerektiği
// için, bu bileşende kullanmak bize fayda sağlamayacak. yine birden çok kez render edilecek bu component.