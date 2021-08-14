import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {TouchableOpacity} from 'react-native-gesture-handler';

// where local files imported
import {color, dimens, fonts, storeData} from '../utils';
import {SplashWave, AtmCard, Wallet, Transfer} from '../assets';
import {Button, Logo} from '../components';

const OnBoarding = ({navigation}) => {
  const slides = [
    {
      key: 0,
      title: 'Connect',
      text: ' Social Payments to connect with your friends and family! See what your community is up to.',
      image: Transfer,
      backgroundColor: '#59b2ab',
    },
    {
      key: 1,
      title: 'No Bank. No Problem',
      text: ' Go to businesses near you to convert cash into digital money simply by using your QR code',
      image: AtmCard,
      backgroundColor: '#59b2ab',
    },
    {
      key: 3,
      title: 'Shop everywhere',
      text: 'Your virtual and debit cards are ready now to buy food, clothes and more online and in person!',
      image: Wallet,
      backgroundColor: '#59b2ab',
    },
  ];

  const RenderItem = ({item}) => {
    return (
      <View style={styles.renderItem}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const DoneButton = () => {
    return (
      <View>
        <Button
          title="Log In"
          titleStyle={{color: color.btn_title_white}}
          onPress={() => {
            navigation.navigate('LoginBusiness');
            // storeData('session', {
            //   isLogin: true,
            //   isIntro: false,
            // });
          }}
          btnStyle={{height: dimens.large_48, marginBottom: 8}}
        />
        <Button
          title="Get Started"
          titleStyle={{color: 'white'}}
          btnStyle={{
            backgroundColor: color.btn_black,
            height: dimens.large_48,
            marginBottom: -8,
          }}
          onPress={() => {
            navigation.navigate('RegisterBusiness');
            // storeData('session', {
            //   isIntro: false,
            //   isLogin: false,
            // });
          }}
        />
      </View>
    );
  };

  const NextButton = () => {
    return (
      <TouchableOpacity style={styles.btn} activeOpacity={0.9}>
        <Text style={styles.btn_title}>Next</Text>
      </TouchableOpacity>
    );
  };

  const SkipButton = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterBusiness')}
        style={[styles.btn, {backgroundColor: null}]}
        activeOpacity={0.9}>
        <Text
          style={[
            styles.btn_title,
            {
              fontFamily: fonts.sofia_bold,
              color: 'black',
            },
          ]}>
          Skip
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={color.bg_color} />
      <View style={styles.wrapLogo}>
        <Logo />
      </View>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        dotStyle={{
          backgroundColor: 'white',
          position: 'relative',
          bottom: '5%',
        }}
        activeDotStyle={{
          backgroundColor: color.btn_black,
          position: 'relative',
          bottom: '5%',
        }}
        bottomButton={true}
        showSkipButton={true}
        renderSkipButton={SkipButton}
        renderNextButton={NextButton}
        renderDoneButton={DoneButton}
      />
      <Image source={SplashWave} style={styles.img} />
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_color,
  },
  img: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    width: '100%',
  },
  renderItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapLogo: {
    padding: dimens.default_16,
    marginBottom: -50,
  },
  btn: {
    borderRadius: dimens.default_16,
    height: dimens.large_48,
    backgroundColor: color.btn_black,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn_title: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: 'white',
  },
  title: {
    fontFamily: fonts.sofia_bold,
    color: 'white',
    fontSize: dimens.large,
    marginTop: dimens.default_16,
  },
  text: {
    fontFamily: fonts.sofia_regular,
    color: 'white',
    fontSize: 19,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  image: {
    height: '60%',
    width: '100%',
    resizeMode: 'contain',
  },
});
