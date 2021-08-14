import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {color, dimens, fonts} from '../../utils';

/**
 * InfoMessage component for information message inside box with optional icon
 * @param   {string}   message  Content text of info message
 * @param   {source}   icon     Source image of icon info
 */
const InfoMessage = ({message, icon}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Image source={icon} style={{height: 30, resizeMode: 'contain'}} />
      )}
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default InfoMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.purple,
    paddingVertical: dimens.default_14,
    paddingHorizontal: dimens.default,
    borderRadius: dimens.default,
    marginTop: dimens.default,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
    color: color.loading,
    flex: 1,
    marginLeft: dimens.default_12,
    lineHeight: dimens.default_18,
  },
});
