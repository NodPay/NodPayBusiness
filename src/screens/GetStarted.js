import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';

//where local file imported
import {Button, Logo} from '../components/';
import {color, dimens, fonts} from '../utils';
import {SplashWave, GetStarted as GetStartedImage} from '../assets';

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={color.bg_color} />
      <View style={styles.logo}>
        <Logo />
      </View>
      <Image
        source={GetStartedImage}
        style={{
          width: '100%',
          resizeMode: 'stretch',
        }}
      />
      <Text style={styles.text}>
        Safe{' '}
        <Text style={[styles.text, {color: 'white'}]}>
          {`way\nto transfer\nmoney`}
        </Text>
      </Text>
      <View style={styles.wrap_btn}>
        <Button
          title="Log In"
          onPress={() => navigation.navigate('Login')}
          btnStyle={{marginBottom: 8}}
        />
        <Button
          title="Get Started"
          btnStyle={{backgroundColor: color.btn_black, marginBottom: 8}}
          titleStyle={{color: 'white'}}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <Image source={SplashWave} style={styles.img} />
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_color,
  },
  wrap_btn: {
    flex: 1,
    marginHorizontal: dimens.default_16,
    justifyContent: 'flex-end',
  },
  img: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    left: 0,
    right: 0,
    width: '100%',
  },
  logo: {
    padding: dimens.default_16,
  },
  text: {
    fontFamily: fonts.sofia_bold,
    fontSize: 56,
    fontWeight: 'bold',
    color: color.btn_black,
    paddingHorizontal: dimens.default_16,
    marginTop: dimens.default_16,
  },
});
