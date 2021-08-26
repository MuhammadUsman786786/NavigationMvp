import React from 'react';
import {StyleSheet} from 'react-native';
import {ApplicationStyles} from '../Themes';
import {
  CustomButton,
  CustomNavBar,
  SafeAreaContainer,
  Title,
} from '../Components';

const ScreenWithNoTabs = ({navigation, route}) => {
  const navigate = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer style={styles.mainContainer}>
      <CustomNavBar title={route?.name} isBack />
      <Title text={route?.name} />
      <CustomButton title={'Go Back'} onPress={navigate} />
    </SafeAreaContainer>
  );
};

export default ScreenWithNoTabs;
const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
});