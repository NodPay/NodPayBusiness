import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {Gap, PageTitle, SettingsSaveButton} from '../components';
import {
  Camera,
  CloseRed,
  Gallery,
  UploadOtherCNIC,
  UploadOtherNTN,
  UploadOtherSECP,
} from '../assets';
import {setFormRegisterBusiness} from '../store/action';
import useStateContext from '../store/useStateContext';

const BusinessDocument = ({navigation}) => {
  const {state, dispatch} = useStateContext();
  const [data, setData] = useState({
    secpImage: '',
    ntnImage: '',
    cnicImage: '',
  });
  const [selected, setSelected] = useState(0);
  const btnRef = useRef(null);

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(res => {
      console.log('result', res);
      if (selected == 0) {
        setData({...data, secpImage: res.path});
      } else if (selected == 1) {
        setData({...data, ntnImage: res.path});
      } else {
        setData({...data, cnicImage: res.path});
      }
    });
    btnRef.current.close();
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    }).then(res => {
      console.log('result', res);
      if (selected == 0) {
        setData({...data, secpImage: res.path});
      } else if (selected == 1) {
        setData({...data, ntnImage: res.path});
      } else {
        setData({...data, cnicImage: res.path});
      }
    });
    btnRef.current.close();
  };

  const onSave = () => {
    // TODO
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isCloseMode
        onPressClose={() => navigation.goBack()}
        title="Business Document"
        titleStyle={{color: color.btn_black}}
      />
      <View style={{padding: dimens.default}}>
        <Text style={styles.label}>SECP</Text>
        <TouchableOpacity
          style={{paddingVertical: dimens.default}}
          onPress={() => {
            setSelected(0);
            btnRef.current.open();
          }}>
          <Image
            source={
              data.secpImage == '' ? UploadOtherSECP : {uri: data.secpImage}
            }
            style={{
              borderRadius: 16,
              resizeMode: 'cover',
              height: 135,
              width: '100%',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.label}>NTN</Text>
        <TouchableOpacity
          style={{paddingVertical: dimens.default}}
          onPress={() => {
            setSelected(1);
            btnRef.current.open();
          }}>
          <Image
            source={data.ntnImage == '' ? UploadOtherNTN : {uri: data.ntnImage}}
            style={{
              borderRadius: 16,
              resizeMode: 'cover',
              height: 135,
              width: '100%',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.label}>CNIC</Text>
        <TouchableOpacity
          style={{paddingVertical: dimens.default}}
          onPress={() => {
            setSelected(2);
            btnRef.current.open();
          }}>
          <Image
            source={
              data.cnicImage == '' ? UploadOtherCNIC : {uri: data.cnicImage}
            }
            style={{
              borderRadius: 16,
              resizeMode: 'cover',
              height: 135,
              width: '100%',
            }}
          />
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={btnRef}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: dimens.default_16,
            borderTopRightRadius: dimens.default_16,
          },
        }}>
        <View style={{padding: dimens.default_16}}>
          <View style={{paddingTop: dimens.default_16 / 2}}>
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => btnRef.current.close()}>
                <Image source={CloseRed} style={{height: 40, width: 40}} />
              </TouchableOpacity>
              <Text style={styles.btmSheetTitle}>Upload Photo</Text>
            </View>
            <Gap t={dimens.large} />
            {/* open camera */}
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              activeOpacity={0.8}
              onPress={openCamera}>
              <Image source={Camera} style={{height: 48, width: 48}} />
              <Gap l={dimens.default_16} />
              <View>
                <Text style={styles.title}>Open Camera</Text>
                <Text style={styles.description}>
                  Take Picture with Your Camera
                </Text>
              </View>
              {/* <Image /> */}
            </TouchableOpacity>
            {/* open gallery */}
            <Gap t={dimens.large} />
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              activeOpacity={0.8}
              onPress={openGallery}>
              <Image source={Gallery} style={{height: 48, width: 48}} />
              <Gap l={dimens.default_16} />
              <View>
                <Text style={styles.title}>Open Gallery</Text>
                <Text style={styles.description}>
                  Browse Image from Your Gallery
                </Text>
              </View>
              {/* <Image /> */}
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
      <View style={{position: 'absolute', left: 0, bottom: 0, right: 0}}>
        <SettingsSaveButton
          onCancel={() => navigation.goBack()}
          onSave={onSave}
        />
      </View>
    </SafeAreaView>
  );
};

export default BusinessDocument;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.bg_grey},
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_22,
    color: color.grey_2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: dimens.small,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    resizeMode: 'cover',
  },
  btn: {
    marginLeft: dimens.default_16,
    borderRadius: dimens.default_16,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: color.grey,
    elevation: 1,
  },
  btnTitle: {
    padding: dimens.default_14,
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
  },
  description: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
  },
  btmSheetTitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    textAlign: 'center',
    flex: 0.9,
  },
});
