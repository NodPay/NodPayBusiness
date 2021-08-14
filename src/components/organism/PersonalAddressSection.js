import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

// where local files imported
import {dimens} from '../../utils';
import {Gap} from '../atoms';
import {InputText, InputOption} from '../moleculs';

const PersonalAddressSection = ({}) => {
  // handle input form
  const [user, setUser] = useState({
    zipCode: '',
    country: '',
    state: '',
    city: '',
    address: '',
  });

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
      <Gap t={dimens.default_16} />
      <InputText
        label="Zip Code"
        value={user.zipCode}
        onChangeText={value => setUser({...user, zipCode: value})}
      />
      <InputText
        label="Country"
        value={user.country}
        onChangeText={value => setUser({...user, country: value})}
      />
      <InputText
        label="State"
        value={user.state}
        onChangeText={value => setUser({...user, state: value})}
      />
      <InputText
        label="City"
        value={user.city}
        onChangeText={value => setUser({...user, city: value})}
      />
      <InputText
        label="Detail Address"
        value={user.address}
        onChangeText={value => setUser({...user, address: value})}
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
