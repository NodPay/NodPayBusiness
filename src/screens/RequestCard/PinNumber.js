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
import {color, dimens, fonts} from '../../utils';
import {Button, PageTitle, InputPIN} from '../../components';

const PinNumber = () => {
  // state for text input
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default PinNumber;

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
});
