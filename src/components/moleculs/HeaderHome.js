import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

//where local file imported
import {Logo} from '../atoms';
import {dimens, fonts, color} from '../../utils';
import {Search, ProfileExample} from '../../assets';

const HeaderHome = ({onPressSearch, onPressProfile}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.imageWrapper, {paddingHorizontal: dimens.small}]}
        onPress={onPressSearch}>
        <Image source={Search} style={styles.image} />
        <Text style={styles.imageDescription}>Search</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Logo titleStyle={styles.logoStyle} />
      </View>

      <TouchableOpacity style={styles.imageWrapper} onPress={onPressProfile}>
        <Image source={ProfileExample} style={styles.image} />
        <Text style={styles.imageDescription}>My Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: dimens.supersmall,
  },
  image: {
    height: 37,
    resizeMode: 'contain',
  },
  imageDescription: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_12,
    color: color.btn_black,
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  logoStyle: {
    color: color.btn_black,
    fontSize: dimens.medium,
  },
});

export default HeaderHome;
