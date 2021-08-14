import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {Button, PageTitle, InputPIN} from '../components';
import {Next} from '../assets';

const MyCardChangePin = ({route, navigation}) => {
  // state for text input
  const [isConfirming, setIsConfirming] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState({
    newPin: '',
    confirmPin: '',
  });

  useEffect(() => {
    const backAction = () => {
      if (isConfirming) onBackToNewPin();
      return isConfirming;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [isConfirming]);

  // Back from confirm pin state to new pin state
  const onBackToNewPin = () => {
    setIsConfirming(false);
    setValue({newPin: '', confirmPin: ''});
  };

  const onChangePin = code => {
    if (isConfirming) {
      setValue(prev => ({...prev, confirmPin: code}));
    } else {
      setValue(prev => ({...prev, newPin: code}));
      setIsConfirming(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <PageTitle
        isBlackArrow
        title="Change Pin"
        titleStyle={{color: color.btn_black}}
        isCancel
        onPressBack={isConfirming && onBackToNewPin}
        cancel={{height: 32, width: 32, marginLeft: 5}}
      />
      {/* Header End */}

      <View style={styles.wrapper}>
        {/* Total Amount */}
        <View style={styles.totalAmount}>
          <Text style={styles.label}>
            {isConfirming ? 'Confirm PIN Number' : 'Enter New PIN Number'}
          </Text>
          <InputPIN
            value={isConfirming ? value.confirmPin : value.newPin}
            showPassword={showPassword}
            onChange={onChangePin}
          />
        </View>
        {/* Total Amount End */}
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.viewPinContainer}>
          <Text style={styles.viewPinText}>
            {showPassword ? 'Hide PIN' : 'View PIN'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Button */}
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'android' ? false : true}>
        <View style={styles.btnWrapper}>
          <Button
            onPress={() => {
              if (isConfirming) {
                navigation.navigate('AppDrawer', {
                  isPinChanged: true,
                });
              } else {
                setIsConfirming(true);
              }
            }}
            title={isConfirming ? 'Change PIN' : 'Continue'}
            titleStyle={{
              color: color.btn_white_2,
              fontFamily: fonts.sofia_bold,
            }}
            btnStyle={{
              backgroundColor: color.btn_black,
              flex: 1,
              marginLeft: dimens.supersmall,
            }}
            iconRight={!isConfirming && Next}
          />
        </View>
      </KeyboardAvoidingView>
      {/* Bottom Button End */}
    </SafeAreaView>
  );
};

export default MyCardChangePin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWrapper: {
    backgroundColor: 'white',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: dimens.default,
    paddingTop: dimens.default_12,
  },
  totalAmount: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey,
    marginBottom: dimens.default,
  },
  amount: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.medium,
    color: color.drawerActive,
  },
  viewPinContainer: {
    borderWidth: 1,
    borderColor: color.bg_grey,
    borderRadius: dimens.default_18,
    backgroundColor: 'white',
    paddingVertical: dimens.small_10,
    paddingHorizontal: dimens.large,
    marginTop: dimens.medium,
  },
  viewPinText: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    color: color.btn_title_white,
  },
  containerModal: {
    flex: 1,
    padding: dimens.default_16,
  },
});
