import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import {CheckmarkWhite} from '../../assets';

const InputCheck = ({label, labelStyle, value, onChange}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => onChange(!value)}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View
        style={[
          styles.check,
          value === true ? {backgroundColor: color.green} : {},
        ]}>
        {value === true && (
          <Image source={CheckmarkWhite} style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default InputCheck;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: dimens.small,
  },
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_black,
  },
  check: {
    width: dimens.large,
    height: dimens.large,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: dimens.small_6,
    borderWidth: 1,
    borderColor: '#CDCDCE',
  },
  icon: {
    width: dimens.medium,
    height: dimens.medium,
    resizeMode: 'contain',
  },
});
