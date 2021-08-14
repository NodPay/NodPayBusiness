import React, {useState, useRef, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {
  Button,
  PageTitle,
  InputText,
  MenuItem,
  ErrorMessage,
} from '../components';
import {
  BGButton,
  ContactBackground,
  CitiBank,
  FaysalBank,
  HabibBank,
  OCBCBank,
  RightBlack,
  Internasional,
} from '../assets';

const BusinessTransactionForm = ({route, navigation}) => {
  const {userSelected = {}} = route.params;
  const [isInput, setIsInput] = useState(false);
  // state for text input
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [focusMessage, setFocusMessage] = useState(false);
  const [action, setAction] = useState('');

  const nodBalance = 0;

  const refRBSheet = useRef(null);
  const snapPoints = useMemo(() => ['-30%', '90%'], []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <PageTitle
        isCloseMode
        onPressClose={() => navigation.goBack()}
        title="Send & Request"
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
        <View style={styles.userContainer}>
          <View style={styles.userImageContainer}>
            <Image source={userSelected.photo} style={styles.userImage} />
            {userSelected.isInternasional && (
              <Image source={Internasional} style={styles.userIcon} />
            )}
          </View>
          <Text style={styles.userName}>{userSelected.name}</Text>
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
                {value === '' ? '0' : value}
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
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'android' ? false : true}>
        <ImageBackground source={BGButton} style={styles.btnWrapper}>
          <Button
            onPress={() => {
              refRBSheet.current?.expand();
              Keyboard.dismiss();
              setAction('send');
            }}
            title="Send"
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
      </KeyboardAvoidingView>
      {/* Bottom Button End */}

      <Image source={ContactBackground} style={styles.bg_contact} />

      <BottomSheet
        ref={refRBSheet}
        snapPoints={snapPoints}
        backdropComponent={backdropProps => (
          <BottomSheetBackdrop
            {...backdropProps}
            enableTouchThrough={true}
            pressBehavior="collapse"
          />
        )}>
        <PageTitle
          isCloseMode
          title="Select Payment Method"
          titleStyle={{color: color.btn_black}}
          onPressClose={() => refRBSheet.current?.close()}
        />
        <View style={styles.containerModal}>
          <MenuItem
            iconRadius={dimens.default}
            iconSize={dimens.large_40}
            title="Nod Balance"
            subtitleComponent={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: fonts.sofia_bold,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.green2,
                  }}>
                  Rs
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.sofia_bold,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.green,
                  }}>
                  {' '}
                  {nodBalance.toFixed(2)}
                </Text>
              </View>
            }
            onPress={() =>
              navigation.navigate('BusinessTransactionPIN', {
                action,
                userSelected,
              })
            }
            rightIcon={RightBlack}
          />
          <MenuItem
            icon={CitiBank}
            iconRadius={dimens.default}
            iconBackground="white"
            iconIsShadow
            iconSize={dimens.large}
            title="City Bank"
            titleStyle={{fontFamily: fonts.sofia_regular}}
            subtitleComponent={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: fonts.sofia_regular,
                    fontSize: dimens.small_6,
                    lineHeight: dimens.small_10,
                    color: color.grey_8,
                  }}>
                  ●{'   '}●{'   '}●{'   '}●
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.sofia_regular,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.grey_8,
                  }}>
                  {' '}
                  2356
                </Text>
              </View>
            }
            subtitle2Component={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: fonts.sofia_bold,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.green2,
                  }}>
                  Rs
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.sofia_bold,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.green,
                  }}>
                  {' '}
                  123.349
                </Text>
              </View>
            }
            onPress={() =>
              navigation.navigate('BusinessTransactionPIN', {
                action,
                userSelected,
              })
            }
            rightIcon={RightBlack}
          />
          <MenuItem
            icon={FaysalBank}
            iconRadius={dimens.default}
            iconBackground="white"
            iconIsShadow
            iconSize={dimens.large_40}
            title="Faysal Bank"
            titleStyle={{fontFamily: fonts.sofia_regular}}
            subtitleComponent={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: fonts.sofia_regular,
                    fontSize: dimens.small_6,
                    lineHeight: dimens.small_10,
                    color: color.grey_8,
                  }}>
                  ●{'   '}●{'   '}●{'   '}●
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.sofia_regular,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.grey_8,
                  }}>
                  {' '}
                  3345
                </Text>
              </View>
            }
            subtitle2Component={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: fonts.sofia_bold,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.green2,
                  }}>
                  Rs
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.sofia_bold,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.green,
                  }}>
                  {' '}
                  4.349
                </Text>
              </View>
            }
            onPress={() =>
              navigation.navigate('BusinessTransactionPIN', {
                action,
                userSelected,
              })
            }
            rightIcon={RightBlack}
          />
          <MenuItem
            icon={HabibBank}
            iconRadius={dimens.default}
            iconBackground="white"
            iconIsShadow
            iconSize={dimens.large_40}
            title="Habib Bank"
            titleStyle={{fontFamily: fonts.sofia_regular}}
            subtitleComponent={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: fonts.sofia_regular,
                    fontSize: dimens.small_6,
                    lineHeight: dimens.small_10,
                    color: color.grey_8,
                  }}>
                  ●{'   '}●{'   '}●{'   '}●
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.sofia_regular,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.grey_8,
                  }}>
                  {' '}
                  3345
                </Text>
              </View>
            }
            subtitle2Component={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: fonts.sofia_bold,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.green2,
                  }}>
                  Rs
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.sofia_bold,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.green,
                  }}>
                  {' '}
                  6.349
                </Text>
              </View>
            }
            onPress={() =>
              navigation.navigate('BusinessTransactionPIN', {
                action,
                userSelected,
              })
            }
            rightIcon={RightBlack}
          />
          <MenuItem
            icon={OCBCBank}
            iconRadius={dimens.default}
            iconBackground="white"
            iconIsShadow
            iconSize={dimens.large_40}
            title="OCBC Bank"
            titleStyle={{fontFamily: fonts.sofia_regular}}
            subtitleComponent={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: fonts.sofia_regular,
                    fontSize: dimens.small_6,
                    lineHeight: dimens.small_10,
                    color: color.grey_8,
                  }}>
                  ●{'   '}●{'   '}●{'   '}●
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.sofia_regular,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.grey_8,
                  }}>
                  {' '}
                  3345
                </Text>
              </View>
            }
            subtitle2Component={
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: fonts.sofia_bold,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.green2,
                  }}>
                  Rs
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.sofia_bold,
                    fontSize: dimens.default_14,
                    lineHeight: dimens.default_18,
                    color: color.green,
                  }}>
                  {' '}
                  9.349
                </Text>
              </View>
            }
            onPress={() =>
              navigation.navigate('BusinessTransactionPIN', {
                action,
                userSelected,
              })
            }
            rightIcon={RightBlack}
          />
        </View>
        {nodBalance <= 0 && (
          <View
            style={{
              paddingHorizontal: dimens.default,
            }}>
            <ErrorMessage
              message="You don’t have enough Nod balance"
              textStyle={{fontFamily: fonts.sofia_regular}}
            />
          </View>
        )}
        {nodBalance <= 0 && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: dimens.default,
              padding: dimens.default,
            }}>
            <Button
              onPress={() => refRBSheet.current?.close()}
              title="Cancel"
              titleStyle={{
                color: color.btn_title_white,
                fontFamily: fonts.sofia_bold,
              }}
              btnStyle={{
                backgroundColor: color.btn_white_2,
                flex: 0.7,
                marginRight: dimens.supersmall,
                borderColor: color.btn_white,
                borderWidth: 1,
              }}
            />
            <Button
              onPress={() =>
                navigation.navigate('BusinessTransactionTransferToNod')
              }
              title="Transfer to Nod"
              titleStyle={{
                color: color.btn_white_2,
                fontFamily: fonts.sofia_bold,
              }}
              btnStyle={{
                backgroundColor: color.btn_black,
                flex: 1.3,
                marginLeft: dimens.supersmall,
              }}
            />
          </View>
        )}
      </BottomSheet>
    </SafeAreaView>
  );
};

export default BusinessTransactionForm;

const styles = StyleSheet.create({
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
});
