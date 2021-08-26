import React from 'react';
import {CustomNavBar, SafeAreaContainer, Title} from '../Components';

const ThirdTabScreen = ({route}) => {
  return (
    <SafeAreaContainer>
      <CustomNavBar title={route?.name} isLeftDrawer />
      <Title text={route?.name} />
    </SafeAreaContainer>
  );
};

export default ThirdTabScreen;
