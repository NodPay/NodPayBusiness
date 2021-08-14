import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {color, dimens, fonts} from '../../utils';
import {InviteCompleted} from '../../assets';
import {Button} from '../../components';
/**
 * @param  {string} backgroundIcon  background color of icon
 * @param  {string} name            person name
 * @param  {number} step            Current step
 * @param  {function} onPressRight  When right button is pressed
 */
const InvitePeopleItem = ({backgroundIcon, name, step, onPressRight}) => {
  const stepInvite = ['Installed', 'Verified', 'Completed!'];
  const isCompleted = step === 3;

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, {backgroundColor: backgroundIcon}]}>
        <Text style={styles.iconText}>{name.substring(0, 1)}</Text>
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.containerStep}>
          {[...new Array(3)].map((item, index) => (
            <View key={index} style={styles.step}>
              <View
                style={
                  step > index ? styles.stepDotActive : styles.stepDotInactive
                }
              />
            </View>
          ))}
          <Text style={styles.stepText}>{stepInvite[step - 1]}</Text>
        </View>
      </View>
      <View style={styles.containerRight}>
        {isCompleted ? (
          <Image source={InviteCompleted} style={styles.iconRight} />
        ) : (
          <Button
            onPress={onPressRight}
            title="Nudge"
            btnStyle={{
              backgroundColor: color.btn_black,
              paddingHorizontal: dimens.default_20,
            }}
            titleStyle={{
              color: color.btn_white_2,
              fontFamily: fonts.sofia_bold,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default InvitePeopleItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimens.default_12,
  },
  iconContainer: {
    backgroundColor: color.grey,
    justifyContent: 'center',
    alignItems: 'center',
    width: dimens.large_40,
    height: dimens.large_40,
    borderRadius: dimens.large_50,
    marginRight: dimens.default_16,
  },
  iconText: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    lineHeight: dimens.default_16,
    color: 'white',
  },
  containerContent: {
    flex: 1,
  },
  name: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    lineHeight: dimens.default_18,
    color: color.btn_black,
    marginBottom: dimens.supersmall,
  },
  containerStep: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  step: {
    paddingRight: dimens.small,
  },
  stepDotInactive: {
    width: dimens.small,
    height: dimens.small,
    backgroundColor: color.grey_6,
    borderRadius: dimens.large_50,
  },
  stepDotActive: {
    width: dimens.small,
    height: dimens.small,
    backgroundColor: color.green,
    borderRadius: dimens.large_50,
  },
  stepText: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_18,
    color: color.btn_title_white,
    marginLeft: dimens.supersmall,
  },
  containerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconRight: {
    width: dimens.large,
    height: dimens.large,
    resizeMode: 'cover',
  },
});
