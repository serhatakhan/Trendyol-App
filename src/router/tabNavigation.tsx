import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import TrendyolGo from '../screens/trendyolGo';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import {
  CART_SCREEN,
  FAVORITES_SCREEN,
  HOME_SCREEN,
  PROFILE_SCREEN,
  TRENDYOLGO_SCREEN,
} from '../utils/routes';
import TabIcon from '../components/router/tabIcon';
import { Colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon focused={focused} color={color} size={size} name={route.name} />
        ),
        tabBarActiveTintColor: Colors.Primary,
        tabBarInactiveTintColor: Colors.Silver,
      })}>
      <Tab.Screen name={HOME_SCREEN} component={Home} />
      <Tab.Screen name={TRENDYOLGO_SCREEN} component={TrendyolGo} />
      <Tab.Screen name={FAVORITES_SCREEN} component={Favorites} />
      <Tab.Screen name={CART_SCREEN} component={Cart} />
      <Tab.Screen name={PROFILE_SCREEN} component={Profile} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
