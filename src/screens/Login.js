import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

// where local file imported
import {Button, PageTitle, SectionTitle, LinkAction} from '../components';
import {Facebook, Email, Phone, SplashWaveGradient, Change} from '../assets';
import {clearAll, color, dimens, fonts, storeData} from '../utils';

const Login = ({navigation}) => {
  const loginWithFacebook = async () => {
    try {
      const {isCancelled} = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (isCancelled) {
        throw new Error('User cancelled the login process.');
      }

      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw new Error('Something went wrong when obtaining access token.');
      }

      const credential = auth.FacebookAuthProvider.credential(data.accessToken);
      const result = await auth().signInWithCredential(credential);

      const profile = result.user.providerData.find(
        item => item.providerId === 'facebook.com',
      );

      console.warn('profile', profile);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    storeData('session', {
      isLogin: false,
      isBoarding: true, // because user have seen the boarding screen, the screen doesnt need to show anymore with current user.
    }).then(() => {
      console.log('session added!');
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={color.bg_color} />
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
          <Button
            iconLeft={Facebook}
            title="Sign in with Facebook"
            btnStyle={{
              backgroundColor: 'white',
              marginBottom: dimens.default_16,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'black'}}
            onPress={loginWithFacebook}
          />
          <Button
            iconLeft={Phone}
            title="Continue with Phone Number"
            btnStyle={{
              backgroundColor: 'white',
              marginBottom: dimens.default_16,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'black'}}
            onPress={() => navigation.navigate('LoginPhone')}
          />
          <Button
            iconLeft={Email}
            title="Continue with Email"
            btnStyle={{
              backgroundColor: 'white',
              marginBottom: dimens.default_16,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'black'}}
            onPress={() => navigation.navigate('LoginEmail')}
          />
        </View>
      </View>
      <View style={styles.footer_container}>
        <LinkAction
          text="Don’t have an account?"
          actionText="Sign Up"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
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
    padding: dimens.large,
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
