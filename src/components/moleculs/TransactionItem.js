import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

//where local file imported
import {dimens, fonts, color} from '../../utils';
import {DefaultPict} from '../../assets';
/**
 * @param  {string} name render text name
 * @param  {string} type render text type
 * @param  {number} pay render number of money
 * @param  {bool} isMinus is its true, change style for money amount
 */
const TransactionItem = ({name, type, pay, isMinus}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftWrap}>
        {/* default image profile from assets */}
        <Image
          source={DefaultPict}
          style={{height: 50, width: 50, borderRadius: 50}}
        />
        <View style={styles.detailWrap}>
          <Text style={styles.name}>{name || 'name'}</Text>
          <Text style={styles.type}>{type || 'type'}</Text>
        </View>
      </View>
      <View
        style={[
          styles.amountContainer,
          {
            backgroundColor: isMinus
              ? color.error_background
              : color.bg_success,
          },
        ]}>
        <Text
          style={[
            styles.amountText,
            {
              color: isMinus ? color.red : color.green,
            },
          ]}>
          {isMinus ? `- Rs ${pay}` : `+ ${pay || 0} Rs`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: dimens.default,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: dimens.default,
    borderRadius: dimens.default,
  },
  leftWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailWrap: {
    marginLeft: dimens.small,
  },
  name: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    lineHeight: dimens.default_18,
    color: color.btn_black,
    marginBottom: dimens.supersmall,
  },
  type: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_18,
    color: color.grey,
  },
  amountContainer: {
    borderRadius: dimens.default_12,
    backgroundColor: color.green3,
    paddingHorizontal: dimens.small,
    paddingVertical: dimens.supersmall,
  },
  amountText: {
    color: color.green,
    fontSize: dimens.default_12,
    lineHeight: dimens.default_14,
    fontFamily: fonts.sofia_regular,
  },
});

export default TransactionItem;
