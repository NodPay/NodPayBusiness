import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

//where local file imported
import {dimens, fonts, color} from '../../utils';
import {TextInput} from '../atoms';
import {Send} from '../../assets';

/**
 * Textinput and send button at the bottom of comment screen
 */
const CommentSend = () => {
  const [comment, setComment] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' && 'position'}
      style={styles.container}>
      <TextInput
        placeholder="Write your comment"
        placeholderTextColor={color.grey_5}
        value={comment}
        onChangeText={setComment}
        style={styles.input}
      />

      <TouchableOpacity style={styles.sendButton} activeOpacity={0.8}>
        <Image source={Send} style={{width: 30, height: 30}} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dimens.default,
    paddingVertical: dimens.default_12,
  },
  input: {
    flex: 1,
    backgroundColor: color.bg_input_comment,
    color: color.grey_5,
    marginTop: 0,
  },
  sendButton: {
    backgroundColor: color.drawerActive,
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    height: 55,
    marginLeft: dimens.small,
  },
});

export default CommentSend;
