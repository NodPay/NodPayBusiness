import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {Gap, InputText} from '../../components';
import {color, dimens, fonts} from '../../utils';
import useStateContext from '../../store/useStateContext';
import {setFormRequestPhysicalCard} from '../../store/action';

// First step of Request Physical Card flows
const Name = () => {
  const {state, dispatch} = useStateContext();
  const {firstName, lastName} = state;

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
        onChangeText={val => {
          dispatch(setFormRequestPhysicalCard('firstName', val));
        }}
      />
      {/* <ErrorMessage message="Email field is empty" /> */}

      <InputText
        label="Last Name"
        value={lastName}
        onChangeText={val => {
          dispatch(setFormRequestPhysicalCard('lastName', val));
        }}
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
