import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

//where local files imported
import {PageTitle} from '../components';
import {color, dimens, fonts} from '../utils';
import {Fingerprint} from '../assets';

const Biometrics = ({route, navigation}) => {
  const {title} = route.params;
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
        alert('Success Scan ' + biometryType);
        navigation.pop();
      })
      .catch(e =>
        console.log('error while authenticate fingerprint', e.message),
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title={title}
        titleStyle={{color: color.btn_black}}
      />
      <Text style={styles.title}>
        {errorMessage != ''
          ? errorMessage
          : 'Place your finger on right on top of the sensor above'}
      </Text>
      <View style={styles.wrapButton}>
        <TouchableOpacity
          onPress={onAuthenticate}
          disabled={errorMessage != '' ? true : false}>
          <Image source={Fingerprint} style={styles.img} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Biometrics;

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
