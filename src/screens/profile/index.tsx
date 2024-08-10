import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import ListEmpty from '../../components/ui/listEmpty';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../theme/colors';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../models/productList/productListTypes';
import { Routes } from '../../utils/routes';

const Profile: React.FC = () => {
  const {isLogin} = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      {isLogin ? (
        <Text style={{fontSize: 30}}> Profile </Text>
      ) : (
        <ListEmpty
          title="Hesabım"
          btnTitle='Giriş Yap'
          description={`Hesabınızı görüntüleyebilmek için lütfen giriş yapın. \n\n Siparişlerinizi ve Elite üyelik durumunuzu, \n hesabımdan takip edebilirsiniz.`}
          icon={<AntDesign size={50} color={Colors.Primary} name={'smileo'} />}
          onPress={()=> navigation.navigate(Routes.LOGIN)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Profile;
