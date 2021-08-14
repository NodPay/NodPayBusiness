import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

//where local files imported
import {dimens} from '../../utils';
import {PersonalDetailsSection} from '../../components';

const EditProfileTabProfile = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <PersonalDetailsSection withoutSectionTitle={true} />
      </ScrollView>
    </View>
  );
};

export default EditProfileTabProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: dimens.default_16,
  },
});
