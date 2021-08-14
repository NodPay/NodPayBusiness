import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

//where local files imported
import {dimens} from '../../utils';
import {PersonalAddressSection} from '../../components';

const EditProfileTabAddress = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <PersonalAddressSection withoutSectionTitle={true} />
      </ScrollView>
    </View>
  );
};

export default EditProfileTabAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: dimens.default_16,
  },
});
