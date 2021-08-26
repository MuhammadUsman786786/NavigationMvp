import React from 'react';
import {SafeAreaContainer} from './index';
import {ApplicationStyles, Colors} from '../Themes';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationService} from '../Services/NavigatorServices';
import {SCREEN_KEYS} from '../Utilities/Constants';

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
    setTimeout(NavigationService.toggleDrawer, 1000);
  };

  return (
    <SafeAreaContainer statusBarColor={Colors.white}>
      <Item text={'Navigate To Empty Screen'} onPress={navigateToEmptyScreen} />
      <Item text={'text'} />
      <Item text={'text'} />
      <Item text={'text'} />
    </SafeAreaContainer>
  );
};

export default CustomDrawerComponent;

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
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
});
