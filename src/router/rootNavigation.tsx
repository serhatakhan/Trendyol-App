import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './tabNavigation';
import Header from '../components/router/header';

const Stack = createNativeStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <Header icon="" />,
      }}>
      <Stack.Screen name="Trendyol" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
