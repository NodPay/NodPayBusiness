import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {color, dimens, fonts} from '../../utils';
import {Internasional, CheckmarkWhite} from '../../assets';
/**
 * component for people on list.
 * @param  {string} photo   default: Image, if using base64 or link, change into {uri:link_image}
 * @param  {string} name    render item name
 * @param  {string} phone   render item phone number
 * @param  {func} onPress   trigger a function when photo pressed
 * @param  {bool} isInternasional render icon globe if it is true
 * @param  {bool} isSmall    custom style for small image
 * @param  {string} selectedMode  custom style for item when selected
 * @param  {bool} isSelected  if it is true, change style
 */
const PeopleItem = ({
  photo,
  name,
  phone,
  onPress,
  isInternasional,
  isSmall,
  selectedMode,
  isSelected,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selectedMode && isSelected ? {backgroundColor: color.purple} : {},
      ]}
      onPress={onPress}>
      <View style={styles.photoContainer}>
        <Image
          source={photo}
          style={[
            styles.photo,
            isSmall ? {width: dimens.large_40, height: dimens.large_40} : {},
          ]}
        />
        {isInternasional && (
          <Image source={Internasional} style={styles.icon} />
        )}
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.name}>{name}</Text>
        {!isSmall && <Text style={styles.phone}>{phone}</Text>}
      </View>
      {selectedMode && isSelected && (
        <View
          style={[
            styles.checkContainer,
            isSelected ? {backgroundColor: color.green} : {},
          ]}>
          {isSelected && (
            <Image source={CheckmarkWhite} style={styles.checkIcon} />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PeopleItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimens.small,
    paddingHorizontal: dimens.default_20,
  },
  photoContainer: {
    position: 'relative',
  },
  photo: {
    backgroundColor: color.grey,
    width: dimens.large_48,
    height: dimens.large_48,
    borderRadius: dimens.large_50,
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: dimens.medium,
    height: dimens.medium,
  },
  containerContent: {
    flex: 1,
    marginLeft: dimens.default_12,
  },
  name: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    lineHeight: dimens.default_20,
    color: color.btn_black,
  },
  phone: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_14,
    color: color.grey_3,
    marginTop: dimens.supersmall,
  },
  checkContainer: {
    width: dimens.large,
    height: dimens.large,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: dimens.small_6,
    borderWidth: 1,
    borderColor: '#CDCDCE',
  },
  checkIcon: {
    width: dimens.medium,
    height: dimens.medium,
    resizeMode: 'contain',
  },
});
