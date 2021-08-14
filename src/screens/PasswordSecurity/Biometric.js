import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

//where local files imported
import {dimens} from '../../utils';
import {SettingsSaveButton, SecurityPasswordSection} from '../../components';
import useStateContext from '../../store/useStateContext';

const PasswordSecurityBiometric = () => {
  const {state} = useStateContext();
  const {showModal, typeModal} = state;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <SecurityPasswordSection
          setUpBiometric={true}
          showModal={showModal}
          typeModal={typeModal}
          withoutSectionTitle={true}
        />
      </ScrollView>
      <SettingsSaveButton />
    </View>
  );
};

export default PasswordSecurityBiometric;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: dimens.default_16,
  },
});
