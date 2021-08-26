import React from 'react';
import {SCREEN_KEYS} from '../Utilities/Constants';
import {NavigationService} from '../Services/NavigatorServices';
import {
  CustomButton,
  CustomNavBar,
  SafeAreaContainer,
  Title,
} from '../Components';

const FirstTabScreen = ({navigation, route}) => {
  const navigateToScreenWithTabs = () => {
    NavigationService.pushScreen(
      navigation,
      SCREEN_KEYS.FIRST_TAB_SCREEN_WITH_BOTTOM_TABS,
    );
  };

  const navigateToScreenWithNoTabs = () => {
    NavigationService.pushScreen(navigation, SCREEN_KEYS.SCREEN_WITH_NO_TABS);
  };

  return (
    <SafeAreaContainer>
      <CustomNavBar isLeftDrawer isCenterLogo />
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
