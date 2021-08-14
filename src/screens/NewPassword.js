import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

//where local file imported
import {
  Button,
  PageTitle,
  InputPassword,
  ErrorMessage,
  Modal,
  SectionTitle,
} from '../components';
import {color, dimens, fonts} from '../utils';
import {LeftArrowBlack, ModalSuccess} from '../assets';

const NewPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalSuccess, setModalSuccess] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <Modal
        imageSrc={ModalSuccess}
        title="Reset Password Successful"
        subtitle="Your password has been successfuly reseted,you can now log in to your account"
        btn1Text="Log in"
        btn1Onpress={() => {
          navigation.navigate('Login');
        }}
        visible={modalSuccess}
        onClose={() => {
          navigation.navigate('Login');
        }}
      />

      <View style={styles.inner_container}>
        <PageTitle
          title="Forgot Password"
          isBlackArrow
          containerStyle={{backgroundColor: color.btn_white_2}}
          titleStyle={{color: 'black'}}
        />

        <SectionTitle type="auth" title="Reset Your Password" />

        <InputPassword
          label="New Password"
          value={password}
          onChangeText={setPassword}
        />
        <InputPassword
          label="Confirm New Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <ErrorMessage message="Password strength is too weak. Please use combination of number and symbols" />
      </View>

      <KeyboardAvoidingView behavior={Platform.OS == 'ios' && 'position'}>
        <View style={styles.btnContainer}>
          <Button
            title="Reset Password"
            titleStyle={{color: 'white'}}
            btnStyle={{backgroundColor: color.btn_black}}
            onPress={() => {
              setModalSuccess(true);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  inner_container: {
    backgroundColor: color.btn_white_2,
    paddingHorizontal: dimens.default,
    paddingBottom: dimens.default,
    flex: 1,
  },
  subtitle: {
    fontSize: dimens.default_18,
    fontFamily: fonts.noto_bold,
    marginTop: dimens.small,
  },
  description: {
    fontSize: dimens.default,
    fontFamily: fonts.sofia_medium,
    color: '#9A9B9E',
  },
  btnContainer: {
    backgroundColor: 'white',
    paddingHorizontal: dimens.default,
    paddingVertical: dimens.default_12,
  },
});
