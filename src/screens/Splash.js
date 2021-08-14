import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Image} from 'react-native';

// where local files imported
import {color, wait, getData} from '../utils';
import {Logo} from '../components';
import {SplashWave} from '../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    // go to onboarding screen initially
    // check at local storage
    // if user already login, then go to home page,
    // if no user logged in, then go to login screen / get started screen.

    wait(1000).then(() => {
      navigation.replace('Loader');
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={color.bg_color} />
      <Logo />
      <Image source={SplashWave} style={styles.img} />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_color,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
});
