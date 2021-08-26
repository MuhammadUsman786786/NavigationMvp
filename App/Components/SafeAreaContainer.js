import React from 'react';
import {Keyboard, StatusBar, StyleSheet, View} from 'react-native';
import {ApplicationStyles, Colors} from '../Themes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SafeAreaContainer = ({
  style,
  children,
  barStyle = 'light-content',
  statusBarColor = Colors.primary,
  footerColor = Colors.white,
}) => {
  const {bottom, top} = useSafeAreaInsets();
  return (
    <View style={[styles.mainContainer, {backgroundColor: statusBarColor}]}>
      <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
      <View
        style={[styles.mainContainer, {marginTop: top}, style]}
        onPress={Keyboard.dismiss}
        activeOpacity={1}>
        {children}
      </View>
      <View style={{height: bottom, backgroundColor: footerColor}} />
    </View>
  );
};

export default SafeAreaContainer;

SafeAreaContainer.propTypes = {};

SafeAreaContainer.defaultProps = {};

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
});
