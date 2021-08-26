import React from 'react';
import {scale} from 'react-native-size-matters';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ApplicationStyles, Colors, Fonts, MetricsMod} from '../Themes';

const CustomButton = ({title = '', onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text numberOfLines={1} style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingVertical: MetricsMod.eighteen,
    backgroundColor: Colors.primary,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: Fonts.regular,
    marginHorizontal: scale(10),
  },
});
