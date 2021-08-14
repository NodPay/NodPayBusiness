import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Next} from '../assets';

//where local files imported
import {Button, Gap, InputText, PageTitle} from '../components';
import {setFormRegister} from '../store/action';
import useStateContext from '../store/useStateContext';
import {color, dimens} from '../utils';

const ScanResult = ({navigation, route}) => {
  const {state, dispatch} = useStateContext();
  let {path} = route.params.data;

  const [data, setData] = useState({
    cnicNumber: '',
    name: '',
    dateOfBirth: '',
    states: '',
    image: path,
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <PageTitle
        title="CNIC"
        isBlackArrow
        titleStyle={{color: color.btn_black}}
      />
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Gap t={dimens.default_16} />
        <Image source={{uri: path}} style={styles.image} />
        <Gap t={dimens.default_16} />
        <InputText
          label="CNIC Number"
          value={data.cnicNumber}
          onChangeText={val => {
            setData({...data, cnicNumber: val});
            dispatch(setFormRegister('cnicNumber', val));
          }}
        />
        <InputText
          label="Name"
          value={data.name}
          onChangeText={val => {
            setData({...data, name: val});
            dispatch(setFormRegister('cnicName', val));
          }}
        />
        <InputText
          label="Date of Birth"
          value={data.dateOfBirth}
          onChangeText={val => {
            setData({...data, dateOfBirth: val});
            dispatch(setFormRegister('cnicDob', val));
          }}
        />
        <InputText
          label="States"
          value={data.states}
          onChangeText={val => {
            setData({...data, states: val});
            dispatch(setFormRegister('cnicStates', val));
          }}
        />
        <Gap b={dimens.medium} />
      </ScrollView>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'android' ? false : true}>
        <View style={styles.wrap_btn}>
          <Button
            onPress={() => {
              dispatch(setFormRegister('cnicImage', path));
              navigation.navigate('Register');
              dispatch({type: 'SET_ACTIVE_STEP_PAYLOAD', payload: 3});
              dispatch({type: 'SET_BUTTON', payload: false});
            }}
            title="Countinue With This"
            btnStyle={{
              backgroundColor: color.btn_black,
            }}
            titleStyle={{color: 'white'}}
            iconRight={Next}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ScanResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_grey,
    paddingHorizontal: dimens.default_16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: dimens.default_12,
    resizeMode: 'cover',
  },
  wrap_btn: {
    paddingHorizontal: dimens.default_16,
  },
});
