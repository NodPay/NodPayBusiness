import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Right} from '../../assets';
import {color, dimens, fonts} from '../../utils';

const MainActionList = ({
  icon,
  onPress,
  title = 'Title',
  description = 'Description',
  iconStyle,
  uploadCheck,
  image,
  imageStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {uploadCheck ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={image}
                style={[{height: 50, width: 65}, imageStyle]}
              />
              <View>
                <Text style={styles.title}>{title}</Text>
                <Text
                  style={[
                    styles.description,
                    {paddingLeft: dimens.default_16},
                  ]}>
                  {description}
                </Text>
              </View>
            </View>
            <Image source={Right} style={{height: 24, width: 24}} />
          </>
        ) : (
          <>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={icon}
                style={[{height: 40, width: 40}, iconStyle]}
              />
              <Text style={styles.title}>{title}</Text>
            </View>
            <Image source={Right} style={{height: 24, width: 24}} />
          </>
        )}
      </View>
      {!uploadCheck && <Text style={styles.description}>{description}</Text>}
    </TouchableOpacity>
  );
};

export default MainActionList;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_20,
    paddingLeft: dimens.default,
  },
  description: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    color: color.grey2,
  },
  container: {
    paddingVertical: dimens.default_12,
  },
});
