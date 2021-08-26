import React from 'react';
import IconButton from './IconButton';
import {ICON_TYPES} from '../Utilities/Constants';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationService} from '../Services/NavigatorServices';
import {ApplicationStyles, Colors, MetricsMod} from '../Themes';
import {scale, moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/compat';

const CustomNavBar = ({title, isBack = false, isLeftDrawer = false}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={[styles.headerContainer]}>
      <View style={styles.leftContainer}>
        {isLeftDrawer && (
          <IconButton
            name={'reorder-three'}
            type={ICON_TYPES.IonIcons}
            color={Colors.white}
            size={MetricsMod.thirty}
            container={styles.icon}
            onPress={toggleDrawer}
          />
        )}
        {isBack && (
          <IconButton
            name={'chevron-small-left'}
            type={ICON_TYPES.Entypo}
            color={Colors.white}
            size={MetricsMod.thirty}
            container={styles.icon}
            onPress={goBack}
          />
        )}
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title || ''}
      </Text>
      <View style={styles.rightContainer} />
    </View>
  );
};

export default CustomNavBar;

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: moderateScale(54),
    backgroundColor: Colors.primary,
  },
  icon: {
    paddingVertical: 0,
  },
  leftContainer: {
    width: scale(60),
  },
  rightContainer: {
    width: scale(60),
  },
  title: {
    flex: 1,
    color: Colors.white,
    textAlign: 'center',
  },
});
