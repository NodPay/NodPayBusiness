import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

//where local file imported
import {dimens, fonts, color} from '../../utils';
import {
  ProfileExample,
  LoveActive,
  LoveInactive,
  EmojiActive,
  EmojiInactive,
  CommentActive,
  CommentInactive,
  Time,
  People,
  Person,
} from '../../assets';
/**
 * Item of feed section
 * @param  {string} type                What kind of feed item
 * @param  {object} item                information of feed
 * @param  {function} onPressLove       When love icon is pressed
 * @param  {function} onPressComment    When comment icon is pressed
 * @param  {function} onPressEmoji      When emoji icon is pressed
 * @param  {boolean} isHideComment      is Comment icon shown
 * @param  {boolean} isCommentReply     is comment replied
 * @param  {function} onPressPhoto      when photo is pressed
 */
const FeedItem = ({
  type,
  item = {},
  onPressLove,
  onPressComment,
  onPressEmoji,
  isHideComment,
  isCommentReply,
  onPressPhoto, //added for view other user profile
}) => {
  const {
    loveCount,
    commentCount,
    emojiCount,
    isLoved,
    isCommented,
    isEmojied,
    message,
    amount,

    // * Ex: Andi paid Umair
    subject,
    predicate,
    object,
  } = item;

  if (type == 'customer') {
    return (
      <View style={{marginTop: dimens.default, flexDirection: 'row'}}>
        {/* Left part (profile photo and time) */}
        <View style={{width: 65}}>
          <View style={{width: 50}}>
            <TouchableOpacity onPress={onPressPhoto}>
              <Image
                source={ProfileExample}
                style={{height: 50, width: 50, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <View style={styles.timeContainer}>
              <Image source={Time} style={styles.clockIcon} />
              <Text style={{fontSize: dimens.default_12, color: color.grey_3}}>
                1m
              </Text>
            </View>
          </View>
        </View>

        {/* Right (Informations inside white box) */}
        <View style={styles.rightContainer}>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.title}>
                {subject}
                <Text style={styles.middleTitle}> {predicate}</Text> {object}
              </Text>
            </View>

            <Text style={styles.message}>{message}</Text>
          </View>

          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>+ Rs {amount}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{marginTop: dimens.default, flexDirection: 'row'}}>
      {/* Left part (profile photo and time) */}
      <View style={{width: 65}}>
        <View style={{width: 50}}>
          <TouchableOpacity onPress={onPressPhoto}>
            <Image
              source={ProfileExample}
              style={{height: 50, width: 50, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <View style={styles.timeContainer}>
            <Image source={Time} style={styles.clockIcon} />
            <Text style={{fontSize: dimens.default_12, color: color.grey_3}}>
              1m
            </Text>
          </View>
        </View>
      </View>

      {/* Right (Informations inside white box) */}
      <View style={styles.rightContainer}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.title}>
              Maimunah
              <Text style={styles.middleTitle}> paid</Text> Abdullah
            </Text>
          </View>

          <Text style={styles.message}>{message}</Text>

          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={isLoved ? LoveActive : LoveInactive}
                style={styles.actionIcon}
              />
              <Text
                style={[
                  styles.actionCount,
                  {
                    color: isLoved ? color.love_active : color.btn_title_white,
                  },
                ]}>
                {loveCount}
              </Text>
            </TouchableOpacity>
            {!isHideComment && (
              <TouchableOpacity
                style={styles.actionButton}
                onPress={onPressComment}>
                <Image
                  source={isCommented ? CommentActive : CommentInactive}
                  style={styles.actionIcon}
                />
                <Text
                  style={[
                    styles.actionCount,
                    {
                      color: isCommented
                        ? color.comment_active
                        : color.btn_title_white,
                    },
                  ]}>
                  {commentCount}
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={isEmojied ? EmojiActive : EmojiInactive}
                style={styles.actionIcon}
              />
              <Text
                style={[
                  styles.actionCount,
                  {
                    color: isEmojied
                      ? color.emoji_active
                      : color.btn_title_white,
                  },
                ]}>
                {emojiCount}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={People} style={styles.publicityIcon} />
          <Text style={styles.publicityText}>Public</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: dimens.default,
    padding: dimens.default_14,
  },
  title: {
    color: color.btn_title_white,
    fontSize: dimens.default_14,
    fontFamily: fonts.sofia_bold,
    fontWeight: '700',
    flex: 1,
  },
  middleTitle: {
    fontFamily: fonts.sofia_regular,
    color: color.btn_title_white,
    fontWeight: '400',
  },
  publicityIcon: {
    height: 18,
    width: 18,
    marginRight: dimens.supersmall,
  },
  publicityText: {
    color: color.grey_3,
    fontSize: dimens.default_12,
    fontFamily: fonts.sofia_regular,
  },
  amountContainer: {
    borderRadius: dimens.default_12,
    backgroundColor: color.green3,
    paddingHorizontal: dimens.small,
    paddingVertical: dimens.supersmall,
  },
  amountText: {
    color: color.green,
    fontSize: dimens.default_12,
    lineHeight: dimens.default_14,
    fontFamily: fonts.sofia_regular,
  },
  message: {
    color: color.btn_black,
    fontSize: dimens.default,
    fontFamily: fonts.sofia_regular,
    marginTop: dimens.small,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: dimens.default,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    height: 18,
    width: 18,
    marginRight: dimens.small,
  },
});

export default FeedItem;
