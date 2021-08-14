import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';

// where local files imported
import {Gap} from '../atoms';
import {color, dimens} from '../../utils';
import {InputText, SectionTitle, SelectAddressList} from '../moleculs';
import {setFormRegisterBusiness} from '../../store/action';

const ResidentialAddress = () => {
  // handle input form
  const [postalCode, setPostalCode] = useState('8989');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SectionTitle
        containerStyle={{
          padding: 0,
          // paddingHorizontal: dimens.default_16,
        }}
        title="Where Do You Live?"
        titleStyle={{color: 'black', fontSize: dimens.default_22}}
        subtitle="Enter your postal code and select your address"
        subTitleStyle={{
          color: color.grey,
          fontSize: dimens.default_16,
        }}
      />
      <Gap b={-25} />
      <InputText
        value={postalCode}
        onChangeText={value => {
          setPostalCode(value);
          dispatch(setFormRegister('address', value));
          dispatch(setFormRegisterBusiness('address', value));
        }}
        keyboardType="number-pad"
      />
      <Gap t={dimens.default_16} />
      <SelectAddressList />
      <Gap b={dimens.default_16} />
    </ScrollView>
  );
};

export default ResidentialAddress;

const styles = StyleSheet.create({});
