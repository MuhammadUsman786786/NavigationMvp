import * as React from 'react';
import {CommonActions} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/compat';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function replace(name, params) {
  navigationRef.current?.replace(name, params);
}

export function dispatch(params) {
  navigationRef.current?.dispatch(params);
}

export function reset(screenName) {
  navigationRef.current?.reset({
    routes: [{name: screenName}],
  });
}

export function goBack(params) {
  navigationRef.current?.goBack(params);
}

export function toggleDrawer(params) {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}

export const resetAndNavigate = (screenName, index = 0) => {
  NavigationService.dispatch(
    CommonActions.reset({
      index: index,
      routes: [{name: screenName}],
    }),
  );
};

const getCurrentRouteName = () => {
  return navigationRef.current?.getRootState?.().routes?.[0]?.name;
};

export const NavigationService = {
  goBack: goBack,
  navigate: navigate,
  reset: reset,
  dispatch: dispatch,
  toggleDrawer: toggleDrawer,
  resetAndNavigate: resetAndNavigate,
  getCurrentRouteName: getCurrentRouteName,
};
