import React from 'react';
import {View, StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

// where local files imported
import {color, dimens, fonts} from '../../utils';
/**
 * Input pin number with certain digits
 * @param  {boolean} error          is there any error
 * @param  {boolean} showPassword   is showing password
 * @param  {function} onFilled      when all field is filled
 * @param  {string} value           field value
 * @param  {function} onChange      when value is changed
 */
const InputPIN = ({error, showPassword, onFilled, value, onChange}) => {
  return (
    <View style={{height: 56}}>
      <OTPInputView
        code={value}
        style={{paddingHorizontal: dimens.default}}
        pinCount={6}
        keyboardType="number-pad"
        placeholderTextColor="green"
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        secureTextEntry={!showPassword}
        codeInputFieldStyle={[
          styles.underlineStyleBase,
          error && {borderColor: 'red'},
        ]}
        codeInputHighlightStyle={[
          styles.underlineStyleHighLighted,
          error && {borderColor: 'red'},
        ]}
        onCodeChanged={onChange}
        onCodeFilled={
          onFilled &&
          (code => {
            console.log(`Code is ${code}, you are good to go!`);
            onFilled(code);
          })
        }
      />
    </View>
  );
};

export default InputPIN;

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 47,
    height: 56,
    borderWidth: 0,
    borderRadius: dimens.default,
    backgroundColor: 'white',
    color: 'black',
    fontSize: dimens.default_18,
    fontFamily: fonts.sofia_bold,
    fontWeight: 'normal',
    elevation: 2,
    shadowRadius: 5,
    shadowOffset: {height: 2},
    shadowOpacity: 0.07,
  },
  underlineStyleHighLighted: {
    borderWidth: 0,
    backgroundColor: 'white',
    elevation: 2,
    shadowRadius: 5,
    shadowOffset: {height: 2},
    shadowOpacity: 0.07,
  },
});
