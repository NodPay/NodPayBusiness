import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

// where local files imported
import {setFormEditProfile} from '../../store/action';
import useStateContext from '../../store/useStateContext';
import {color, dimens} from '../../utils';
import {Gap} from '../atoms';
import {SectionTitle, InputPhoto, InputText, InputOption} from '../moleculs';

/**
 * @param  {bool} {isFamilyRelation if its true, render the family relation component
 * @param  {bool} withoutSectionTitle} if its true, render sectionTitle component
 */
const PersonalDetailsSection = ({isFamilyRelation, withoutSectionTitle}) => {
  const {state, dispatch} = useStateContext();

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
          value={state.formEditProfile.familyRelationName}
          placeholder="Enter name.."
          onChangeText={value => {
            dispatch(setFormEditProfile('familyRelationName', value));
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
        value={state.formEditProfile.firstName}
        onChangeText={value => dispatch(setFormEditProfile('firstName', value))}
      />
      <InputText
        label="Last Name"
        value={state.formEditProfile.lastName}
        onChangeText={value => dispatch(setFormEditProfile('lastName', value))}
      />
      <InputText
        label="Username"
        value={state.formEditProfile.username}
        onChangeText={value => dispatch(setFormEditProfile('username', value))}
      />
      <InputText
        label="Age"
        keyboardType="number-pad"
        value={state.formEditProfile.age}
        onChangeText={value => dispatch(setFormEditProfile('age', value))}
      />
      <Gap t={dimens.default_16} />
      <InputOption
        user={state.formEditProfile}
        onPress1={() => dispatch(setFormEditProfile('gender', 'male'))}
        onPress2={() => dispatch(setFormEditProfile('gender', 'female'))}
      />
      <InputText
        label="Email"
        value={state.formEditProfile.email}
        keyboardType="email-address"
        onChangeText={value => dispatch(setFormEditProfile('email', value))}
      />
      <InputText
        label="Short Bio"
        value={state.formEditProfile.shortBio}
        onChangeText={value => dispatch(setFormEditProfile('bio', value))}
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
