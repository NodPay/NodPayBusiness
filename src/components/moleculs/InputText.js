import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';

//where local file imported
import {FormLabel, TextInput} from '../atoms';
import {color, dimens, fonts} from '../../utils';
/**
 * Flexible input text
 * @param  {object} containerStyle          style object for input container
 * @param  {string} label                   input label
 * @param  {string} value                   input value
 * @param  {function} onChangeText          When value is changed
 * @param  {string} placeholder             Input placeholder
 * @param  {string} placeholderTextColor    input placeholderTextColor
 * @param  {object} labelStyle              style object for input label
 * @param  {string} keyboardType            Type of keyboard props
 * @param  {boolean} editable               is input text editable or disabled?
 * @param  {object} inputStyle              style object for input itself
 * @param  {imageRef} iconRight             icon at the right of input
 * @param  {function} onPressRight          When right icon is pressed
 * @param  {object} additionalInputProps    other input props if necessary
 * @param  {function} onFocus               When input is focused
 * @param  {function} onBlur                When input is unfocused
 * @param  {function} onSubmitEditing       When input submit is submitted
 */
const InputText = ({
  containerStyle,
  label,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  labelStyle,
  keyboardType,
  editable,
  inputStyle,
  iconRight,
  onPressRight,
  additionalInputProps,
  onFocus,
  onBlur,
  onSubmitEditing,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label != '' && <FormLabel label={label} labelStyle={labelStyle} />}
      <TextInput
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        editable={editable}
        style={inputStyle}
        additionalInputProps={additionalInputProps}
        onFocus={onFocus}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity onPress={onPressRight} style={styles.containerRight}>
        <Image source={iconRight} style={styles.iconRight} />
      </TouchableOpacity>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    marginTop: dimens.medium,
  },
  containerRight: {
    position: 'absolute',
    right: dimens.default_18,
    top: dimens.default_14,
  },
  iconRight: {
    width: dimens.medium,
    height: dimens.medium,
    resizeMode: 'cover',
  },
});
