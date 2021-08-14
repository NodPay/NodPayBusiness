import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

//where local files imported
import {PageTitle} from '../components';
import {color, dimens, fonts} from '../utils';
import {Fingerprint} from '../assets';

const BlockCardTouchId = ({navigation}) => {
  const [biometryType, setBiometryType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then(res => {
        console.log('sensor available', res);
        setBiometryType(res);
      })
      .catch(e => {
        setErrorMessage(e.message);
      });

    return () => FingerprintScanner.release();
  }, []);

  useEffect(() => {
    if (biometryType === 'Face ID') {
      onAuthenticate();
    }
  }, [biometryType]);

  const onAuthenticate = () => {
    FingerprintScanner.authenticate({
      title: 'NodPay',
      description: 'Scan your fingerprint on the devices scanner to continue',
    })
      .then(() => {
        setIsAuthenticate(true);
        navigation.navigate('VirtualCardDetails', {isCardBlocked: true});
      })
      .catch(e =>
        console.log('error while authenticate fingerprint', e.message),
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Block Card"
        titleStyle={{color: color.btn_black}}
      />

      <View style={styles.wrapButton}>
        <TouchableOpacity
          onPress={onAuthenticate}
          disabled={errorMessage != '' ? true : false}>
          <Image source={Fingerprint} style={styles.img} />
        </TouchableOpacity>

        <Text style={styles.title}>
          {errorMessage != ''
            ? errorMessage
            : 'Touch the fingerprint sensor to confirm'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default BlockCardTouchId;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    textAlign: 'center',
    paddingHorizontal: dimens.default_16,
    color: color.grey,
    marginTop: dimens.default_18,
  },
  img: {
    height: 220,
    width: 220,
    resizeMode: 'contain',
  },
  wrapButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
