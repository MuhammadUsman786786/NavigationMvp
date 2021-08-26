import React from 'react';
import {ScreenWithNoTabs, SignInScreen} from '../Containers';
import {SCREEN_KEYS} from '../Utilities/Constants';
import {NavigationContainer} from '@react-navigation/native';
import {BottomStackNavigator} from './BottomStackNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigationRouter = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name={SCREEN_KEYS.BOTTOM_TAB_NAVIGATOR_ROUTER}
        component={BottomStackNavigator}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_KEYS.DRAWER_NAVIGATION_ROUTER}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={SCREEN_KEYS.SIGN_IN_SCREEN}
          component={SignInScreen}
        />
        <Stack.Screen
          name={SCREEN_KEYS.DRAWER_NAVIGATION_ROUTER}
          component={DrawerNavigationRouter}
        />
        <Stack.Screen
          name={SCREEN_KEYS.SCREEN_WITH_NO_TABS}
          component={ScreenWithNoTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
