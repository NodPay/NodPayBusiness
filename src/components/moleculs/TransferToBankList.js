import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import {CitiBank, Check} from '../../assets';
/**
 * component that render a list of bank
 * @param  {bool} selected if its true, change a background color
 * @param  {string} logo render an image
 * @param  {string} name render text name
 * @param  {number} number render text number
 * @param  {number} wallet render amount of wallet / money
 * @param  {func} onPress trigger a function when pressed
 */
const TransferToBankList = ({
  selected,
  logo,
  name,
  number,
  wallet,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: selected ? color.purple : 'transparent'},
      ]}>
      <View style={styles.itemWrapper}>
        <View style={styles.imageWrapper}>
          <Image source={logo} style={styles.img} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.bankName}>{name}</Text>
          <Text style={styles.bankNumber}>
            {'\u2022'}
            {'\u2022'}
            {'\u2022'}
            {'\u2022'} {number}
          </Text>
          <Text style={styles.bankWallet}>
            <Text style={{color: '#C5E4B7'}}>Rs</Text>
            {wallet}
          </Text>
        </View>
      </View>
      {selected && (
        <Image
          source={Check}
          style={{
            height: 32,
            width: 32,
            resizeMode: 'contain',
            marginRight: dimens.default,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default TransferToBankList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingVertical: dimens.default,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: dimens.default,
  },
  imageWrapper: {
    height: 80,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
  },
  img: {
    // height: 132,
    width: 75,
    resizeMode: 'contain',
  },
  textWrapper: {
    paddingLeft: dimens.default,
  },
  bankName: {
    fontFamily: fonts.sofia_bold,
    fontSize: 19,
    color: color.btn_black,
  },
  bankNumber: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
    color: 'lightgray',
  },
  bankWallet: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_14,
    color: color.green,
  },
});
