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

const NotificationSetting = ({navigation}) => {
  const [pushNotif, setPushNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);
  const [valueList, setValueList] = useState([
    {
      group: 'Likes',
      label: 'Off',
      value: false,
    },
    {
      group: 'Likes',
      label: 'From your friend only',
      value: false,
    },
    {
      group: 'Likes',
      label: 'From everyone',
      value: true,
    },
    {
      group: 'Comments',
      label: 'Off',
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
    {
      group: 'Request',
      label: 'Off',
      value: false,
    },
    {
      group: 'Request',
      label: 'From your friend only',
      value: false,
    },
    {
      group: 'Request',
      label: 'From everyone',
      value: true,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isCloseMode
        title="Notifications Settings"
        titleStyle={{color: color.btn_black}}
        onPressClose={() => navigation.pop()}
      />
      <ScrollView style={styles.content}>
        <InputSwitch
          label="Push Notfications"
          value={pushNotif}
          onChange={setPushNotif}
        />
        <InputSwitch
          label="Email Notifications"
          value={emailNotif}
          onChange={setEmailNotif}
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

export default NotificationSetting;

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
