import React from 'react';
import {SCREEN_KEYS} from '../Utilities/Constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  FirstTabScreen,
  FirstTabScreenWithBottomTabs,
  SecondTabScreen,
  ThirdTabScreen,
} from '../Containers';

const BottomTabNavigator = createBottomTabNavigator();
const FirstTabStack = createNativeStackNavigator();
const SecondTabStack = createNativeStackNavigator();
const ThirdTabStack = createNativeStackNavigator();

const FirstTabStackRouter = () => {
  return (
    <FirstTabStack.Navigator screenOptions={{headerShown: false}}>
      <FirstTabStack.Screen
        name={SCREEN_KEYS.FIRST_TAB_SCREEN}
        component={FirstTabScreen}
      />
      <FirstTabStack.Screen
        component={FirstTabScreenWithBottomTabs}
        name={SCREEN_KEYS.FIRST_TAB_SCREEN_WITH_BOTTOM_TABS}
      />
    </FirstTabStack.Navigator>
  );
};

const SecondTabStackRouter = () => {
  return (
    <SecondTabStack.Navigator screenOptions={{headerShown: false}}>
      <SecondTabStack.Screen
        name={SCREEN_KEYS.SECOND_TAB_SCREEN}
        component={SecondTabScreen}
      />
    </SecondTabStack.Navigator>
  );
};

const ThirdTabStackRouter = () => {
  return (
    <ThirdTabStack.Navigator screenOptions={{headerShown: false}}>
      <ThirdTabStack.Screen
        name={SCREEN_KEYS.THIRD_TAB_SCREEN}
        component={ThirdTabScreen}
      />
    </ThirdTabStack.Navigator>
  );
};

const BottomStackNavigator = () => {
  return (
    <BottomTabNavigator.Navigator screenOptions={{headerShown: false}}>
      <BottomTabNavigator.Screen
        name={SCREEN_KEYS.FIRST_TAB_STACK}
        component={FirstTabStackRouter}
      />
      <BottomTabNavigator.Screen
        name={SCREEN_KEYS.SECOND_TAB_STACK}
        component={SecondTabStackRouter}
      />
      <BottomTabNavigator.Screen
        name={SCREEN_KEYS.THIRD_TAB_STACK}
        component={ThirdTabStackRouter}
      />
    </BottomTabNavigator.Navigator>
  );
};

export {BottomStackNavigator};
