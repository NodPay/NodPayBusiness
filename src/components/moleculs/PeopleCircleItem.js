import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {color, dimens, fonts} from '../../utils';
import {Internasional} from '../../assets';
/**
 * Person's photo in circle shape
 * @param  {imageRef} photo           person's image
 * @param  {string} name              person's name
 * @param  {func} onPress             Function called when circle is pressed
 * @param  {boolean} isInternasional  Is international relation
 */
const PeopleCircleItem = ({photo, name, onPress, isInternasional}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.photoContainer}>
        <Image source={photo} style={styles.photo} />
        {isInternasional && (
          <Image source={Internasional} style={styles.icon} />
        )}
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default PeopleCircleItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: dimens.default_12,
    paddingHorizontal: dimens.small,
  },
  photoContainer: {
    position: 'relative',
  },
  photo: {
    backgroundColor: color.grey,
    width: dimens.large_80,
    height: dimens.large_80,
    borderRadius: dimens.large_50,
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: dimens.medium,
    height: dimens.medium,
  },
  name: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    lineHeight: dimens.default_16,
    color: color.btn_black,
    marginTop: dimens.small,
  },
});
