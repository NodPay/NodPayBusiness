import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

//where local file imported
import {dimens, fonts, color} from '../../utils';
import {ProfileExample, Time} from '../../assets';
/**
 * Item of customer lists
 * @param  {string} message       text message of customer
 * @param  {string} time          message time
 * @param  {func} onPressPhoto    Function called when photo is pressed
 * @param  {boolean} noRightTime  should show time or not
 * @param  {boolean} isPaid       is customer already paid
 */
const CustomerItem = ({
  message,
  time,
  onPressPhoto, //added for view other user profile
  noRightTime, // employee detail
  isPaid,
}) => {
  return (
    <View style={{marginTop: dimens.default, flexDirection: 'row'}}>
      {/* Left part (profile photo and time) */}
      <View style={{width: 65}}>
        <View style={{width: 50}}>
          <TouchableOpacity onPress={onPressPhoto}>
            <Image
              source={ProfileExample}
              style={{height: 50, width: 50, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <View style={styles.timeContainer}>
            <Image source={Time} style={styles.clockIcon} />
            <Text style={{fontSize: dimens.default_12, color: color.grey_3}}>
              1m
            </Text>
          </View>
        </View>
      </View>

      {/* Right (Informations inside white box) */}
      <View style={styles.rightContainer}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.title}>
              Maimunah
              <Text style={styles.middleTitle}> paid</Text> Abdullah
            </Text>
          </View>

          <Text style={styles.message}>{message}</Text>
        </View>

        <View style={{justifyContent: 'center'}}>
          {!noRightTime && (
            <Text
              style={[styles.publicityText, {marginBottom: dimens.supersmall}]}>
              {time}
            </Text>
          )}
          <View
            style={{
              padding: 6,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isPaid
                ? color.bg_success
                : color.bg_red_error_msg,
            }}>
            <Text
              style={[
                styles.publicityText,
                {
                  color: isPaid ? color.green : color.red,
                  fontFamily: fonts.sofia_bold,
                },
              ]}>
              {isPaid ? '+ 750 rs' : '- 500 rs'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clockIcon: {
    height: 18,
    width: 18,
    marginRight: dimens.supersmall,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimens.small_10,
  },
  rightContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: dimens.default,
    padding: dimens.default_14,
  },
  title: {
    color: color.btn_title_white,
    fontSize: dimens.default_14,
    fontFamily: fonts.sofia_bold,
    fontWeight: '700',
    flex: 1,
  },
  middleTitle: {
    fontFamily: fonts.sofia_regular,
    color: color.btn_title_white,
    fontWeight: '400',
  },
  publicityIcon: {
    height: 18,
    width: 18,
    marginRight: dimens.supersmall,
  },
  publicityText: {
    color: color.grey_3,
    fontSize: dimens.default_12,
    fontFamily: fonts.sofia_regular,
  },
  message: {
    color: color.btn_black,
    fontSize: dimens.default,
    fontFamily: fonts.sofia_regular,
    marginTop: dimens.small,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: dimens.default,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    height: 18,
    width: 18,
    marginRight: dimens.small,
  },
});

export default CustomerItem;
