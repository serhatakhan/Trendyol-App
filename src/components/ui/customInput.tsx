import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {CustomInputProps} from '../../models/components/customInputProps';
import {Colors} from '../../theme/colors';
import Feather from 'react-native-vector-icons/Feather';

const CustomInput: React.FC<CustomInputProps> = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <View style={{position: "absolute", left: 0, padding: 10, zIndex: 10}}>
        <Feather size={22} color={Colors.Black} name="search" />
      </View>
      <TextInput
        placeholderTextColor={Colors.Gray}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: Colors.White,
    borderWidth: 1.2,
    borderColor: Colors.LightGray,
    margin: 10,
    borderRadius: 14,
    padding: 24,
    paddingLeft:40,
    width: '100%',
  },
});

export default CustomInput;
