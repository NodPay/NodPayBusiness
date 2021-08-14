import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

//where local files imported
import {color} from '../utils';
import {PageTitle, SettingsItem} from '../components';
import {
  AccountCircle,
  Bell,
  Detail,
  Lock,
  PencilEdit,
  PhoneGrey,
  Profile,
  Star,
  FileDocument,
} from '../assets';

const Settings = ({route, navigation}) => {
  const {type} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Settings"
        titleStyle={{color: color.btn_black}}
      />
      <SettingsItem
        icon={AccountCircle}
        title="Edit Profile"
        onPress={() =>
          navigation.navigate(
            type == 'business' ? 'EditProfileBusiness' : 'EditProfile',
          )
        }
      />
      {type == 'business' && (
        <SettingsItem
          icon={FileDocument}
          title="Business Document"
          onPress={() => navigation.navigate('BusinessDocument')}
        />
      )}
      <SettingsItem
        icon={Lock}
        title="Password & Security"
        onPress={() => navigation.navigate('PasswordSecurity')}
      />
      {type != 'business' && (
        <SettingsItem
          icon={Profile}
          title="Privacy & Socials"
          onPress={() => navigation.navigate('PrivacySocial')}
        />
      )}
      <SettingsItem
        icon={Bell}
        title="Notification Settings"
        onPress={() => navigation.navigate('NotificationSetting')}
      />
      {type != 'business' && (
        <SettingsItem
          icon={PhoneGrey}
          title="Change Phone Number"
          onPress={() => navigation.navigate('ChangePhoneNumber')}
        />
      )}
      <SettingsItem
        icon={Detail}
        title="Language"
        onPress={() => navigation.navigate('Language')}
      />
      <SettingsItem icon={Star} title="Rate NodPay" />
      <SettingsItem
        icon={PencilEdit}
        title="Send Feedback"
        onPress={() => {
          navigation.navigate('Feedback');
        }}
      />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_grey,
  },
});
