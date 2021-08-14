import React from 'react';
import {StyleSheet, TextInput as InputText} from 'react-native';
import {color, dimens, fonts} from '../../utils';

/**
 * TextInput component for text input field of form
 * @param   {string}    value                   Value text
 * @param   {string}    placeholder             Placeholder text
 * @param   {string}    placeholderTextColor    For custom placeholder text color
 * @param   {func}      onChangeText            Triggered when text input onchange
 * @param   {bool}      secureTextEntry         For condition text input as a password or not
 * @param   {string}    autoCapitalize          For type of auto capitalize like none, words, etc
 * @param   {string}    keyboardType            For type of keyboard like numeric, general, etc
 * @param   {bool}      editable                For condition editable state
 * @param   {object}    style                   For custom container style
 * @param   {object}    additionalInputProps    For additional props of text input
 * @param   {func}      onFocus                 Triggered when text input onfocus
 * @param   {func}      onBlur                  Triggered when text input onblur
 * @param   {func}      onSubmitEditing         Triggered when text input onsubmitediting of keyboard
 */
const TextInput = ({
  value,
  placeholder,
  placeholderTextColor,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
  editable,
  style,
  additionalInputProps,
  onFocus,
  onBlur,
  onSubmitEditing,
}) => {
  return (
    <InputText
      autoCapitalize={autoCapitalize}
      autoCompleteType="off"
      placeholderTextColor={placeholderTextColor || color.btn_black}
      placeholder={placeholder}
      style={[styles.inputText, style]}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      editable={editable}
      onFocus={onFocus}
      onBlur={onBlur}
      onSubmitEditing={onSubmitEditing}
      {...additionalInputProps}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputText: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    fontWeight: 'normal',
    color: color.btn_black,
    backgroundColor: 'white',
    marginTop: dimens.small,
    paddingHorizontal: dimens.default,
    borderRadius: dimens.large_50,
    height: dimens.large_50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    // elevation: 1,
  },
});
