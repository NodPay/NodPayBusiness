import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

//where local files imported
import {Gap, PageTitle, SettingsSaveButton, Tabbed} from '../../components';
import {color, dimens} from '../../utils';
import Profile from './Profile';
import Address from './Address';
import useStateContext from '../../store/useStateContext';

const EditProfileBusiness = ({navigation}) => {
  const {state, dispatch} = useStateContext();

  const onSave = () => {
    console.log('form edit profile', state.formEditProfileBusiness);
    navigation.replace('AppBusinessDrawer', {
      screen: 'Home',
    });
    // TODO
    // post to api
    // replace navigation
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} />
      <PageTitle
        isCloseMode
        onPressClose={() => navigation.goBack()}
        title="Edit Profile Business"
        titleStyle={{color: color.btn_black}}
        containerStyle={{marginTop: dimens.default}}
      />
      <Gap t={dimens.default} />
      {/* Tab Bar */}
      <Tab.Navigator
        tabBar={props => <Tabbed {...props} />}
        initialRouteName="Profile">
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Address" component={Address} />
      </Tab.Navigator>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'android' ? false : true}>
        <SettingsSaveButton
          onCancel={() => navigation.goBack()}
          onSave={onSave}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditProfileBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_grey,
  },
});
