import React from 'react';
import VectorIcon from './VectorIcon';
import {MetricsHorizontal, MetricsMod} from '../Themes';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const IconButton = ({name, type, size, color, style, container, onPress}) => {
  const Wrapper = typeof onPress === 'function' ? TouchableOpacity : View;
  return (
    <Wrapper onPress={onPress} style={[styles.container, container]}>
      <VectorIcon
        name={name}
        type={type}
        size={size}
        color={color}
        style={style}
      />
    </Wrapper>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: MetricsMod.smallMargin,
    paddingHorizontal: MetricsHorizontal.smallMargin,
  },
});
