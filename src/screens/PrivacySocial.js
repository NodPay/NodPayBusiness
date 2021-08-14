import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView, Text} from 'react-native';
import {uniqBy} from 'lodash';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {
  Button,
  InputSwitch,
  InputCheck,
  PageTitle,
  SettingsSaveButton,
} from '../components';
import {FacebookWhite} from '../assets';

const PrivacySocial = ({navigation}) => {
  const [profilePrivate, setProfilePrivate] = useState(true);
  const [valueList, setValueList] = useState([
    {
      group: 'Transactions',
      label: 'From friend of Fiends',
      value: false,
    },
    {
      group: 'Transactions',
      label: 'From your friend only',
      value: false,
    },
    {
      group: 'Transactions',
      label: 'From everyone',
      value: true,
    },
    {
      group: 'Comments',
      label: 'From friend of Fiends',
      value: false,
    },
    {
      group: 'Comments',
      label: 'From your friend only',
      value: false,
    },
    {
      group: 'Comments',
      label: 'From everyone',
      value: true,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isCloseMode
        title="Privacy & Socials"
        titleStyle={{color: color.btn_black}}
        onPressClose={() => navigation.pop()}
      />
      <ScrollView style={styles.content}>
        <InputSwitch
          label="Make Profile Private"
          value={profilePrivate}
          onChange={setProfilePrivate}
        />
        <Text style={styles.label}>Facebook Connection</Text>
        <Button
          iconLeft={FacebookWhite}
          iconStyle={{width: dimens.default_16, height: dimens.default_16}}
          title="Disconnect Facebook"
          btnStyle={{
            backgroundColor: color.comment_active,
            marginBottom: dimens.default_16,
            height: dimens.large_40,
          }}
          titleStyle={{
            fontFamily: fonts.sofia_bold,
            color: 'white',
          }}
          onPress={() => {}}
        />
        {uniqBy(valueList, function (e) {
          return e.group;
        }).map((itemGroup, indexGroup) => (
          <View key={indexGroup}>
            <Text style={styles.labelGroup}>{itemGroup.group}</Text>
            {valueList
              .filter(item => item.group === itemGroup.group)
              .map((item, index) => (
                <InputCheck
                  key={index}
                  label={item.label}
                  value={item.value}
                  onChange={() => {
                    const newData = valueList.map(row => {
                      if (row.group === itemGroup.group) {
                        if (row.label === item.label) {
                          return {
                            ...row,
                            value: !row.value,
                          };
                        } else {
                          return {
                            ...row,
                            value: false,
                          };
                        }
                      }

                      return row;
                    });

                    setValueList(newData);
                  }}
                />
              ))}
          </View>
        ))}
        <View style={styles.gap} />
      </ScrollView>
      <SettingsSaveButton />
    </SafeAreaView>
  );
};

export default PrivacySocial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  content: {
    padding: dimens.default_16,
    flex: 1,
  },
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_black,
    paddingVertical: dimens.small,
  },
  labelGroup: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey,
    paddingTop: dimens.small_10,
  },
  gap: {
    height: 50,
  },
});
