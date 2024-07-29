import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import { Colors } from '../../theme/colors';
import { CustomButtonProps } from '../../models/components/button';

const CustomButton: React.FC<CustomButtonProps> = ({title, bg, text}) => {
  return (
    <Pressable style={[styles.container, bg ? {backgroundColor: bg} : styles.container]}>
      <Text style={[styles.text, text ? {color: text} : styles.text ]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.1,
    borderColor: Colors.Primary,
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 4
  },
  text:{
    color: Colors.Primary,
    fontWeight: "500",
    fontSize: 16
  }
});

export default CustomButton;
