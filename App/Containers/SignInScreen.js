import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SCREEN_KEYS} from '../Utilities/Constants';
import {NavigationService} from '../Services/NavigatorServices';
import {CustomButton, SafeAreaContainer, Title} from '../Components';

const SignInScreen = ({route}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigateToDrawerStack = () => {
    NavigationService.reset(SCREEN_KEYS.DRAWER_NAVIGATION_ROUTER);
  };

  const onChangeUserName = value => {
    setUserName(value);
  };

  const onChangePassword = value => {
    setPassword(value);
  };

  return (
    <SafeAreaContainer barStyle={'light-content'}>
      <Title text={route?.name} />
      <TextInput
        onChangeText={onChangeUserName}
        value={username}
        style={styles.inputContainer}
        placeholder={'User name'}
      />
      <TextInput
        value={password}
        onChangeText={onChangePassword}
        style={styles.inputContainer}
        placeholder={'Password'}
      />
      <CustomButton
        title={'NavigateToScreenWithNoTabs'}
        onPress={navigateToDrawerStack}
      />
    </SafeAreaContainer>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    padding: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginTop: 10,
  },
});
