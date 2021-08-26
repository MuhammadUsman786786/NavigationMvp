import React from 'react';
import {SCREEN_KEYS} from '../Utilities/Constants';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  FirstTabScreen,
  FirstTabScreenWithBottomTabs,
  SecondTabScreen,
  ThirdTabScreen,
} from '../Containers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTabNavigator = createBottomTabNavigator();
const FirstTabStack = createStackNavigator();
const SecondTabStack = createStackNavigator();
const ThirdTabStack = createStackNavigator();

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
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name={SCREEN_KEYS.SECOND_TAB_STACK}
        component={SecondTabStackRouter}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name={SCREEN_KEYS.THIRD_TAB_STACK}
        component={ThirdTabStackRouter}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export {BottomStackNavigator};
