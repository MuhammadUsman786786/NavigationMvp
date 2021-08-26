import React from 'react';
import {SCREEN_KEYS} from '../Utilities/Constants';
import {
  CustomButton,
  CustomNavBar,
  SafeAreaContainer,
  Title,
} from '../Components';

const SecondTabScreen = ({navigation, route}) => {
  const navigateToScreenWithNoTabs = () => {
    navigation.navigate(SCREEN_KEYS.SCREEN_WITH_NO_TABS);
  };
  return (
    <SafeAreaContainer>
      <CustomNavBar title={route?.name} isLeftDrawer />
      <Title text={route?.name} />
      <CustomButton
        title={'NavigateToScreenWithNoTabs'}
        onPress={navigateToScreenWithNoTabs}
      />
    </SafeAreaContainer>
  );
};

export default SecondTabScreen;
