import React, {useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Image, StatusBar} from 'react-native';

// where local file imported
import {Button, PageTitle, SectionTitle, LinkAction} from '../components';
import {
  Facebook2,
  EmailWhite,
  PhoneWhite,
  SplashWaveGradient2,
} from '../assets';
import {clearAll, color, dimens, fonts, storeData} from '../utils';

const LoginBusiness = ({navigation}) => {
  useEffect(() => {
    storeData('sessionBusiness', {
      isLogin: false,
      isBoarding: true, // because user have seen the boarding screen, the screen doesnt need to show anymore with current user.
    }).then(() => {
      console.log('session business added!');
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={color.bg_color} />
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
          <Button
            iconLeft={Facebook2}
            title="Sign in with Facebook"
            btnStyle={{
              backgroundColor: color.btn_black,
              marginBottom: dimens.default_16,
              borderColor: color.btn_black,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
            onPress={() => {}}
          />
          <Button
            iconLeft={PhoneWhite}
            title="Continue with Phone Number"
            btnStyle={{
              backgroundColor: color.btn_black,
              marginBottom: dimens.default_16,
              borderColor: color.btn_black,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
            onPress={() => navigation.navigate('LoginPhoneBusiness')}
          />
          <Button
            iconLeft={EmailWhite}
            title="Continue with Email"
            btnStyle={{
              backgroundColor: color.btn_black,
              marginBottom: dimens.default_16,
              borderColor: color.btn_black,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
            onPress={() => navigation.navigate('LoginEmailBusiness')}
          />
        </View>
      </View>
      <Image source={SplashWaveGradient2} style={styles.image_bg_wave} />
      <View style={styles.footer_container}>
        <LinkAction
          text="Don’t have an account?"
          textStyle={{color: 'white'}}
          actionText="Sign Up"
          actionTextStyle={{color: 'white'}}
          onPress={() => navigation.navigate('RegisterBusiness')}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.loading,
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
  image_bg_wave: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: 220,
    bottom: 0,
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
