import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  ErrorMessage,
  Gap,
  InputCheck,
  InputText,
  SelectAddressList,
} from '../../components';
import {color, dimens, fonts} from '../../utils';

// First step of Request Physical Card flows
const Name = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.description}>
        Confirm your name, this name will be printed on your physical card
      </Text>

      <InputText
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      {/* <ErrorMessage message="Email field is empty" /> */}

      <InputText
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <Gap b={dimens.default_16} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  description: {
    color: color.btn_black,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
  },
  contentTitle: {
    color: color.btn_black,
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
  },
});

export default Name;
