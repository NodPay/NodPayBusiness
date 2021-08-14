import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Loading} from '.';
import {color, dimens, fonts} from '../../utils';

/**
 * Button component for any component style with icon or without icon
 * @param   {func}    onPress     Triggered when button onclick/onpress
 * @param   {object}  btnStyle    For custom button style
 * @param   {object}  iconStyle   For custom icon style
 * @param   {object}  titleStyle  For custom text style
 * @param   {string}  title       For content text button
 * @param   {source}  iconLeft    For icon on left as image source
 * @param   {source}  iconRight   For icon on right as image source
 * @param   {bool}    disabled    For disabled condition state
 * @param   {bool}    isLoading   For on loading state
 */
const Button = ({
  onPress,
  btnStyle,
  iconStyle,
  titleStyle,
  title,
  iconLeft,
  iconRight,
  disabled,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.btn, btnStyle]}>
      {iconLeft && (
        <Image style={[styles.btn_icon, iconStyle]} source={iconLeft} />
      )}
      {isLoading ? (
        <Loading size="small" color="white" />
      ) : (
        <Text style={[styles.btn_title, titleStyle]}>{title}</Text>
      )}

      {iconRight && <Image source={iconRight} style={styles.iconRight} />}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    borderRadius: dimens.default_16,
    height: dimens.large_48,
    backgroundColor: color.btn_white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_icon: {
    width: dimens.medium,
    height: dimens.medium,
    marginRight: dimens.small,
  },
  btn_title: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_title_white,
  },
  leftIcon: {
    position: 'absolute',
    left: dimens.default_16,
  },
  iconRight: {
    position: 'absolute',
    right: dimens.default_16,
  },
});
