import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//where local file imported
import {color, dimens, fonts} from '../../utils';
/**
 * @param  {string} {items} render item dynamically from array map
 */
const StepInfo = ({items}) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.circle}>
            <Text style={styles.circleNumber}>{index + 1}</Text>
          </View>
          {index < items.length - 1 && (
            <View style={styles.containerBorderLine}>
              <View style={styles.borderLine} />
            </View>
          )}
          <Text key={index} style={styles.desc}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: dimens.medium,
  },
  containerBorderLine: {
    width: '100%',
    height: 1,
    position: 'absolute',
    overflow: 'hidden',
    top: '25%',
    left: '30%',
    zIndex: -1,
  },
  borderLine: {
    width: '100%',
    height: 3,
    borderWidth: 1,
    borderRadius: 2,
    borderStyle: 'dashed',
    borderColor: color.grey,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    backgroundColor: color.green,
    borderRadius: dimens.large_50,
    width: dimens.large_46,
    height: dimens.large_46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleNumber: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    lineHeight: dimens.medium,
    color: 'white',
  },
  desc: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_18,
    color: color.btn_black,
    textAlign: 'center',
    marginTop: dimens.small,
    maxWidth: 100,
  },
});

export default StepInfo;
