import React, {useState, useRef, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {Button, PageTitle, InputText, InputPIN} from '../components';
import {
  BGButton,
  ContactBackground,
  Internasional,
  DefaultPict,
  ModalSuccess,
} from '../assets';

const PaySalary = ({route, navigation}) => {
  let userSelected = {};
  // const {userSelected = {}} = route.params;
  const [isInput, setIsInput] = useState(false);
  // state for text input
  const [value, setValue] = useState('0');
  const [message, setMessage] = useState('');
  const [focusMessage, setFocusMessage] = useState(false);
  const [currentView, setCurrentView] = useState('');
  // state for text input
  const [pin, setPin] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // onConfim
  const onConfirm = () => {
    setCurrentView('success');
  };

  if (currentView == 'inputPin') {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <PageTitle
          isBlackArrow
          title="Pay Salary"
          titleStyle={{color: color.btn_black}}
          isCancel
          cancel={{
            height: 32,
            width: 32,
            marginLeft: 5,
          }}
        />
        {/* Header End */}

        <View style={styles.wrapper}>
          {/* Total Amount */}
          <View style={styles.totalAmount}>
            <Text style={styles.label}>Enter PIN to confirm payment</Text>
            <View style={{padding: 8}}>
              <InputPIN
                showPassword={showPassword}
                onFilled={code => setPin(code)}
              />
            </View>
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
        <ImageBackground source={BGButton} style={styles.btnWrapper}>
          <Button
            onPress={onConfirm}
            title="Confirm"
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
        </ImageBackground>
        {/* Bottom Button End */}

        <Image source={ContactBackground} style={styles.bg_contact} />
      </SafeAreaView>
    );
  }

  if (currentView == 'success') {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <PageTitle
          isBlackArrow
          title="Pay Salary"
          titleStyle={{color: color.btn_black}}
          isCancel
          cancel={{
            height: 32,
            width: 32,
            marginLeft: 5,
          }}
        />
        {/* Header End */}

        <View style={styles.wrapper}>
          <View style={styles.wrapperContainer}>
            <Image source={ModalSuccess} style={{marginTop: '-27%'}} />
            <Text style={styles.title}>Transaction Success!</Text>
            <Text style={styles.subtitle}>
              Your money has been successfully sent to Bruno Fernandes
            </Text>
            <View style={styles.amountWrapper}>
              <View style={styles.amountContainer}>
                <Text style={styles.amountLabel}>Rs</Text>
                <Text style={styles.amountValue}>5000</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Notes</Text>
              <Text style={styles.valueText}>
                Hallo, Thanks for your progress today!
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.label}>Recipient</Text>
              <View style={styles.userContainer}>
                <View style={styles.userImageContainer}>
                  <Image source={userSelected.photo} style={styles.userImage} />
                  {userSelected.isInternasional && (
                    <Image source={Internasional} style={styles.userIcon} />
                  )}
                </View>
                <View style={styles.userContent}>
                  <Text style={styles.userName}>{userSelected.name}</Text>
                  <Text style={styles.userPhone}>{userSelected.phone}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom Button */}
        <View style={styles.btnWrapper}>
          <Button
            onPress={() =>
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'AppDrawer'}],
                }),
              )
            }
            title="Back to Home"
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
        {/* Bottom Button End */}

        <Image source={ContactBackground} style={styles.bg_contact} />
      </SafeAreaView>
    );
  }

  const onPaySalary = () => {
    if (value != '0' && message != '') {
      setCurrentView('inputPin');
    } else {
      alert('please fill all input.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <PageTitle
        isBlackArrow
        onPressClose={() => navigation.goBack()}
        title="Pay Salary"
        titleStyle={{color: color.btn_black}}
      />
      {/* Header End */}

      <View style={styles.wrapper}>
        <View style={styles.userContainer}>
          <View style={styles.userImageContainer}>
            <Image source={DefaultPict} style={styles.userImage} />
            {userSelected.isInternasional && (
              <Image source={Internasional} style={styles.userIcon} />
            )}
          </View>
          <Text style={styles.userName}>Name</Text>
        </View>

        {/* Total Amount */}
        <View style={styles.totalAmount}>
          <Text style={styles.label}>Enter Total Amount</Text>
          {/* check is input */}
          {isInput ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text style={styles.amount}>Rs</Text>
              <TextInput
                autoFocus={true}
                keyboardType="number-pad"
                value={value}
                onChangeText={val => setValue(val)}
                style={[
                  styles.amount,
                  {
                    color: color.btn_black,
                    fontWeight: 'normal',
                    lineHeight: 60,
                    fontSize: 60,
                  },
                ]}
                onSubmitEditing={() => {
                  setIsInput(false);
                }}
                onBlur={() => {
                  setIsInput(false);
                }}
              />
            </View>
          ) : (
            <Text
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setIsInput(!isInput)}>
              <Text style={styles.amount}>Rs </Text>
              <Text
                style={[
                  styles.amount,
                  {
                    color: color.btn_black,
                    fontWeight: 'normal',
                    lineHeight: 60,
                    fontSize: 60,
                  },
                ]}>
                {value}
              </Text>
            </Text>
          )}
          {userSelected.isInternasional && (
            <View style={styles.usdContainer}>
              <Text style={styles.usdText}>USD</Text>
            </View>
          )}
        </View>
        {/* Total Amount End */}

        <View style={{width: '100%', position: 'relative'}}>
          {focusMessage && message === '' && (
            <View
              style={{
                position: 'absolute',
                paddingHorizontal: dimens.default_20,
                width: '100%',
                zIndex: 200,
                top: -65,
                left: 0,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: dimens.medium,
                  paddingVertical: dimens.default,
                  borderRadius: dimens.small,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.sofia_bold,
                    fontSize: dimens.default_18,
                    color: color.btn_black,
                  }}>
                  Enter a message please
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.sofia_regular,
                    fontSize: dimens.default_18,
                    color: color.btn_black,
                  }}>
                  e.g, ‘electicity, shopping, bills and Groceries
                </Text>
                <View
                  style={{
                    width: 0,
                    height: 0,
                    borderLeftWidth: 8,
                    borderRightWidth: 8,
                    borderTopWidth: 12,
                    borderStyle: 'solid',
                    backgroundColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderTopColor: 'white',
                    position: 'absolute',
                    bottom: -12,
                    left: '60%',
                    right: 0,
                  }}
                />
              </View>
            </View>
          )}
          <InputText
            containerStyle={{
              width: '100%',
              paddingHorizontal: dimens.default_20,
              marginBottom: dimens.default,
            }}
            inputStyle={
              focusMessage && message === ''
                ? {
                    textAlign: 'center',
                    borderWidth: 3,
                    borderColor: color.drawerActive,
                  }
                : {
                    textAlign: 'center',
                  }
            }
            labelStyle={{color: color.btn_black}}
            placeholder="Type your message here..."
            placeholderTextColor="rgba(3, 6, 12, 0.4)"
            value={message}
            onChangeText={setMessage}
            onFocus={() => {
              setFocusMessage(true);
            }}
            onBlur={() => {
              setFocusMessage(false);
            }}
            onSubmitEditing={() => {
              setFocusMessage(false);
            }}
          />
        </View>
      </View>

      {/* Bottom Button */}
      <ImageBackground source={BGButton} style={styles.btnWrapper}>
        <Button
          onPress={onPaySalary}
          title="Pay Salary"
          titleStyle={{color: color.btn_white_2, fontFamily: fonts.sofia_bold}}
          btnStyle={{
            backgroundColor: color.btn_black,
            flex: 1,
            marginLeft: dimens.supersmall,
          }}
        />
      </ImageBackground>
      {/* Bottom Button End */}

      <Image source={ContactBackground} style={styles.bg_contact} />
    </SafeAreaView>
  );
};

