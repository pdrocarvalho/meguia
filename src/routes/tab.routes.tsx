import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import { THEME } from '../themes';

import { Home } from '../screens/Home';
import { Commerces } from '../screens/Commerces';
import { Login } from '../screens/Login';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: THEME.COLORS.PRIMARY,
        tabBarInactiveTintColor: THEME.COLORS.GREY,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="address"
              size={32}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Commerces"
        component={Commerces}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="shop"
              size={32}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="heart"
              size={32}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: THEME.COLORS.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
