import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SectionTitle} from '.';
import {color, dimens, fonts} from '../../utils';
import {Button, Gap} from '../atoms';
/**
 * Information text and action button inside card
 * @param  {string} title     title/bold text
 * @param  {string} subtitle  title/less bold text
 * @param  {string} btnTitle  text inside button
 * @param  {func} onPress     function called when button is pressed
 */
const CardInfoButton = ({title, subtitle, btnTitle, onPress}) => {
  return (
    <View style={styles.container}>
      <SectionTitle
        containerStyle={{
          padding: 0,
        }}
        title={title}
        titleStyle={{
          color: 'black',
          fontSize: dimens.default_16,
        }}
        subtitle={subtitle}
        subTitleStyle={{
          color: color.grey,
          fontSize: dimens.default_16,
        }}
      />
      <Gap t={dimens.default_16} />
      <Button
        onPress={onPress}
        title={btnTitle}
        btnStyle={{backgroundColor: color.btn_white_2}}
      />
    </View>
  );
};

export default CardInfoButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0FC',
    padding: dimens.default_16,
    borderRadius: dimens.default_16,
  },
});
