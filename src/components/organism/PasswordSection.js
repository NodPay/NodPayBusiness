import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

// where local files imported
import {color, dimens} from '../../utils';
import {Gap} from '../atoms';
import {InputPassword} from '../moleculs';

const PasswordSection = ({}) => {
  // handle value on input form
  const [user, setUser] = useState({
    password: '',
    newPassword: '',
  });

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
      <Gap t={dimens.default_16} />
      <InputPassword
        labelStyle={{color: color.btn_black}}
        label="Password"
        placeholder="Password"
        value={user.password}
        onChangeText={value => setUser({...user, password: value})}
      />
      <InputPassword
        labelStyle={{color: color.btn_black}}
        label="New Password"
        placeholder="New Password"
        value={user.newPassword}
        onChangeText={value => setUser({...user, newPassword: value})}
      />
      <Gap b={dimens.default_16} />
    </ScrollView>
  );
};

export default PasswordSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
