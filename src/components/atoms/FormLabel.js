import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {color, dimens, fonts} from '../../utils';

/**
 * ErrorMessage component for show red text of error message inside red box
 * @param   {string}   message     Content text of error message
 * @param   {object}   textStyle   Custom style of content text
 */
const FormLabel = ({labelStyle, label}) => {
  return <Text style={[styles.defaultLabelStyle, labelStyle]}>{label}</Text>;
};

export default FormLabel;

const styles = StyleSheet.create({
  defaultLabelStyle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.form_label,
  },
});
