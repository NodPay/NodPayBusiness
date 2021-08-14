import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Switch} from 'react-native-switch';

// where local files imported
import {color, dimens, fonts} from '../../utils';

const InputSwitch = ({label, value, onChange}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => onChange(!value)}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
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
    </TouchableOpacity>
  );
};

export default InputSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: dimens.small,
  },
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_black,
  },
});
