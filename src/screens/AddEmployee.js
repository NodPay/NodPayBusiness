import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {
  Button,
  Gap,
  PageTitle,
  PickerItem,
  Modal,
  PersonalDetailItem,
} from '../components';
import {DefaultPict, MaleActive, ModalSuccess} from '../assets';

const AddEmployee = ({navigation}) => {
  const data = [
    {
      id: 0,
      title: 'Select Role',
    },
    {
      id: 1,
      title: 'Admin',
    },
  ];
  const [selectedRole, setSelectedRole] = useState(data[0].title);

  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        visible={visible}
        imageSrc={ModalSuccess}
        title="New Employee Added"
        subtitle="Your new employee has been successfuly added, now they can log in to their account"
        onClose={() => {
          setVisible(false);
          navigation.replace('AppBusinessDrawer');
        }}
        btn1Text="Back to Homepage"
        btn1Onpress={() => {
          setVisible(false);
          navigation.replace('AppBusinessDrawer');
        }}
      />
      <StatusBar backgroundColor={color.bg_grey} />
      <PageTitle
        title="Add Employee"
        isBlackArrow
        titleStyle={{color: color.btn_black}}
      />

      {/* Hero */}
      <View
        style={{
          height: 450,
          padding: dimens.default,
          marginTop: 82,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: dimens.default,
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={DefaultPict}
              style={{
                height: 116,
                width: 116,
                borderRadius: 116,
                resizeMode: 'contain',
                position: 'relative',
                top: -82 + 24,
              }}
            />
            <Gap t={-50} />
            <Text style={styles.name}>Name</Text>
            <Gap t={4} />
            <Text style={styles.username}>@Username</Text>
          </View>
          <Divider t={24} />
          <View
            style={{
              padding: dimens.default,
              justifyContent: 'flex-start',
            }}>
            <Text style={styles.title}>Personal Details</Text>
            <PersonalDetailItem left="Age" value="25 years old" />
            <PersonalDetailItem left="Gender" value="Male" isImage />
            <PersonalDetailItem left="Email" value="user@email.com" />
            <PersonalDetailItem left="Mobile" value="+62 869 6969696969" />
          </View>
        </View>
      </View>
      {/* Hero End */}

      {/* Picker */}
      <View style={{paddingHorizontal: dimens.default}}>
        <PickerItem
          label="Select Role"
          labelStyle={styles.title}
          data={data}
          selectedCategory={selectedRole}
          setSelectedCategory={item => {
            setSelectedRole(item.title);
            if (item.id == 0) {
              // Select Role
            } else {
              // Dispatch
            }
          }}
        />
      </View>
      {/* Picker End */}

      {/* Confirm Button */}
      <View style={styles.bottomBtn}>
        <Button
          title="Confirm"
          btnStyle={{backgroundColor: color.btn_black}}
          titleStyle={{color: color.btn_white}}
          onPress={() => setVisible(true)}
        />
      </View>
      {/* Confirm Button End */}
    </SafeAreaView>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_grey,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    color: color.btn_black,
  },
  bottomBtn: {
    paddingHorizontal: dimens.default,
    paddingVertical: dimens.default,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
  name: {
    fontFamily: fonts.sofia_bold,
    fontSize: 24,
    color: color.btn_black,
  },
  username: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    color: color.grey_3,
  },
});
