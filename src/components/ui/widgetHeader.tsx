import React from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import WidgetHeaderProps from '../../models/components/widgetHeaderProps';
import { Colors } from '../../theme/colors';

const WidgetHeader: React.FC<WidgetHeaderProps> = ({widgetTitle, seeAll, color}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: color}]}>{widgetTitle}</Text>
      {seeAll && <Pressable><Text style={[styles.text, {color: color || Colors.Primary}]}>Tümünü Gör</Text></Pressable> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop:5
  },
  title: {
    fontSize: 18, 
    fontWeight: "500"
  },
  text: {
    fontSize: 16, 
    fontWeight: "500", 
    color: Colors.Primary
  }
});

export default WidgetHeader;
