import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ApplicationStyles} from '../Themes';

const Title = ({text}) => {
  return <Text style={styles.container}>{text}</Text>;
};

export default Title;
const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginTop: 10,
    textAlign: 'center',
  },
});
