import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {Button, PageTitle, InputPIN} from '../components';

const BlockCardPin = ({route, navigation}) => {
  // state for text input
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <PageTitle
        isBlackArrow
        title="Change Pin"
        titleStyle={{color: color.btn_black}}
        isCancel
        cancel={{height: 32, width: 32, marginLeft: 5}}
      />
      {/* Header End */}

      <View style={styles.wrapper}>
        {/* Total Amount */}
        <View style={styles.totalAmount}>
          <Text style={styles.label}>Enter PIN Number</Text>
          <InputPIN
            value={value}
            showPassword={showPassword}
            onChange={setValue}
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
              navigation.navigate('VirtualCardDetails', {isCardBlocked: true});
            }}
            title="Block Card"
            titleStyle={{
              color: color.btn_white_2,
              fontFamily: fonts.sofia_bold,
            }}
            btnStyle={{
              backgroundColor: color.btn_black,
              flex: 1,
              marginLeft: dimens.supersmall,
            }}
          />
        </View>
      </KeyboardAvoidingView>
      {/* Bottom Button End */}
    </SafeAreaView>
  );
};

export default BlockCardPin;

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
