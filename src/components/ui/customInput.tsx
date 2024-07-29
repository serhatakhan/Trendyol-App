import React from 'react';
import {StyleSheet, View, TextInput, Pressable} from 'react-native';
import {CustomInputProps} from '../../models/components/customInputProps';
import {Colors} from '../../theme/colors';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  name = 'search',
}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Pressable style={styles.iconWrapper} onPress={()=> navigation.goBack()}>
        <Feather size={22} color={Colors.Black} name={name} />
      </Pressable>
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
    paddingLeft: 40,
    width: '100%',
  },
  iconWrapper: {
    position: 'absolute',
    left: 0,
    padding: 10,
    zIndex: 10,
  },
});

export default CustomInput;
