import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//where local file imported
import {color, dimens, fonts} from '../../utils';
import {Button} from '../../components';
import {Time} from '../../assets';
/**
 * @param  {string} photo  render profile image, default photo from asset,
 * @param  {string} name render profile name
 * @param  {bool} action check profile action, like request or pay
 * @param  {string} info render info text
 * @param  {string} date render date
 * @param  {bool} type check if it pay or request
 * @param  {number} amount render amount of money
 * @param  {bool} isRequested if its true, render button
 * @param  {string} containerStyle custom style
 */
const NotifActivityItem = ({
  photo,
  name,
  action,
  info,
  date,
  type,
  amount,
  isRequested,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.containerLeft}>
        {photo && <Image source={photo} style={styles.photo} />}
        <View style={styles.containerDate}>
          <Image source={Time} style={styles.iconDate} />
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.containerRight}>
        <Text style={styles.description}>
          <Text style={styles.name}>{name}</Text> {action}
        </Text>
        {info !== '' && <Text style={styles.info}>{info}</Text>}
        {isRequested ? (
          <View style={styles.containerButton}>
            <Button
              title="Remind"
              btnStyle={{
                backgroundColor: 'white',
                marginBottom: dimens.default_16,
                borderColor: color.btn_white,
                borderWidth: 1,
                flex: 1,
              }}
              titleStyle={{
                fontFamily: fonts.sofia_bold,
                color: color.btn_title_white,
              }}
              onPress={() => {}}
            />
          </View>
        ) : (
          <View style={styles.containerButton}>
            <Button
              title="Decline"
              btnStyle={{
                backgroundColor: 'white',
                marginBottom: dimens.default_16,
                borderColor: color.btn_white,
                borderWidth: 1,
                flex: 1,
                marginRight: dimens.small,
              }}
              titleStyle={{
                fontFamily: fonts.sofia_bold,
                color: color.btn_title_white,
              }}
              onPress={() => {}}
            />
            <Button
              title="Pay"
              btnStyle={{
                backgroundColor: color.btn_black,
                flex: 1,
              }}
              titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
              onPress={() => {}}
            />
          </View>
        )}
        {type !== '' && (
          <View
            style={[
              styles.containerLabel,
              {
                backgroundColor:
                  type === 'in' ? color.bg_success : color.bg_red_error_msg,
              },
            ]}>
            <Text
              style={[
                styles.label,
                {color: type === 'in' ? color.green : color.red},
              ]}>
              {type === 'in' ? '+' : '-'} Rs {amount}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dimens.default_16,
    paddingVertical: dimens.small,
    marginBottom: dimens.small,
    position: 'relative',
  },
  containerLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: dimens.default_16,
  },
  containerRight: {
    backgroundColor: 'white',
    padding: dimens.default_14,
    borderRadius: dimens.default_16,
    flex: 1,
  },
  photo: {
    height: dimens.large_46,
    width: dimens.large_46,
    resizeMode: 'cover',
  },
  containerDate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: dimens.small,
  },
  iconDate: {
    height: dimens.default_14,
    width: dimens.default_14,
    resizeMode: 'cover',
    marginRight: dimens.supersmall,
  },
  date: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_12,
    lineHeight: dimens.default_12,
    color: color.grey_3,
  },
  name: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_14,
    color: color.btn_title_white,
  },
  description: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_14,
    color: color.btn_title_white,
    marginBottom: dimens.small,
  },
  info: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    lineHeight: dimens.default_16,
    color: color.btn_black,
    marginBottom: dimens.small,
  },
  containerButton: {
    flexDirection: 'row',
    flex: 1,
    marginTop: dimens.small,
    marginBottom: -12,
  },
  containerLabel: {
    position: 'absolute',
    top: dimens.default_14,
    right: dimens.default_14,
    paddingHorizontal: dimens.small,
    paddingTop: dimens.verysmall,
    backgroundColor: color.grey,
    borderRadius: dimens.large_50,
    minWidth: dimens.large_56,
    height: dimens.large_25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_12,
    color: color.btn_white,
  },
});

export default NotifActivityItem;
