import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, dimens, fonts} from '../../utils';

/**
 * LinkAction component for link text and link action, like on Register and Login for Forgot Password action
 * @param   {string}  text              Label text general
 * @param   {object}  textStyle         For custom label text style
 * @param   {string}  actionText        Action text clickable
 * @param   {object}  actionTextStyle   For custom action text style
 * @param   {func}    onPress           Triggered when action text onclick
 */
const LinkAction = ({
  text,
  textStyle,
  actionText,
  actionTextStyle,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <Text style={[styles.action_text, actionTextStyle]} onPress={onPress}>
        {actionText}
      </Text>
    </View>
  );
};

export default LinkAction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_14,
    color: color.btn_title_white,
    marginRight: dimens.supersmall,
  },
  action_text: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_14,
    color: color.bg_color,
  },
});
