import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';

// where local files imported
import {FormLabel} from '../atoms';
import {color, dimens, fonts} from '../../utils';
import {Camera, CloseRed, DefaultPict, Gallery} from '../../assets';
import {Gap} from '../../components';
import useStateContext from '../../store/useStateContext';
import {setFormRegister, setFormEditProfileBusiness} from '../../store/action';
/**
 * Select image component
 * @param  {string} type  Type of screen
 */
const InputPhoto = ({type}) => {
  const [picture, setPicture] = useState('');
  const btnRef = useRef(null);
  const {dispatch} = useStateContext();

  const openCamera = () => {
    btnRef.current.close();
    setTimeout(
      () =>
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
          cropperCircleOverlay: true,
        }).then(res => {
          console.log('result', res);
          setPicture(res.path);
          if (type == 'business') {
            dispatch(setFormEditProfileBusiness('logo', res.path));
          } else {
            dispatch(setFormRegister('profileImage', res.path));
          }
        }),
      500,
    );
  };

  const openGallery = () => {
    btnRef.current.close();
    setTimeout(
      () =>
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          cropperCircleOverlay: true,
        }).then(res => {
          console.log('result', res);
          setPicture(res.path);
          if (type == 'business') {
            dispatch(setFormEditProfileBusiness('logo', res.path));
          } else {
            dispatch(setFormRegister('profileImage', res.path));
          }
        }),
      500,
    );
  };

  return (
    <View style={styles.container}>
      <FormLabel
        label={type == 'business' ? 'Business Logo' : 'Profile Photo'}
      />
      <View style={styles.content}>
        <Image
          source={picture == '' ? DefaultPict : {uri: picture}}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => btnRef.current.open()}>
          <Text style={styles.btnTitle}>
            {type == 'business' ? 'Upload Logo' : 'Upload Photo'}
          </Text>
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
              <Text style={styles.btmSheetTitle}>
                {type == 'business' ? 'Upload Logo' : 'Upload Photo'}
              </Text>
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
    </View>
  );
};

export default InputPhoto;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimens.default_16,
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
