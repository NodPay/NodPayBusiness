import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

//where local files imported
import {
  QRCodeSample,
  BackgroundQRCode,
  DefaultPict,
  LeftArrow,
  Share,
} from '../assets';
import {Gap, PageTitle} from '../components';
import {color, dimens, fonts} from '../utils';

const QRCode = ({navigation}) => {
  const [selected, setSelected] = useState(1);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  if (selected == 2) {
    return (
      <View style={{flex: 1, backgroundColor: color.bg_color}}>
        <StatusBar backgroundColor={color.bg_color} />
        <PageTitle title="Scan QR Code" />
        <QRCodeScanner
          topViewStyle={{backgroundColor: color.bg_color}}
          bottomViewStyle={{backgroundColor: color.bg_color}}
          onRead={res => {
            showToast(res.data);
            setSelected(1);
          }}
          // flashMode={RNCamera.Constants.FlashMode.torch}
        />
        {/* Button Start */}
        <View style={styles.tabButton}>
          <TouchableOpacity
            onPress={() => setSelected(1)}
            style={[
              styles.btn,
              {
                backgroundColor: selected === 1 ? 'white' : 'transparent',
              },
            ]}>
            <Text
              style={[
                styles.btnTitle,
                {
                  color: selected === 1 ? color.btn_black : 'gray',
                },
              ]}>
              NodMe
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(2)}
            style={[
              styles.btn,
              {
                backgroundColor: selected === 2 ? 'white' : 'transparent',
              },
            ]}>
            <Text
              style={[
                styles.btnTitle,
                {
                  color: selected === 2 ? color.btn_black : 'gray',
                },
              ]}>
              Scan
            </Text>
          </TouchableOpacity>
        </View>
        {/* Button End */}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_color} />
      <ImageBackground
        style={{flex: 1, padding: dimens.default}}
        source={BackgroundQRCode}>
        {/* Header Start */}
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={LeftArrow} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>QR Code</Text>
          <TouchableOpacity>
            <Image source={Share} style={{height: 24, width: 24}} />
          </TouchableOpacity>
        </View>
        {/* Header End */}

        <Gap t={100} />

        {/* Box Start */}
        {selected == 1 && (
          <View style={styles.box}>
            <View style={styles.imageProfileWrapper}>
              <Image source={DefaultPict} style={styles.imageProfile} />
              <Text style={styles.profileName}>Artour Babaev</Text>
              <Text style={styles.profileLink}>@arteezyevilgeniuses</Text>
              <Gap t={dimens.default} />
              <Image
                source={QRCodeSample}
                style={{height: 225, width: 225, resizeMode: 'cover'}}
              />
            </View>
          </View>
        )}
        {/* Box End */}

        {/* Button Start */}
        <View style={styles.tabButton}>
          <TouchableOpacity
            onPress={() => setSelected(1)}
            style={[
              styles.btn,
              {
                backgroundColor: selected === 1 ? 'white' : 'transparent',
              },
            ]}>
            <Text
              style={[
                styles.btnTitle,
                {
                  color: selected === 1 ? color.btn_black : 'gray',
                },
              ]}>
              NodMe
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(2)}
            style={[
              styles.btn,
              {
                backgroundColor: selected === 2 ? 'white' : 'transparent',
              },
            ]}>
            <Text
              style={[
                styles.btnTitle,
                {
                  color: selected === 2 ? color.btn_black : 'gray',
                },
              ]}>
              Scan
            </Text>
          </TouchableOpacity>
        </View>
        {/* Button End */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default QRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_color,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    color: color.btn_white,
  },
  box: {
    height: 450,
    // flex: 0.7,
    borderRadius: 16,
    backgroundColor: 'white',
    paddingVertical: dimens.default,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  imageProfile: {
    height: 116,
    width: 116,
    borderRadius: 116 / 2,
  },
  imageProfileWrapper: {
    position: 'absolute',
    top: -50,
    alignItems: 'center',
  },
  profileName: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_22,
    paddingVertical: dimens.default,
  },
  profileLink: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey_2,
  },
  tabButton: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    justifyContent: 'space-between',
    borderRadius: 11,
    height: 46,
    position: 'absolute',
    left: dimens.default,
    right: dimens.default,
    bottom: 50,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 11,
  },
  btnTitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    color: color.btn_black,
  },
});
