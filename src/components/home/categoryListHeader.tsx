import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Colors} from '../../theme/colors';
import SearchSvg from '../svg/searchSvg';

const CategoryListHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <SearchSvg />
        <Text style={styles.text}>Kategoriler</Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textBox: {
    borderWidth: 0.5,
    borderColor: Colors.Silver,
    padding: 3,
    paddingHorizontal: 6,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    padding: 5,
    color: Colors.Gray,
    fontWeight: '500',
  },
  line: {
    width: 1,
    height: 30,
    backgroundColor: Colors.Silver,
  },
});

export default CategoryListHeader;
