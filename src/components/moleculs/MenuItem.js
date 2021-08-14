import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Switch} from 'react-native-switch';
import {color, dimens, fonts} from '../../utils';
import {Right} from '../../assets';
/**
 * Menu option
 * @param  {imageRef} icon            Icon reference
 * @param  {number} iconRadius        Size of border radius of icon
 * @param  {string} iconBackground    icon background color
 * @param  {boolean} iconIsShadow     does icon have shadow
 * @param  {number} iconSize          size of icon
 * @param  {string} title             menu title
 * @param  {object} titleStyle        custom menu title style
 * @param  {string} subtitle          menu subtitle
 * @param  {react componenet} subtitleComponent   custom menu subtitle
 * @param  {react componenet} subtitle2Component  other custom menu subtitle
 * @param  {string} info              Menu information
 * @param  {boolean} withoutArrow     Is menu with arrow
 * @param  {imageRef} rightIcon       Menu's right icon
 * @param  {function} onPress         When menu is pressed
 * @param  {object} toggleSwitch      toggle value and onchange function
 */
const MenuItem = ({
  icon,
  iconRadius,
  iconBackground,
  iconIsShadow,
  iconSize,
  title,
  titleStyle,
  subtitle,
  subtitleComponent,
  subtitle2Component,
  info,
  withoutArrow,
  rightIcon,
  onPress,
  toggleSwitch,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          iconIsShadow
            ? {
                backgroundColor: iconBackground || color.purple,
                borderRadius: iconRadius || dimens.medium,
                elevation: 2,
                shadowRadius: 5,
                shadowOffset: {height: 2},
                shadowOpacity: 0.07,
              }
            : {
                backgroundColor: iconBackground || color.purple,
                borderRadius: iconRadius || dimens.medium,
              },
        ]}>
        <Image
          source={icon}
          style={[
            styles.icon,
            {
              width: iconSize || dimens.medium,
              height: iconSize || dimens.medium,
            },
          ]}
        />
      </View>
      <View style={styles.containerContent}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {subtitleComponent && subtitleComponent}
        {subtitle2Component && subtitle2Component}
      </View>
      <View style={styles.containerRight}>
        {info && <Text style={styles.info}>{info}</Text>}
        {!withoutArrow && (
          <Image source={rightIcon || Right} style={styles.iconRight} />
        )}
        {toggleSwitch && (
          <Switch
            value={toggleSwitch.value}
            onValueChange={toggleSwitch.onChange}
            activeText=""
            inActiveText=""
            circleBorderWidth={0}
            backgroundActive="#6FBC4B"
            backgroundInactive="#E6E6E7"
            circleActiveColor="#FFFFFF"
            circleInActiveColor="#FFFFFF"
            circleSize={28}
            barHeight={30}
            switchLeftPx={4}
            switchRightPx={4}
            switchWidthMultiplier={1.8}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimens.default_16,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: dimens.large_48,
    height: dimens.large_48,
    marginRight: dimens.default_16,
  },
  icon: {
    resizeMode: 'contain',
  },
  containerContent: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    lineHeight: dimens.default_18,
    color: color.btn_black,
    marginBottom: dimens.supersmall,
  },
  subtitle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_18,
    color: color.btn_title_white,
  },
  containerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.medium,
    lineHeight: dimens.default_18,
    color: color.drawerActive,
    marginBottom: -dimens.small,
    paddingVertical: dimens.supersmall,
  },
  iconRight: {
    width: dimens.medium,
    height: dimens.medium,
    resizeMode: 'cover',
    marginLeft: dimens.small,
  },
});
