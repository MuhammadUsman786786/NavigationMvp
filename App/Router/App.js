import React from 'react';
import {SCREEN_KEYS} from '../Utilities/Constants';
import {CustomDrawerComponent} from '../Components';
import {ScreenWithNoTabs, SignInScreen} from '../Containers';
import {NavigationContainer} from '@react-navigation/native';
import {BottomStackNavigator} from './BottomStackNavigator';
import {navigationRef} from '../Services/NavigatorServices';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigationRouter = () => {
  return (
    <Drawer.Navigator
      drawerPosition={'left'}
      drawerType="slide"
      options={{unmountOnBlur: true}}
      overlayColor="transparent"
      drawerStyle={{width: '70%'}}
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerComponent {...props} />}>
      <Drawer.Screen
        name={SCREEN_KEYS.BOTTOM_TAB_NAVIGATOR_ROUTER}
        component={BottomStackNavigator}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={SCREEN_KEYS.SIGN_IN_SCREEN}
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
