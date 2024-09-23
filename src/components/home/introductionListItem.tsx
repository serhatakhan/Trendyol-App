import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Introduction, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import FastImage from 'react-native-fast-image'

interface IntroductionListItemProp {
  item: Introduction; // dizi olmadığı için sonundan [] bunu kaldırdık
}

const IntroductionListItem: React.FC<IntroductionListItemProp> = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{
            uri: item.image, 
            priority: 'normal', 
            cache: 'cacheOnly'}} // resimler zaten lokalimizde olduğu için ağ isteğinde bulunmadan proje yüklendiğinde cache'den alsın diyoruz.
          style={styles.image}
        />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 8,
    marginRight: 15,
    gap: 5,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.7,
    borderColor: Colors.Silver,
    borderRadius: (width * 0.14) / 2, // borderRadius değerini genişliğin ve yüksekliğin yarısına eşit olacak şekilde ayarlayarak tam yuvarlak bir şekil elde ettik
    width: width * 0.14,
    height: width * 0.14,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: (width * 0.14) / 2,
    resizeMode: "contain",
  },
  title: {
    fontSize: 10,
  },
});

export default IntroductionListItem;
