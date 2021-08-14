import React from 'react';
import {View, StyleSheet} from 'react-native';

//where local file imported
import {Button, Gap} from '../atoms';
import {dimens, color} from '../../utils';

/**
 * SettingsSaveButton component for setting save/cancel button on bottom of form
 * @param   {func}    onCancel  Triggered when button cancel onclick
 * @param   {func}    onSave    Triggered when button save onclick
 */
const SettingsSaveButton = ({onCancel, onSave}) => {
  return (
    <View style={styles.btn}>
      <Button title="Cancel" btnStyle={{flex: 1}} onPress={onCancel} />
      <Gap r={dimens.default_12} />
      <Button
        onPress={onSave}
        title="Save"
        btnStyle={{backgroundColor: color.btn_black, flex: 1.6}}
        titleStyle={{color: 'white'}}
      />
    </View>
  );
};

export default SettingsSaveButton;

const styles = StyleSheet.create({
  btn: {
    height: 72,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: dimens.default_16,
    flexDirection: 'row',
  },
});
