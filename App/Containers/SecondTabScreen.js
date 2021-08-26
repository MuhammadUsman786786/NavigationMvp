import React from 'react';
import {SCREEN_KEYS} from '../Utilities/Constants';
import {NavigationService} from '../Services/NavigatorServices';
import {
  CustomButton,
  CustomNavBar,
  SafeAreaContainer,
  Title,
} from '../Components';

const SecondTabScreen = ({navigation, route}) => {
  const navigateToScreenWithNoTabs = () => {
    NavigationService.pushScreen(navigation, SCREEN_KEYS.SCREEN_WITH_NO_TABS);
  };

  return (
    <SafeAreaContainer>
      <CustomNavBar isCenterLogo isRightDrawer />
      <Title text={route?.name} />
      <CustomButton
        title={'NavigateToScreenWithNoTabs'}
        onPress={navigateToScreenWithNoTabs}
      />
    </SafeAreaContainer>
  );
};

export default SecondTabScreen;
