import React from 'react';
import {CustomNavBar, SafeAreaContainer, Title} from '../Components';

const ThirdTabScreen = ({route}) => {
  return (
    <SafeAreaContainer>
      <CustomNavBar isCenterLogo isRightDrawer />
      <Title text={route?.name} />
    </SafeAreaContainer>
  );
};

export default ThirdTabScreen;
