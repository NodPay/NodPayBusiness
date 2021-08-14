import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';

//where local file imported
import {
  FeedItem,
  PageTitle,
  CommentReplyItem,
  CommentSend,
  Gap,
} from '../components/';
import {color, dimens, fonts} from '../utils/';

const Comment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <PageTitle isBlackArrow title="Comments" titleStyle={styles.pageTitle} />

      <ScrollView contentContainerStyle={styles.listContainer}>
        <FeedItem
          isHideComment
          item={{
            isLoved: true,
            isEmojied: false,
            loveCount: 4,
            emojiCount: null,
            message: 'Thank you Lorem Ipsum 🤗😎😍😍',
          }}
        />
        {Array(4)
          .fill(1)
          .map((item, key) => {
            return <CommentReplyItem key={key} />;
          })}
        <Gap t={dimens.default} />
      </ScrollView>

      <CommentSend />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  pageTitle: {
    color: color.btn_black,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.medium,
  },
  listContainer: {
    marginHorizontal: dimens.default,
    marginVertical: 0,
    flexGrow: 1,
  },
});

export default Comment;
