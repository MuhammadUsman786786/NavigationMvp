import React from 'react';
import {SafeAreaContainer} from './index';
import {ApplicationStyles, Colors} from '../Themes';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationService} from '../Services/NavigatorServices';
import {SCREEN_KEYS} from '../Utilities/Constants';
import {View} from 'react-native';

const Item = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawerComponent = () => {
  const navigation = useNavigation();

  const navigateToEmptyScreen = () => {
    NavigationService.pushScreen(navigation, SCREEN_KEYS.SCREEN_WITH_NO_TABS);
    setTimeout(NavigationService.toggleDrawer, 500);
  };

  const navigateToTabbedScreen = () => {
    navigation.navigate(SCREEN_KEYS.SECOND_TAB_STACK);
  };

  const logoutNavigation = () => {
    NavigationService.reset(SCREEN_KEYS.SIGN_IN_SCREEN);
  };

  return (
    <SafeAreaContainer
      statusBarColor={Colors.primary}
      style={styles.mainContainer}>
      <View>
        <Item
          text={'Navigate To Empty Screen'}
          onPress={navigateToEmptyScreen}
        />
        <Item
          text={'Navigate To Second Tab'}
          onPress={navigateToTabbedScreen}
        />
      </View>
      <TouchableOpacity
        style={styles.logoutButtonText}
        onPress={logoutNavigation}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaContainer>
  );
};

export default CustomDrawerComponent;

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    borderRightWidth: 0.5,
    justifyContent: 'space-between',
    borderRightColor: 'rgba(0,0,0,0.1)',
  },
  itemContainer: {
    marginBottom: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: Colors.lightPrimary,
  },
  title: {
    color: Colors.primary,
  },
  logoutButtonText: {
    margin: 10,
    color: 'red',
  },
});
