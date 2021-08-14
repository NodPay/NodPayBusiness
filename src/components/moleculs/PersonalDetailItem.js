import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {MaleActive} from '../../assets';
import {color, dimens, fonts} from '../../utils';
import {Divider} from '../atoms';
/**
 * component to render personal item detail
 * @param  {bool} isDivided if it is true, render a divider to bottom of personal detail
 * @param  {bool} isImage render gender image, default Male
 * @param  {string} left='left' -> render text on left,
 * @param  {string} value='right' -> render text on right
 */
const PersonalDetailItem = ({
  isDivided,
  isImage,
  left = 'left',
  value = 'right',
}) => {
  return (
    <View style={{marginTop: dimens.default}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.left}>{left}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {isImage && (
            <Image
              source={MaleActive}
              style={{
                height: 16,
                width: 16,
                marginRight: 4,
                resizeMode: 'cover',
              }}
            />
          )}
          <Text style={styles.right}>{value}</Text>
        </View>
      </View>
      {!isDivided && <Divider t={16} />}
    </View>
  );
};

export default PersonalDetailItem;

const styles = StyleSheet.create({
  left: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey_3,
  },
  right: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_black,
  },
});
