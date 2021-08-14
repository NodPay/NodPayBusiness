import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Clipboard from '@react-native-community/clipboard';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {
  Button,
  EmployeeItem,
  Gap,
  InputText,
  MainActionList,
  PageTitle,
} from '../components';
import {CloseRed, SearchBlack, InviteBlack, Copy} from '../assets';

const Employee = ({navigation}) => {
  const btnRef = useRef(null);
  const [showInvite, setShowInvite] = useState(false);

  const data = [
    {
      id: 0,
      name: 'bae',
      job: 'software engineer',
      added: 'July 22, 2021',
      invited: true,
      isOnline: true,
    },
    {
      id: 1,
      name: 'andi',
      job: 'software engineer',
      added: 'July 22, 2021',
      invited: true,
      isOnline: false,
    },
    {
      id: 2,
      name: 'garry',
      job: 'software engineer',
      added: 'July 22, 2021',
      invited: false,
      isOnline: false,
    },
    {
      id: 3,
      name: 'bae',
      job: 'software engineer',
      added: 'July 22, 2021',
      invited: true,
      isOnline: true,
    },
    {
      id: 4,
      name: 'andi',
      job: 'software engineer',
      added: 'July 22, 2021',
      invited: true,
      isOnline: false,
    },
    {
      id: 5,
      name: 'garry',
      job: 'software engineer',
      added: 'July 22, 2021',
      invited: false,
      isOnline: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} />
      <PageTitle
        title="Employee"
        titleStyle={{color: color.btn_black}}
        isBlackArrow
      />
      {/* Employee Count */}
      <View
        style={{
          paddingTop: dimens.default,
          paddingHorizontal: dimens.default,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={[styles.wrapper, {marginRight: 8}]}>
          <Text style={styles.number}>8</Text>
          <Text style={styles.description}>Total Employee</Text>
        </View>
        <View
          style={[
            styles.wrapper,
            {
              marginLeft: 8,
              backgroundColor: color.green3,
              borderColor: color.green,
            },
          ]}>
          <Text style={[styles.number, {color: color.green}]}>6</Text>
          <Text style={styles.description}>Currently Online</Text>
        </View>
        {/* Employee Count End */}
      </View>
      <View style={{padding: dimens.default, flex: 1, marginBottom: 72}}>
        <Text
          style={[
            styles.number,
            {
              color: color.btn_black,
              fontSize: dimens.default_18,
            },
          ]}>
          Your Employee
        </Text>
        <Gap t={dimens.default} />
        {/* Employe list */}

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <EmployeeItem
              {...item}
              isPending={!item.invited ?? true}
              onDetail={() => navigation.navigate('EmployeeDetail')}
            />
          )}
        />

        {/* Employe list end */}
      </View>
      {/* Bottom */}
      <View style={styles.bottom}>
        <Button
          title="+ New Employee"
          titleStyle={{color: color.btn_white}}
          btnStyle={{backgroundColor: color.btn_black}}
          onPress={() => btnRef.current.open()}
        />
      </View>
      {/* Bottom End */}

      {/* Bottomsheet */}
      <RBSheet
        ref={btnRef}
        height={260}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: dimens.default_16,
            borderTopRightRadius: dimens.default_16,
            padding: dimens.default,
          },
        }}>
        <View>
          <View
            style={{
              paddingVertical: dimens.default,
              justifyContent: 'flex-start',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                btnRef.current.close();
                setTimeout(() => {
                  setShowInvite(false);
                }, 1000);
              }}>
              <Image source={CloseRed} style={{height: 40, width: 40}} />
            </TouchableOpacity>
            <Text style={styles.title}>
              {showInvite ? 'Share Invitation Link' : 'Add New Employee'}
            </Text>
          </View>

          {showInvite ? (
            <View>
              <Gap t={30} />
              <InputText
                labelStyle={{color: color.btn_black}}
                label=""
                placeholder=""
                value="nodpay.co/BB3435"
                editable={false}
                iconRight={Copy}
                onPressRight={() => Clipboard.setString('nodpay.co/BB3435')}
                containerStyle={{marginBottom: dimens.default_14, marginTop: 0}}
                inputStyle={{
                  backgroundColor: color.grey_7,
                  elevation: 0,
                  shadowOpacity: 0,
                  marginTop: 0,
                }}
              />
              <Gap b={10} />
              <Button
                title="Share With More People!"
                titleStyle={{color: 'white'}}
                btnStyle={{backgroundColor: color.btn_black}}
              />
            </View>
          ) : (
            <>
              <MainActionList
                icon={SearchBlack}
                title="Search Account"
                description="Search existing NodPay account"
                // onPress={() => navigation.navigate('CashACheck')}
              />
              <MainActionList
                icon={InviteBlack}
                title="Invite Employee"
                description="Invite employee to NodPay"
                onPress={() => setShowInvite(true)}
              />
            </>
          )}
        </View>
      </RBSheet>
      {/* Bottomsheet End */}
    </SafeAreaView>
  );
};

export default Employee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_grey,
  },
  wrapper: {
    borderWidth: 2,
    borderColor: color.bg_color,
    justifyContent: 'center',
    alignItems: 'center',
    height: 78,
    flex: 1,
    borderRadius: 16,
    backgroundColor: color.purple,
  },
  number: {
    fontFamily: fonts.sofia_bold,
    fontSize: 24,
    color: color.bg_color,
  },
  description: {
    fontFamily: fonts.sofia_regular,
    fontSize: 14,
    color: color.btn_black,
  },
  bottom: {
    paddingVertical: dimens.default_16,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: dimens.default_16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    textAlign: 'center',
    flex: 1,
  },
});
