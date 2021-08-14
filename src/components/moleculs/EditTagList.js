import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

// local
import {color, dimens, fonts} from '../../utils';
import {Select, Selected} from '../../assets';
/**
 * Component to edit tag list in Contacts screen
 * @param  {} onSelectTag   When tag is selected
 * @param  {} title         Tag name
 * @param  {} selected      is tag selected by user
 */
const EditTagList = ({onSelectTag, title, selected}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: selected ? color.purple : 'white'},
      ]}
      onPress={onSelectTag}>
      <Text style={styles.title}>{title || 'title'}</Text>
      <Image source={selected ? Selected : Select} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default EditTagList;

const styles = StyleSheet.create({
  container: {
    padding: dimens.default,
    backgroundColor: 'white',
    paddingVertical: dimens.default + 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fonts.sofia_regular,
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
