import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {CommonActions} from '@react-navigation/native';

// where local file imported
import {Loading, Logo} from '../components';
import {color, wait, getData, storeData} from '../utils';

const Loader = ({navigation}) => {
  useEffect(() => {
    getData('session').then(res => {
      console.log('session', res);
      if (typeof res == 'undefined') {
        wait(500).then(() => navigation.replace('OnBoarding'));
      } else if (res.isBoarding && res.isLogin == false) {
        wait(500).then(() => navigation.replace('LoginBusiness'));
      } else {
        // business has logged in.
        wait(500).then(() => {
          navigation.reset({
            routes: [{name: 'AppBusinessDrawer'}],
          });
        });
      }
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={color.bg_white} />
      <Loading size="large" color={color.loading} />
      <Logo titleStyle={{color: color.btn_black}} />
    </SafeAreaView>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
