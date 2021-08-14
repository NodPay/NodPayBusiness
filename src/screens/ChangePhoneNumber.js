import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

//where local files imported
import {color, dimens, fonts, formatDate} from '../utils';
import {CloseRed, ModalSuccess} from '../assets';
import {
  Button,
  ErrorMessage,
  Gap,
  InputOtp,
  InputPhoneNumber,
  SectionTitle,
  Modal,
} from '../components';
import useStateContext from '../store/useStateContext';

const ChangePhoneNumber = ({navigation}) => {
  const {state, dispatch} = useStateContext();
  const [verification, setVerification] = useState(false);
  const [minute, setMinute] = useState(2);
  const [second, setSecond] = useState(59);
  const [delay, setDelay] = useState(1000);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useInterval(
    () => {
      setSecond(second - 1);
      if (second == 0) {
        setMinute(minute - 1);
        setSecond(59);
      }
      if (second === 0 && minute === 0) {
        dispatch({type: 'SET_IS_RUNNING', payload: false});
        setShow(true);
        setMinute(0);
        setSecond(0);
      }
    },
    state.isRunning ? delay : null,
  );

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const onPress = () => {
    if (verification) {
      if (state?.verificationCode != '') {
        setVisible(true);
        dispatch({type: 'SET_IS_RUNNING', payload: false});
      } else {
        dispatch({
          type: 'SET_ERROR_REGISTER',
          error: true,
          errorMessage: 'Invalid Code',
        });
      }
    } else {
      setVerification(!verification);
      dispatch({type: 'SET_IS_RUNNING', payload: true});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <TouchableOpacity
          style={styles.close}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          <Image
            source={CloseRed}
            style={{height: dimens.large_40, width: dimens.large_40}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Change Phone Number</Text>
      </View>

      {/* Modal Start*/}

      <Modal
        visible={visible}
        imageSrc={ModalSuccess}
        title="Mobile Phone Changed!"
        subtitle="Your mobile phone is successfuly change"
        onClose={() => navigation.replace('Settings', {type: 'personal'})}
      />

      {/* Modal End */}

      {/* Dynamic content */}
      {!verification && (
        <View style={styles.space}>
          <Text style={styles.desc}>
            Enter your phone number. We’ll send you a code to make sure it’s you
          </Text>
          <Gap t={72} />
          <InputPhoneNumber
            placeholder="Mobile Number"
            dispatch={dispatch}
            inputMobileNumber={true}
          />
          <Gap t={16} />
          <View style={styles.containerMessage}>
            <Text style={styles.message}>
              By submiting you confirm that you are authorized to use the number
              entered and agreed to receives SMS text to verify you own the
              number.
            </Text>
          </View>
        </View>
      )}

      {/*is verification*/}

      {verification && (
        <View style={{flex: 1, paddingHorizontal: dimens.default_16}}>
          <SectionTitle
            containerStyle={
              {
                // paddingLeft: dimens.default_16,
              }
            }
            title="Verifications"
            titleStyle={{color: 'black', fontSize: dimens.default_22}}
            subtitle={`Enter 4 digits we sent to`}
            num={`+${state?.phoneNumber}`}
            subTitleStyle={{
              color: color.grey,
              fontSize: dimens.default_16,
            }}
          />
          <Gap t={90} />
          <View
            style={{
              flex: 0.1,
            }}>
            <InputOtp error={state?.error} />
          </View>
          <Gap t={dimens.default_16} />
          {state?.error && <ErrorMessage message={state?.errorMessage} />}
          <Text style={styles.timer}>
            Resent code in:{' '}
            <Text
              style={[styles.timer, {color: color.bg_color}]}
              onPress={
                show
                  ? () => {
                      alert('resent verification code');
                    }
                  : () => {}
              }>
              {show ? `Resent` : `${formatDate(minute)}:${formatDate(second)}`}
            </Text>
          </Text>
        </View>
      )}
      {/* Dynamic content end*/}
      <View style={styles.btn}>
        <Button
          onPress={onPress}
          title={verification ? 'Verify' : 'Send Code'}
          btnStyle={{backgroundColor: color.btn_black}}
          titleStyle={{color: 'white'}}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChangePhoneNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: dimens.default_16,
  },
  close: {
    position: 'absolute',
    left: dimens.default_16,
    top: dimens.default_16,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    marginTop: 8,
  },
  space: {
    padding: dimens.default_16,
  },
  desc: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
  },
  containerMessage: {
    backgroundColor: '#F0F0FC',
    paddingVertical: dimens.default_14,
    paddingHorizontal: dimens.default_18,
    borderRadius: dimens.default_16,
    marginTop: dimens.default,
  },
  message: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.bg_color,
    textAlign: 'left',
  },
  btn: {
    height: 72,
    backgroundColor: 'white',
    paddingHorizontal: dimens.default_16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  timer: {
    textAlign: 'center',
    color: color.grey,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    paddingVertical: dimens.default_16,
  },
});
