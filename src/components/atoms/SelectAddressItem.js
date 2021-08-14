import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

//where local files imported
import {GPS, Select, Selected} from '../../assets';
import {color, dimens, fonts} from '../../utils';

/**
 * SelectAddressItem component for item of select address
 * @param   {bool}    selected    For condition selected state
 * @param   {func}    onPress     Triggered when item onclick
 * @param   {string}  title       Title text
 * @param   {string}  subtitle    Subtitle text
 */
const SelectAddressItem = ({selected, onPress, title = '', subtitle = ''}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Image source={GPS} style={styles.icon} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image source={selected ? Selected : Select} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default SelectAddressItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    borderRadius: dimens.default_12,
  },
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    marginLeft: dimens.default_16,
  },
  icon: {
    height: 24,
    width: 24,
  },
  title: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_black,
  },
  subtitle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    color: color.grey,
  },
});
