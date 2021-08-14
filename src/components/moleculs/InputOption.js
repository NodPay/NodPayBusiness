import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

//where local files imported
import {Male, Female, MaleActive, FemaleActive} from '../../assets';
import {dimens, fonts} from '../../utils';
import {Gap, FormLabel} from '../atoms';
/**
 * @param  {object} user          user object containing user data
 * @param  {function} onPress1    when data is changed option 1
 * @param  {function} onPress2    when data is changed option 2
 */
const InputOption = ({user, onPress1, onPress2}) => {
  return (
    <>
      <FormLabel label="Gender" />
      <Gap t={dimens.default_12} />
      <View style={styles.container}>
        <View style={styles.genderContainer}>
          <TouchableOpacity onPress={onPress1}>
            <Image
              source={user.gender == 'male' ? MaleActive : Male}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Male</Text>
        </View>
        <Gap r={dimens.default_16} />
        <View style={styles.genderContainer}>
          <TouchableOpacity onPress={onPress2}>
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
