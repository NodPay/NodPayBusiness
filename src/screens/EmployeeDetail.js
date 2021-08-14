import React, {useMemo, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {
  PageTitle,
  Tabbed,
  Gap,
  CustomerItem,
  Button,
  PersonalDetailItem,
  Modal,
} from '../components';
import {DefaultPict, Dropdown, GPS, ModalFailed, People1} from '../assets';

const Tab = createMaterialTopTabNavigator();

const Details = () => {
  return (
    <View style={{padding: dimens.default}}>
      <Text style={styles.title}>Personal Information</Text>
      <PersonalDetailItem left="Age" value="25 years old" />
      <PersonalDetailItem left="Gender" value="Male" isImage />
      <PersonalDetailItem left="Email" value="user@email.com" />
      <PersonalDetailItem left="Mobile" value="+62 869 6969696969" />
      <PersonalDetailItem left="Role" value="Admin" />
    </View>
  );
};

const Transaction = () => {
  const data = [
    {
      id: 0,
      message: 'coffe',
      isPaid: true,
    },
    {
      id: 1,
      message: 'tea',
      isPaid: true,
    },
    {
      id: 2,
      message: 'soda',
      isPaid: false,
    },
  ];

  return (
    <View style={{padding: dimens.default}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CustomerItem {...item} noRightTime />}
        renderSectionFooter={() => <Gap t={dimens.default} />}
      />
    </View>
  );
};

const EmployeeDetail = ({navigation}) => {
  const [visible, setVisible] = useState(false); //dropdown
  const [show, setShow] = useState(false); // modal remove employee
  const mainActionRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} />
      {/* Header */}
      <PageTitle
        navigation={navigation}
        isBlackArrow
        title="Employee Details"
        isOtherProfile
        titleStyle={{color: color.btn_black}}
        onEdit={() => setVisible(!visible)}
      />
      {/* Header End */}
      {/* Hero  */}
      <Pressable
        onPress={() => setVisible(false)}
        style={{height: 250, padding: dimens.default}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: dimens.default,
            alignItems: 'center',
          }}>
          <Image
            source={DefaultPict}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              resizeMode: 'contain',
              marginTop: 21,
              marginBottom: dimens.default,
            }}
          />
          <Text style={styles.name}>Name</Text>
          <Text style={styles.username}>@Username</Text>
        </View>
      </Pressable>
      {/* Hero End */}

      {/* Modal Dropdown */}
      {visible && (
        <View
          style={{
            top: 30,
            right: 0,
            position: 'absolute',
          }}>
          <ImageBackground
            source={Dropdown}
            style={{
              height: 150,
              width: 200,
              padding: 30,
            }}>
            <TouchableOpacity
              onPress={() => {
                setVisible(!visible);
              }}>
              <Text
                style={{
                  fontFamily: fonts.sofia_bold,
                  fontSize: 16,
                  color: color.btn_black,
                  marginTop: 8,
                  marginBottom: 8,
                }}>
                Edit Role
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisible(!visible);
                setShow(!show);
              }}>
              <Text
                style={{
                  fontFamily: fonts.sofia_bold,
                  fontSize: 16,
                  color: color.red,
                }}>
                Delete Employee
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      )}
      {/* Modal Dropdown End */}

      {/* Transaction & Detail */}
      <View style={{paddingBottom: 0, flex: 1}}>
        <Tab.Navigator
          tabBar={props => (
            <Tabbed {...props} containerStyle={styles.listContainer} />
          )}>
          <Tab.Screen name="Transaction" component={Transaction} />
          <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
      </View>
      {/* Transaction & Detail End */}

      {/* Modal Remove Employee */}
      <Modal
        visible={show}
        imageSrc={ModalFailed}
        title="Are you sure to delete employee?"
        subtitle="If you delete this employee, the data will permanently disappear"
        btn1Text="Cancel"
        btn2Text="Delete"
        isRowBtn
        btn1Onpress={() => {
          setShow(!show);
        }}
        btn2Onpress={() => {
          setShow(!show);
          navigation.replace('Employee');
        }}
        onClose={() => {
          setShow(!show);
        }}
      />
      {/* Modal Remove Employee end */}

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <View style={styles.btn}>
          <Button
            title="Accesbility"
            btnStyle={{flex: 1}}
            onPress={() => {
              navigation.navigate('Accesbility');
            }}
          />
          <Gap r={dimens.default_12} />
          <Button
            onPress={() => {
              navigation.navigate('PaySalary');
            }}
            title="Pay Salary"
            btnStyle={{backgroundColor: color.btn_black, flex: 1}}
            titleStyle={{color: 'white'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmployeeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    height: 72,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: dimens.default_16,
    flexDirection: 'row',
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
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    color: color.btn_black,
  },
});
