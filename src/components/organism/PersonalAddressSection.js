import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

// where local files imported
import {setFormEditProfile} from '../../store/action';
import useStateContext from '../../store/useStateContext';
import {dimens} from '../../utils';
import {Gap} from '../atoms';
import {InputText} from '../moleculs';

const PersonalAddressSection = ({}) => {
  const {state, dispatch} = useStateContext();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
      <Gap t={dimens.default_16} />
      <InputText
        label="Zip Code"
        value={state.formEditProfile.zipCode}
        onChangeText={value => dispatch(setFormEditProfile('zipCode', value))}
      />
      <InputText
        label="Country"
        value={state.formEditProfile.country}
        onChangeText={value => dispatch(setFormEditProfile('country', value))}
      />
      <InputText
        label="State"
        value={state.formEditProfile.state}
        onChangeText={value => dispatch(setFormEditProfile('state', value))}
      />
      <InputText
        label="City"
        value={state.formEditProfile.city}
        onChangeText={value => dispatch(setFormEditProfile('city', value))}
      />
      <InputText
        label="Detail Address"
        value={state.formEditProfile.address}
        onChangeText={value => dispatch(setFormEditProfile('address', value))}
      />
      <Gap b={dimens.default_16} />
    </ScrollView>
  );
};

export default PersonalAddressSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
