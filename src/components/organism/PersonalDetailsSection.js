import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

// where local files imported
import {setFormRegister} from '../../store/action';
import useStateContext from '../../store/useStateContext';
import {color, dimens, fonts} from '../../utils';
import {Gap} from '../atoms';
import {SectionTitle, InputPhoto, InputText, InputOption} from '../moleculs';
/**
 * @param  {bool} {isFamilyRelation if its true, render the family relation component
 * @param  {bool} withoutSectionTitle} if its true, render sectionTitle component
 */
const PersonalDetailsSection = ({isFamilyRelation, withoutSectionTitle}) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    age: '',
    gender: '',
    email: '',
    shortBio: '',
  });

  const {dispatch} = useStateContext();

  const [familyRelation, setFamilyRelation] = useState('');

  if (isFamilyRelation) {
    return (
      <View style={{flex: 1}}>
        <SectionTitle
          containerStyle={{
            padding: 0,
            // paddingHorizontal: dimens.default_16,
          }}
          title="Family and Relation"
          titleStyle={{color: 'black', fontSize: dimens.default_22}}
          subtitle="Enter your father, mother or spouse name"
          subTitleStyle={{
            color: color.grey,
            fontSize: dimens.default_16,
          }}
        />
        <Gap t={-50} />

        <InputText
          value={familyRelation}
          placeholder="Enter name.."
          onChangeText={value => {
            setFamilyRelation(value);
            dispatch(setFormRegister('familyRelationName', value));
          }}
        />
        <Gap b={50} />
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
      {!withoutSectionTitle && (
        <SectionTitle
          containerStyle={{
            padding: 0,
            // paddingHorizontal: dimens.default_16,
          }}
          title="Personal Details"
          titleStyle={{color: 'black', fontSize: dimens.default_22}}
          subtitle="Tell us more about you"
          subTitleStyle={{
            color: color.grey,
            fontSize: dimens.default_16,
          }}
        />
      )}
      <Gap t={dimens.default_16} />
      <InputPhoto type="regular" />
      <InputText
        label="First Name"
        value={user.firstName}
        onChangeText={value => {
          setUser({...user, firstName: value});
          dispatch(setFormRegister('firstName', value));
        }}
      />
      <InputText
        label="Last Name"
        value={user.lastName}
        onChangeText={value => {
          setUser({...user, lastName: value});
          dispatch(setFormRegister('lastName', value));
        }}
      />
      <InputText
        label="Username"
        value={user.username}
        onChangeText={value => {
          setUser({...user, username: value});
          dispatch(setFormRegister('username', value));
        }}
      />
      <InputText
        label="Age"
        keyboardType="number-pad"
        value={user.age}
        onChangeText={value => {
          setUser({...user, age: value});
          dispatch(setFormRegister('age', value));
        }}
      />
      <Gap t={dimens.default_16} />
      <InputOption user={user} setUser={setUser} dispatch={dispatch} />
      <InputText
        label="Email"
        value={user.email}
        keyboardType="email-address"
        onChangeText={value => {
          setUser({...user, email: value});
          dispatch(setFormRegister('email', value));
        }}
      />
      <InputText
        label="Short Bio"
        value={user.shortBio}
        onChangeText={value => {
          setUser({...user, shortBio: value});
          dispatch(setFormRegister('bio', value));
        }}
      />
      <Gap b={dimens.default_16} />
    </ScrollView>
  );
};

export default PersonalDetailsSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
