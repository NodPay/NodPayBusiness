import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

//where local file imported
import {dimens, fonts, color} from '../../utils';
import {ProfileExample, Time} from '../../assets';

/**
 * Item list of comment's repplies
 * @param  {object} item     Object of reply's datas
 */
const CommentReplyItem = ({item = {}}) => {
  const {message} = item;

  return (
    <View style={styles.container}>
      {/* Left part (profile photo and time) */}
      <View style={{marginRight: dimens.default_12}}>
        <Image
          source={ProfileExample}
          style={{height: 45, width: 45, resizeMode: 'contain'}}
        />
        <View style={styles.timeContainer}>
          <Image source={Time} style={styles.clockIcon} />
          <Text style={{fontSize: dimens.default_12, color: color.grey_3}}>
            1m
          </Text>
        </View>
      </View>

      {/* Right (Informations inside white box) */}
      <View style={styles.rightContainer}>
        <Text style={styles.title}>Zainal Abidin</Text>

        <Text style={styles.message}>Very good 🤗😎😍😍</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: dimens.default,
    flexDirection: 'row',
    marginLeft: 65,
  },
  clockIcon: {
    height: 18,
    width: 18,
    marginRight: dimens.supersmall,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimens.small_10,
  },
  rightContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: dimens.default,
    padding: dimens.default_14,
  },
  title: {
    color: color.btn_title_white,
    fontSize: dimens.default_14,
    fontFamily: fonts.noto_regular,
    flex: 1,
  },
  message: {
    color: color.btn_black,
    fontSize: dimens.default,
    fontFamily: fonts.sofia_regular,
    marginTop: dimens.supersmall,
  },
});

export default CommentReplyItem;
