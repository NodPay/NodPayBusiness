import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';

// where local file imported
import {
  Button,
  PageTitle,
  SectionTitle,
  LinkAction,
  InputPhoneNumber,
  InputPassword,
  ErrorMessage,
} from '../components';
import {SplashWaveGradient2} from '../assets';
import {clearAll, color, dimens, fonts, storeData, wait} from '../utils';

const LoginPhoneBusiness = ({navigation}) => {
  const PHONE_NUMBER = '000000000000';
  const PASSWORD = 'admin';

  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('1');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submited, setSubmited] = useState(false);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  let keyboardDidShowListener;
  let keyboardDidHideListener;

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const _keyboardDidShow = () => {
    setIsKeyboardShow(true);
  };

  const _keyboardDidHide = () => {
    setIsKeyboardShow(false);
  };

  const [error, setError] = useState({
    status: false,
    message: '',
  });

  const onLogin = () => {
    setIsLoading(true);
    // check auth
    if (phone == '' || password == '') {
      wait(100).then(() => {
        setIsLoading(false);
        setError({
          status: true,
          message: "Phone Number or Password Can't be empty.",
        });
      });
    } else if (phone != PHONE_NUMBER && password != PASSWORD) {
      wait(100).then(() => {
        setIsLoading(false);
        setError({
          status: true,
          message: 'Phone Number not found or wrong password!',
        });
      });
    } else {
      wait(300).then(() => {
        storeData('session', {
          isLogin: true, // if auth success, then save token for current user then user doesn't need to relogin
          isBoarding: true,
        });
        setError({status: false, message: ''});
        navigation.reset({
          routes: [{name: 'AppBusinessDrawer'}],
        });
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={color.bg_color} />
      <ScrollView style={styles.scroll}>
        <View style={styles.inner_container}>
          <PageTitle title="Login" />
        </View>
        <View style={styles.center_container}>
          <View style={styles.center_content}>
            <SectionTitle
              title={`Welcome to\nNod Business!`}
              titleStyle={{fontSize: dimens.large_40}}
              subtitle={`Login to your business account with your email or mobile number`}
              textColor="white"
            />
            <View style={styles.form_container}>
              <InputPhoneNumber
                labelStyle={{color: 'white'}}
                label="Mobile Number"
                placeholder="Mobile Number"
                phoneCode={code}
                value={phone}
                onChangeText={setPhone}
                onChangeCode={setCode}
              />
              <InputPassword
                labelStyle={{color: 'white'}}
                label="Password"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <LinkAction
              text="Forgot your password?"
              actionText="Click here"
              textStyle={{color: 'white'}}
              actionTextStyle={{color: 'white'}}
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}
            />
            {error.status == true && <ErrorMessage message={error.message} />}
          </View>
        </View>
      </ScrollView>
      {!isKeyboardShow && (
        <Image source={SplashWaveGradient2} style={styles.image_bg_wave} />
      )}
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'android' ? false : true}>
        <View style={styles.footer_container}>
          <Button
            isLoading={isLoading}
            title="Login"
            btnStyle={{
              backgroundColor: color.btn_black,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
            onPress={onLogin}
          />
          {!isKeyboardShow && (
            <Button
              title="Register"
              btnStyle={{
                backgroundColor: 'white',
                borderColor: color.btn_white,
                borderWidth: 1,
                marginTop: dimens.default_12,
              }}
              titleStyle={{fontFamily: fonts.sofia_bold}}
              onPress={() => navigation.navigate('RegisterBusiness')}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginPhoneBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.loading,
  },
  scroll: {
    marginTop: -50,
    paddingTop: 50,
  },
  inner_container: {
    backgroundColor: color.bg_color,
    marginTop: -50,
    paddingTop: 50,
  },
  center_container: {
    flex: 1,
    paddingTop: dimens.large_40,
  },
  center_content: {
    paddingHorizontal: dimens.default_16,
    paddingBottom: dimens.very_large,
  },
  form_container: {
    marginTop: dimens.default_16,
    marginBottom: dimens.default_16,
  },
  image_bg_wave: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: 220,
    bottom: 0,
  },
  footer_container: {
    padding: dimens.default_16,
  },
  wave: {
    zIndex: -1,
  },
  greet: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.large_40,
    color: 'white',
  },
});
