import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {PageTitle, Button, StepFormBusiness} from '../components';
import useStateContext from '../store/useStateContext';
import {Next} from '../assets';

const RegisterBusiness = ({navigation}) => {
  const {state, dispatch} = useStateContext();
  const {activeStepBusiness, isCompleteBusiness, formRegisterBusiness} = state;

  const onBasicInformation = () => {
    const {logo, name, category, description, email, number} =
      formRegisterBusiness;
    if (
      logo == '' ||
      name == '' ||
      category == '' ||
      description == '' ||
      email == '' ||
      number == ''
    ) {
      dispatch({type: 'SET_ERROR_REGISTER_BUSINESS', payload: true});
    } else {
      dispatch({type: 'SET_ACTIVE_STEP_BUSINESS'});
      dispatch({type: 'SET_ERROR_REGISTER_BUSINESS', payload: false});
    }
  };

  const onNext = () => {
    // basic information
    if (activeStepBusiness == 0) {
      onBasicInformation();
    }

    // upload document
    if (activeStepBusiness == 1) {
      dispatch({type: 'SET_ACTIVE_STEP_BUSINESS'});
      // TODO
    }

    // location
    if (activeStepBusiness == 2) {
      console.log('form register', state.formRegister);
      dispatch({type: 'SET_IS_COMPLETED_BUSINESS', payload: true});
      navigation.replace('AppDrawer', {
        screen: 'Home',
      });

      // TODO
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />
      <PageTitle
        titleStyle={{color: color.btn_black, fontSize: dimens.default_22}}
        // isBlackArrow
        title="Create Account"
      />
      <StepFormBusiness
        activeStepBusiness={activeStepBusiness}
        isCompleteBusiness={isCompleteBusiness}
      />
      <View
        style={{
          paddingVertical: dimens.default_16,
          backgroundColor: 'white',
          justifyContent: 'center',
          paddingHorizontal: dimens.default_16,
        }}>
        <Button
          onPress={onNext}
          title={activeStepBusiness == 2 ? 'Create Account' : 'Next'}
          btnStyle={{
            backgroundColor: color.btn_black,
          }}
          titleStyle={{color: 'white'}}
          iconRight={Next}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
});
