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
  InputText,
  InputPassword,
  ErrorMessage,
} from '../components';
import {SplashWaveGradient} from '../assets';
import {clearAll, color, dimens, fonts, wait, storeData} from '../utils';

const LoginEmail = ({navigation}) => {
  const EMAIL = 'admin@nodpay.app';
  const PASSWORD = 'admin';

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
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
    if (email == '' || password == '') {
      wait(100).then(() => {
        setIsLoading(false);
        setError({
          status: true,
          message: "Email or Password Can't be empty.",
        });
      });
    } else if (email != EMAIL && password != PASSWORD) {
      wait(100).then(() => {
        setIsLoading(false);
        setError({
          status: true,
          message: 'Email or password is wrong!',
        });
      });
    } else {
      wait(300).then(() => {
        console.log('login success');
        storeData('session', {
          isLogin: true, // if auth success, then save token for current user then user doesn't need to relogin
          isBoarding: true,
        });
        // For reset walktrough when new login
        // storeData('walktrough', {
        //   isProfile: false,
        //   isHome: false,
        // });
        setError({status: false, message: ''});
        navigation.reset({
          routes: [{name: 'AppDrawer'}],
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
          <View style={styles.bg_top} />
          <Image source={SplashWaveGradient} style={styles.image_bg_wave} />
          <View style={styles.center_content}>
            <SectionTitle
              title="Welcome Back!"
              titleStyle={{fontSize: dimens.large_40}}
              subtitle={`Login to your account with your email or\nmobile number`}
              textColor="white"
            />
            <View style={styles.form_container}>
              <InputText
                labelStyle={{color: color.btn_black}}
                label="Email"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              <InputPassword
                labelStyle={{color: color.btn_black}}
                label="Password"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <LinkAction
              text="Forgot your password?"
              actionText="Click here"
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}
            />
            {error.status == true && <ErrorMessage message={error.message} />}
          </View>
        </View>
      </ScrollView>
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
              borderColor: color.btn_white,
              borderWidth: 1,
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
              onPress={() => navigation.navigate('Register')}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
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
    paddingTop: dimens.very_large,
  },
  center_content: {
    paddingHorizontal: dimens.default_16,
    paddingBottom: dimens.very_large,
  },
  form_container: {
    marginBottom: dimens.default_16,
  },
  bg_top: {
    backgroundColor: color.bg_color,
    position: 'absolute',
    width: '100%',
    height: 400,
    top: 0,
  },
  image_bg_wave: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: 500,
    top: 20,
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
