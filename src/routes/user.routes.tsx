import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { TabRoutes } from './tab.routes';
import { SignUp } from '../screens/SignUp';
import { Details } from '../screens/Details';

export function UserRoutes() {
  return (
    <Navigator>
      <Screen
        name="TabRoutes"
        options={{ headerShown: false }}
        component={TabRoutes}
      />
      <Screen
        name="Details"
        options={{ headerShown: false }}
        component={Details}
      />
      <Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUp}
      />
    </Navigator>
  );
}
