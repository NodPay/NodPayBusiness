import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, dimens, fonts} from '../../utils';
/**
 * component that render section title for screen
 * @param  {string} title render text titke
 * @param  {string} subtitle render text subtitle
 * @param  {string} textColor=color.btn_black default -> default color is black
 * @param  {string} titleStyle custom style for title
 * @param  {string} subTitleStyle custom style for subtitle
 * @param  {string} containerStyle custom style for container
 * @param  {string} num='' render text num
 * @param  {string} type render component based on props given.
 */
const SectionTitle = ({
  title,
  subtitle,
  textColor = color.btn_black,
  titleStyle,
  subTitleStyle,
  containerStyle,
  num = '',
  type,
}) => {
  if (type == 'modal') {
    return (
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{title}</Text>
        <Text style={styles.modalSubtitle}>{subtitle}</Text>
      </View>
    );
  }

  if (type == 'auth') {
    return (
      <>
        <Text style={styles.authSubtitle}>{title}</Text>
        {subtitle && <Text style={styles.authDescription}>{subtitle}</Text>}
      </>
    );
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, {color: textColor}, titleStyle]}>
        {title}
      </Text>
      <Text style={[styles.subtitle, {color: textColor}, subTitleStyle]}>
        {subtitle}
        <Text style={[styles.subtitle, {fontFamily: fonts.sofia_bold}]}>
          {` ${num}`}
        </Text>
      </Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: dimens.default_16,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_22,
    color: color.btn_black,
  },
  subtitle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    lineHeight: dimens.medium,
    color: color.btn_black,
  },

  // Auth
  authSubtitle: {
    fontSize: dimens.default_18,
    fontFamily: fonts.noto_bold,
    marginTop: dimens.small,
    lineHeight: dimens.large_28,
  },
  authDescription: {
    fontSize: dimens.default,
    fontFamily: fonts.sofia_medium,
    color: '#9A9B9E',
    lineHeight: dimens.default_20,
  },

  // Modal
  modalContainer: {
    backgroundColor: 'white',
    marginTop: dimens.default,
  },
  modalTitle: {
    color: color.btn_black,
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_22,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    color: color.modal_subtitle,
    textAlign: 'center',
    marginTop: dimens.supersmall,
  },
});
