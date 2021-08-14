import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

//where local files imported
import {color} from '../../utils';
import {PageTitle, Tabbed} from '../../components';
import {ContactBackground} from '../../assets';
import Password from './Password';
import Biometric from './Biometric';

const PasswordSecurity = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Password & Security"
        titleStyle={{color: color.btn_black}}
      />
      <Tab.Navigator tabBar={props => <Tabbed {...props} />}>
        <Tab.Screen name="Password" component={Password} />
        <Tab.Screen name="Biometric" component={Biometric} />
      </Tab.Navigator>
      <Image source={ContactBackground} style={styles.bg_contact} />
    </SafeAreaView>
  );
};

export default PasswordSecurity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  bg_contact: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    width: '100%',
    resizeMode: 'stretch',
  },
});
