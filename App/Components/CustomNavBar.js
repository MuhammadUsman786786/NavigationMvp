import React from 'react';
import IconButton from './IconButton';
import {ICON_TYPES} from '../Utilities/Constants';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NavigationService} from '../Services/NavigatorServices';
import {ApplicationStyles, Colors, Images, MetricsMod} from '../Themes';
import {scale, moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/compat';

const CustomNavBar = ({
  title,
  isBack = false,
  isCenterLogo,
  isLeftDrawer = false,
}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
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
            onPress={NavigationService.toggleDrawer}
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
      <View style={styles.middleContainer}>
        {!!title && (
          <Text style={styles.title} numberOfLines={1}>
            {title || ''}
          </Text>
        )}
        {isCenterLogo && (
          <Image source={Images.headerLogo} style={styles.logo} />
        )}
      </View>
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
  middleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    width: scale(60),
  },
  logo: {
    width: moderateScale(32),
    height: moderateScale(32),
    borderRadius: moderateScale(6),
  },
  title: {
    color: Colors.white,
    textAlign: 'center',
  },
});