export default PaySalary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: color.btn_white_2,
    backgroundColor: 'white',
  },
  bg_contact: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -2,
    width: '100%',
    resizeMode: 'stretch',
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
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImageContainer: {
    position: 'relative',
  },
  userImage: {
    width: dimens.x_large,
    height: dimens.x_large,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  userIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: dimens.medium,
    height: dimens.medium,
  },
  userName: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    color: color.drawerActive,
    marginTop: dimens.supersmall,
  },
  totalAmount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimens.large_40,
  },
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey,
    marginBottom: dimens.small,
  },
  amount: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.medium,
    color: color.drawerActive,
  },
  usdContainer: {
    backgroundColor: 'white',
    paddingHorizontal: dimens.medium,
    paddingVertical: dimens.default_14,
    borderRadius: 50,
    marginTop: dimens.supersmall,
  },
  usdText: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey,
  },
  containerModal: {
    flex: 1,
    padding: dimens.default_16,
  },
  bg_contact: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -2,
    width: '100%',
    resizeMode: 'stretch',
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
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  bg_contact: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -2,
    width: '100%',
    resizeMode: 'stretch',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: dimens.default,
  },
  btnWrapper: {
    backgroundColor: 'white',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: dimens.default,
    paddingTop: dimens.default_12,
  },
  wrapperContainer: {
    backgroundColor: 'white',
    borderRadius: dimens.default,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: dimens.default,
    paddingVertical: dimens.medium,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.medium,
    lineHeight: dimens.large_28,
    color: color.btn_black,
  },
  subtitle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_18,
    color: 'rgba(3,6,12,0.64)',
    maxWidth: 250,
    textAlign: 'center',
  },
  amountWrapper: {
    width: '100%',
    overflow: 'hidden',
    marginTop: dimens.default,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: dimens.small,
    borderRadius: 1,
    borderWidth: 2,
    marginTop: -2,
    marginLeft: -2,
    borderStyle: 'dashed',
    width: '102%',
    borderColor: color.drawerActive,
  },
  amountLabel: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.medium,
    lineHeight: dimens.large_28,
    color: 'rgba(3,6,12,0.64)',
    marginBottom: dimens.small,
    marginRight: dimens.verysmall,
  },
  amountValue: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.large_60,
    lineHeight: dimens.x_large,
    color: color.btn_black,
  },
  section: {
    width: '100%',
    marginTop: dimens.default,
  },
  label: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    lineHeight: dimens.default_20,
    color: color.btn_black,
    marginBottom: dimens.supersmall,
  },
  valueText: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    lineHeight: dimens.default_24,
    color: color.btn_black,
  },
  userImageContainer: {
    position: 'relative',
  },
  userIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: dimens.medium,
    height: dimens.medium,
  },
  userContent: {marginLeft: dimens.default},
  userPhone: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
    lineHeight: dimens.default_20,
    color: color.grey_2,
    marginTop: dimens.supersmall,
  },
  containerModal: {
    flex: 1,
    padding: dimens.default_16,
  },
});
