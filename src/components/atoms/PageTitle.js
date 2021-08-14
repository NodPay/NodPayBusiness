import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {
  LeftArrow,
  BlackLeftArrow,
  WhiteLeftArrow,
  CloseRed,
  QRScan,
  PencilEditWhite,
  ThreeDotsVertical,
  ThreeDotsBlack,
} from '../../assets';
import {color, dimens, fonts} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

/**
 * PageTitle component for make page of title screen with any variant, usually will be place on header
 * @param   {string}  title           Title text of page/screen on header
 * @param   {object}  containerStyle  For custom container style
 * @param   {object}  titleStyle      For custom title style
 * @param   {bool}    isBlackArrow    For back icon with black state
 * @param   {bool}    isWhiteArrow    For back icon with white state
 * @param   {bool}    isCloseMode     For back icon with close state
 * @param   {func}    onPressClose    Triggered when back icon with close state onclick
 * @param   {func}    onPressBack     Triggered when back icon with black/white state onclick
 * @param   {bool}    isRightQR       For condition show QR on the right
 * @param   {object}  cancel          For custom cancel style
 * @param   {bool}    isCancel        For condition cancel state
 * @param   {bool}    isProfile       For condition profile state
 * @param   {bool}    isContact       For condition is page title used on contact screen
 * @param   {bool}    isOtherProfile  For condition other profile state
 * @param   {bool}    isNoBackButton  For condition no back button state
 * @param   {func}    onPressRight    Triggered when right icon onclick
 * @param   {func}    onEdit          Triggered when isProfile=true or isOtherProfile=true, and onclick
 * @param   {func}    editTag          Triggered when isContact = true, onClick
 */
const PageTitle = ({
  title,
  containerStyle,
  titleStyle,
  isBlackArrow,
  isWhiteArrow,
  isCloseMode,
  onPressClose,
  onPressBack,
  isRightQR,
  onPressRight,
  cancel,
  isCancel,
  isProfile,
  onEdit,
  isOtherProfile,
  isNoBackButton,
  isContact,
  editTag,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, containerStyle]}>
      {!isNoBackButton && isCloseMode ? (
        <TouchableOpacity
          onPress={onPressClose}
          style={{position: 'absolute', left: dimens.default_16}}>
          <Image source={CloseRed} style={[styles.close_icon, cancel]} />
          {isCancel && (
            <Text
              style={{
                fontFamily: fonts.noto_bold,
                fontSize: dimens.default_12,
                textAlign: 'center',
              }}>
              Cancel
            </Text>
          )}
        </TouchableOpacity>
      ) : (
        <>
          {isBlackArrow && (
            <TouchableOpacity
              onPress={() =>
                onPressBack ? onPressBack() : navigation.goBack()
              }
              style={styles.left_arrow}>
              {isBlackArrow ? (
                <Image source={BlackLeftArrow} style={styles.left_arrow_icon} />
              ) : (
                <Image source={LeftArrow} style={styles.left_arrow_icon} />
              )}
            </TouchableOpacity>
          )}
          {isWhiteArrow && (
            <TouchableOpacity
              onPress={() =>
                onPressBack ? onPressBack() : navigation.goBack()
              }
              style={styles.left_arrow}>
              {isWhiteArrow ? (
                <Image source={WhiteLeftArrow} style={styles.left_arrow_icon} />
              ) : (
                <Image source={LeftArrow} style={styles.left_arrow_icon} />
              )}
            </TouchableOpacity>
          )}
        </>
      )}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {isRightQR && (
        <TouchableOpacity onPress={onPressRight} style={styles.containerQR}>
          <Image source={QRScan} style={styles.iconQR} />
          <Text style={styles.textQR}>QR Code</Text>
        </TouchableOpacity>
      )}

      {/* Edit Profile */}
      {isProfile && (
        <TouchableOpacity onPress={onEdit} style={styles.containerQR}>
          <Image
            source={PencilEditWhite}
            style={{height: 40, width: 40, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      )}

      {/* Other User Profile */}
      {isOtherProfile && (
        <TouchableOpacity onPress={onEdit} style={styles.containerQR}>
          <Image
            source={isBlackArrow ? ThreeDotsBlack : ThreeDotsBlack}
            style={{height: 24, width: 24, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      )}

      {/* isContact */}
      {isContact && (
        <Menu style={styles.containerQR}>
          <MenuTrigger>
            <Image source={ThreeDotsBlack} style={{height: 24, width: 24}} />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={editTag}>
              <Text
                style={[styles.textQR, {fontSize: dimens.default, padding: 8}]}>
                Edit Tag
              </Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      )}
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: dimens.default_16,
    alignItems: 'center',
  },
  close_icon: {
    height: dimens.large_40,
    width: dimens.large_40,
    resizeMode: 'cover',
  },
  left_arrow: {
    padding: dimens.default_16,
    position: 'absolute',
    left: 0,
  },
  left_arrow_icon: {
    width: dimens.medium,
    height: dimens.medium,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    color: 'white',
  },
  containerQR: {
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    paddingTop: dimens.supersmall,
    paddingRight: dimens.default_14,
  },
  iconQR: {
    width: dimens.medium,
    height: dimens.medium,
    resizeMode: 'cover',
  },
  textQR: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_12,
    lineHeight: dimens.default_12,
    color: color.btn_black,
    marginTop: dimens.supersmall,
  },
});
