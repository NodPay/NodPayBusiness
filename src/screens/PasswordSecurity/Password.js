import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

//where local files imported
import {dimens} from '../../utils';
import {SettingsSaveButton, PasswordSection} from '../../components';

const PasswordSecurityPassword = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <PasswordSection withoutSectionTitle={true} />
      </ScrollView>
      <SettingsSaveButton />
    </View>
  );
};

export default PasswordSecurityPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: dimens.default_16,
  },
});
