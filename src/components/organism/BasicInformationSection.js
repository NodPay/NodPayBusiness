import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';

// where local files imported
import {Gap} from '../atoms';
import {color, dimens, fonts} from '../../utils';
import {InputText, SectionTitle} from '../moleculs';
import {Camera, CloseRed, Gallery, UploadLogo} from '../../assets';
import {setFormRegisterBusiness} from '../../store/action';
import useStateContext from '../../store/useStateContext';
import {ErrorMessage, PickerItem} from '../atoms';

const BasicInformationSection = ({}) => {
  // globlal form
  const {state, dispatch} = useStateContext();
  const {errorBusiness, formRegisterBusiness} = state;
  // current data state
  const [data, setData] = useState({
    logo: '',
    name: '',
    category: '',
    description: '',
    email: '',
    number: '',
  });
  // current image
  const [picture, setPicture] = useState('');
  // btn ref for bottomsheet
  const btnRef = useRef(null);

  // function to open camera
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(res => {
      console.log('result', res);
      setPicture(res.path);
      setData({...data, logo: res.path});
      dispatch(setFormRegisterBusiness('logo', res.path));
    });
    btnRef.current.close();
  };

  // function to open gallery
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    }).then(res => {
      console.log('result', res);
      setPicture(res.path);
      setData({...data, logo: res.path});
      dispatch(setFormRegisterBusiness('logo', res.path));
    });
    btnRef.current.close();
  };

  // initial data for bottomsheet
  const [category, setCategory] = useState([
    {
      id: 0,
      title: 'Select Category',
    },
    {
      id: 1,
      title: 'Food And Beverage',
    },
  ]);

  // current data selected
  const [selectedCategory, setSelectedCategory] = useState(category[0].title);

  return (
    <View style={{flex: 1}}>
      <SectionTitle
        containerStyle={{
          padding: 0,
          // paddingHorizontal: dimens.default_16,
        }}
        title="Business Information"
        titleStyle={{color: 'black', fontSize: dimens.default_22}}
        subtitle="Tell us more about your business"
        subTitleStyle={{
          color: color.grey,
          fontSize: dimens.default_16,
        }}
      />

      <ScrollView style={{paddingBottom: dimens.default}}>
        <Text style={styles.label}>Business Logo</Text>
        {picture == '' && (
          <TouchableOpacity
            style={{paddingTop: dimens.default}}
            onPress={() => btnRef.current.open()}>
            <Image
              source={UploadLogo}
              style={{resizeMode: 'contain', height: 135, width: '100%'}}
            />
          </TouchableOpacity>
        )}
        {picture != '' && (
          <View style={styles.content}>
            <Image source={{uri: picture}} style={styles.image} />
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={() => btnRef.current.open()}>
              <Text style={styles.btnTitle}>Upload Photo</Text>
            </TouchableOpacity>
          </View>
        )}
        {formRegisterBusiness.logo == '' && errorBusiness && (
          <ErrorMessage message="please input a photo." />
        )}
        <InputText
          label="Business Name"
          value={data.name}
          placeholder="Enter your business name"
          placeholderTextColor={color.grey_2}
          onChangeText={value => {
            setData({...data, name: value});
            dispatch(setFormRegisterBusiness('name', value));
          }}
        />
        {formRegisterBusiness.name == '' && errorBusiness && (
          <ErrorMessage message="please add your business name" />
        )}
        {/* <InputText
          label="Business Category"
          value={data.category}
          placeholder="Select Category"
          placeholderTextColor={color.grey_2}
          onChangeText={value => {
            setData({...data, category: value});
            dispatch(setFormRegisterBusiness('category', value));
          }}
        /> */}
        <PickerItem
          data={category}
          selectedCategory={selectedCategory}
          setSelectedCategory={item => {
            setSelectedCategory(item.title);
            if (item.id == 0) {
              // select category id
              dispatch(setFormRegisterBusiness('category', ''));
            } else {
              dispatch(setFormRegisterBusiness('category', item.title));
            }
          }}
          label="Business Category"
        />
        {formRegisterBusiness.category == '' && errorBusiness && (
          <ErrorMessage message="please select your business category" />
        )}
        <InputText
          label="Business Description"
          value={data.description}
          placeholder="Enter your business description"
          placeholderTextColor={color.grey_2}
          onChangeText={value => {
            setData({...data, description: value});
            dispatch(setFormRegisterBusiness('description', value));
          }}
        />
        {formRegisterBusiness.description == '' && errorBusiness && (
          <ErrorMessage message="please add your business description" />
        )}
        <InputText
          label="Business Email"
          value={data.email}
          placeholder="Enter your business email"
          keyboardType="email-address"
          placeholderTextColor={color.grey_2}
          onChangeText={value => {
            setData({...data, email: value});
            dispatch(setFormRegisterBusiness('email', value));
          }}
        />
        {formRegisterBusiness.email == '' && errorBusiness && (
          <ErrorMessage message="please add your business email" />
        )}
        <InputText
          label="Business Number"
          value={data.number}
          placeholder="Enter your business number"
          keyboardType="number-pad"
          placeholderTextColor={color.grey_2}
          onChangeText={value => {
            setData({...data, number: value});
            dispatch(setFormRegisterBusiness('number', value));
          }}
        />
        {formRegisterBusiness.number == '' && errorBusiness && (
          <ErrorMessage message="please add your business number" />
        )}
      </ScrollView>

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
    </View>
  );
};

export default BasicInformationSection;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
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
