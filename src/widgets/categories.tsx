import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Colors} from '../theme/colors';
import CategoryItem from '../components/home/categoryItem';
import CategoryListHeader from '../components/home/categoryListHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import { categoryMapping, categoryOrder } from '../utils/constants';

const Categories: React.FC = () => {
  const {categories} = useSelector((state: RootState) => state.categories);

  /*** Orijinal kategori adını selectedCategory state'ine(CategoryItem'ın içinde) göndermek ve aynı zamanda kullanıcıya kategorilerin Türkçe isimleri göstermek istediğimiz için bu yolu izledik. ***/
  // Kategorileri sıralı hale getir ve Türkçe isimlerini kullan
  const sortedCategories = categoryOrder
    .filter(category => categories.includes(category)) // categoryOrder dizisinde bulunan kategorileri, categories dizisinde bulunan mevcut kategorilerle karşılaştırır ve sadece mevcut olanları döndür. Örnek: Eğer categories dizisi ["men's clothing", "electronics"] içeriyorsa, bu adım "men's clothing" ve "electronics" döndürür.
    .map(category => ({ original: category, translated: categoryMapping[category] })); // Bu işlem sonucunda her bir kategori bir nesneye dönüştürülür. Bu nesneler, orijinal İngilizce adı (original) ve Türkçe adı (translated) içerir. Örneğin [{ original: "electronics", translated: "Elektronik" }]
  
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<CategoryListHeader />}
        ListHeaderComponentStyle={styles.listHeader}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={sortedCategories}
        renderItem={({item}) => 
          <CategoryItem 
            originalTitle={item.original}
            translatedTitle={item.translated} 
          />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: Colors.LightGray,
    borderBottomWidth: 0.6,
  },
  listHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
});

export default Categories;
