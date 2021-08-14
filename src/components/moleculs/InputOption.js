import React from 'react';
import {useReducer} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

//where local files imported
import {Male, Female, MaleActive, FemaleActive} from '../../assets';
import {setFormRegister} from '../../store/action';
import {dimens, fonts} from '../../utils';
import {Gap, FormLabel} from '../atoms';

const InputOption = ({user, setUser, dispatch}) => {
  return (
    <>
      <FormLabel label="Gender" />
      <Gap t={dimens.default_12} />
      <View style={styles.container}>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            onPress={() => {
              setUser({...user, gender: 'male'});
              dispatch(setFormRegister('gender', 'male'));
            }}>
            <Image
              source={user.gender == 'male' ? MaleActive : Male}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Male</Text>
        </View>
        <Gap r={dimens.default_16} />
        <View style={styles.genderContainer}>
          <TouchableOpacity
            onPress={() => {
              setUser({...user, gender: 'female'});
              dispatch(setFormRegister('gender', 'female'));
            }}>
            <Image
              source={user.gender == 'female' ? FemaleActive : Female}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Female</Text>
        </View>
      </View>
    </>
  );
};

export default InputOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginRight: dimens.default_16,
  },
  text: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
  },
});
