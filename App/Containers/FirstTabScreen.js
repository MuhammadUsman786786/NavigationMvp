import React from 'react';
import {StyleSheet} from 'react-native';
import {ApplicationStyles} from '../Themes';
import {SCREEN_KEYS} from '../Utilities/Constants';
import {CustomNavBar} from '../Components';
import {CustomButton, SafeAreaContainer, Title} from '../Components';

const FirstTabScreen = ({navigation, route}) => {
  const navigateToScreenWithTabs = () => {
    navigation.navigate(SCREEN_KEYS.FIRST_TAB_SCREEN_WITH_BOTTOM_TABS);
  };

  const navigateToScreenWithNoTabs = () => {
    navigation.navigate(SCREEN_KEYS.SCREEN_WITH_NO_TABS);
  };

  return (
    <SafeAreaContainer>
      <CustomNavBar title={route?.name} isLeftDrawer />
      <Title text={route?.name} />
      <CustomButton
        title={'NavigateToScreenWithTabs'}
        onPress={navigateToScreenWithTabs}
      />
      <CustomButton
        title={'NavigateToScreenWithNoTabs'}
        onPress={navigateToScreenWithNoTabs}
      />
    </SafeAreaContainer>
  );
};

export default FirstTabScreen;
