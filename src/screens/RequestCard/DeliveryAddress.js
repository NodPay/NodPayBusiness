import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Gap,
  InputCheck,
  InputText,
  SelectAddressList,
} from '../../components';
import {color, dimens, fonts} from '../../utils';

// First step of Request Physical Card flows
const DeliveryAddress = () => {
  const [postalCode, setPostalCode] = useState('');
  const [isSelectNewAddress, setIsSelectNewAddress] = useState(false);
  const [isNewAddress, setIsNewAddress] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.description}>
        Where would you like your card get mailed?
      </Text>

      <View style={styles.contentContainer}>
        <InputCheck
          label="My Current Address"
          labelStyle={styles.contentTitle}
          value={isSelectNewAddress}
          onChange={setIsSelectNewAddress}
        />
        <Text style={styles.description}>2049 Center Street</Text>
        <Text style={styles.generalAddress}>Albany, OR, Oregon, 8989</Text>
      </View>

      {/* Add new address button */}
      {!isNewAddress && (
        <Button
          onPress={() => {
            setIsNewAddress(true);
          }}
          title="+ Add New Address"
          btnStyle={{backgroundColor: 'white'}}
          titleStyle={{color: color.btn_title_white}}
        />
      )}

      {/* Write new address */}
      {isNewAddress && (
        <>
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>New Address</Text>

            <InputText
              value={postalCode}
              containerStyle={{marginTop: 0}}
              inputStyle={{backgroundColor: color.grey_7}}
              placeholder="Enter your new address"
              placeholderTextColor={color.grey_2}
              onChangeText={value => {
                setPostalCode(value);
                //   dispatch(setFormRegister('address', value));
                //   dispatch(setFormRegisterBusiness('address', value));
              }}
            />
          </View>

          <Gap t={dimens.default_16} />

          <SelectAddressList />
        </>
      )}
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
  generalAddress: {
    color: color.form_label,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
  },
  contentContainer: {
    backgroundColor: 'white',
    padding: dimens.default,
    marginTop: dimens.default,
    borderRadius: dimens.default,
  },
  contentTitle: {
    color: color.btn_black,
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
  },
});

export default DeliveryAddress;
