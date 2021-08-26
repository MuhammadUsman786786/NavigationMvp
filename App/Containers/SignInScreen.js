import React from 'react';
import {ApplicationStyles} from '../Themes';
import {Text, View, StyleSheet} from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>SignInScreen</Text>
    </View>
  );
};

export default SignInScreen;
const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
});
