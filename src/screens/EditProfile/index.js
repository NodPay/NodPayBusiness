import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

//where local files imported
import {color} from '../../utils';
import {PageTitle, Tabbed, SettingsSaveButton} from '../../components';
import {ContactBackground} from '../../assets';
import EditProfileTabProfile from './Profile';
import EditProfileTabAddress from './Address';

const EditProfile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Edit Profile"
        titleStyle={{color: color.btn_black}}
      />
      <Tab.Navigator tabBar={props => <Tabbed {...props} />}>
        <Tab.Screen name="Profile" component={EditProfileTabProfile} />
        <Tab.Screen name="Address" component={EditProfileTabAddress} />
      </Tab.Navigator>
      <Image source={ContactBackground} style={styles.bg_contact} />
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'android' ? false : true}>
        <SettingsSaveButton />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditProfile;

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
