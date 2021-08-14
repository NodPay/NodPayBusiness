import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//where local file imported
import {color, dimens, fonts} from '../../utils';

const EmptyState = ({icon, iconSize = 101, content}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Image
          source={icon}
          style={[styles.icons, {height: iconSize, width: iconSize}]}
        />
      )}
      <Text style={styles.desc}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dimens.large_48,
  },
  icons: {
    resizeMode: 'cover',
  },
  desc: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    lineHeight: dimens.medium,
    color: color.grey_5,
    textAlign: 'center',
    marginTop: dimens.default_16,
  },
});

export default EmptyState;
