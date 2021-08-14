import React from 'react';
import {StyleSheet, Image, Text, View, TextInput} from 'react-native';
import {Search} from '../../assets';

// where local files imported
import {color, dimens, fonts} from '../../utils';

const InputSearch = ({
  value,
  onChangeText,
  placeholder,
  onSubmitEditing,
  backgroundColor,
}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor || color.grey_7},
      ]}>
      <Image source={Search} style={styles.icon} />
      <TextInput
        onSubmitEditing={onSubmitEditing}
        value={value}
        onChangeText={onChangeText}
        style={{
          flex: 1,
          fontFamily: fonts.sofia_regular,
          fontSize: 15,
          fontWeight: 'normal',
          paddingLeft: dimens.small,
        }}
        placeholder={placeholder}
        placeholderTextColor={color.grey}
      />
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  container: {
    color: color.btn_black,
    backgroundColor: color.grey_7,
    marginTop: dimens.small,
    paddingHorizontal: dimens.default,
    borderRadius: dimens.large_50,
    height: dimens.large_50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
  },
});
