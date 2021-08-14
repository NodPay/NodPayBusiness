import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

//where local file imported
import {dimens, fonts, color} from '../../utils';
import {Ellipsis} from '../../assets';

/**
 * Item of Bank Account List that will be looped
 * @param  {imageRef} logo          Bank logo
 * @param  {string} routingNumber   Account routing number
 * @param  {string} accountNumber   Account identifier/specific number
 * @param  {string} accountAmount   Money amount of the account
 * @param  {component} rightButton  React component in the right side
 */

const BankAccountItem = ({
  logo,
  routingNumber,
  accountNumber,
  accountAmount,
  rightButton,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={{width: 46, resizeMode: 'contain'}} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.routingNumber}>{routingNumber}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Ellipsis} style={{width: 34, resizeMode: 'contain'}} />
          <Text style={styles.accountNumber}>{accountNumber}</Text>
        </View>
        <Text style={styles.accountAmount}>
          Rs <Text style={{color: color.green}}>{accountAmount}</Text>
        </Text>
      </View>
      {rightButton}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: dimens.medium,
  },
  logoContainer: {
    backgroundColor: 'white',
    borderRadius: dimens.default,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    marginLeft: dimens.default,
  },
  routingNumber: {
    color: color.btn_black,
    fontSize: dimens.default,
    fontFamily: fonts.sofia_regular,
    fontWeight: '400',
  },
  accountNumber: {
    color: color.grey_8,
    fontSize: dimens.default_12,
    fontFamily: fonts.sofia_regular,
    marginLeft: dimens.small,
    marginBottom: dimens.verysmall,
  },
  accountAmount: {
    color: color.green2,
    fontSize: dimens.default_14,
    fontFamily: fonts.sofia_regular,
  },
});

export default BankAccountItem;
