import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {DrawerItem, BalanceInfo} from '../moleculs';
import {
  DrawerHomeActive,
  DrawerSwitch,
  DrawerBank,
  DrawerInvite,
  DrawerNotification,
  DrawerSetting,
  DrawerHelp,
  DrawerLogout,
  ProfileExample,
  DrawerEmployee,
} from '../../assets';
import {
  dimens,
  color,
  fonts,
  removeData,
  storeData,
  getData,
} from '../../utils';
import {MainAction} from '../organism';

const BusinessDrawer = ({navigation}) => {
  // ref for main action to open a bottomsheet
  const mainActionRef = useRef(null);

  const [userRole, setUserRole] = useState('admin');

  useEffect(() => {
    // check session, if login as an admin / business , change the item rendered on drawer menu.
    getData('session')
      .then(res => {
        console.log('home get session', res.role);
        setUserRole(res.role);
      })
      .catch(e => console.log('error while getData', e));
  });

  return (
    <SafeAreaView style={styles.drawerContainer}>
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={ProfileExample}
            style={{height: 45, width: 45, resizeMode: 'contain'}}
          />
          <TouchableOpacity
            style={{marginLeft: dimens.default}}
            onPress={() => {
              navigation.navigate('BusinessProfile', {type: 'business'});
            }}>
            <Text style={styles.realname}>Sempolan.id</Text>
            <Text style={styles.username}>Food and Beverage</Text>
          </TouchableOpacity>
        </View>

        <View style={{padding: dimens.default}}>
          {userRole === 'admin' && (
            <BalanceInfo
              type="drawer"
              moneyAmount="400.000"
              onPressAdd={() => mainActionRef.current.open()}
            />
          )}
        </View>

        <DrawerItem
          label="Home"
          isActive
          image={DrawerHomeActive}
          onPress={() => {}}
        />
        {userRole === 'admin' && (
          <DrawerItem
            label="Employee"
            image={DrawerEmployee}
            onPress={() => {
              navigation.navigate('Employee');
            }}
          />
        )}
        <DrawerItem
          label="Notifications"
          image={DrawerNotification}
          onPress={() => {
            navigation.navigate('NotificationBusiness');
          }}
          unreadCount={4}
        />
        {userRole === 'admin' && (
          <>
            <DrawerItem
              label="Bank Account"
              image={DrawerBank}
              onPress={() => {
                navigation.navigate('BankAccount');
              }}
            />
            <DrawerItem
              label="Invite Other Business"
              image={DrawerInvite}
              onPress={() => {
                navigation.navigate('InviteOtherBusiness');
              }}
            />
            <DrawerItem
              label="Settings"
              image={DrawerSetting}
              onPress={() =>
                navigation.navigate('Settings', {type: 'business'})
              }
            />
          </>
        )}
        <DrawerItem label="Help" image={DrawerHelp} onPress={() => {}} />
      </ScrollView>

      <DrawerItem
        label="Log out"
        image={DrawerLogout}
        onPress={() => {
          removeData('session')
            .then(() => {
              console.log('session removed');
              storeData('session', {
                isLogin: false,
                isBoarding: true,
              });
            })
            .then(() => {
              navigation.replace('Splash');
            });
        }}
      />

      {/* MainAction BottomSheet */}
      <MainAction mainActionRef={mainActionRef} />
      {/* MainAction BottomSheet End*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    borderTopLeftRadius: dimens.default,
    borderBottomLeftRadius: dimens.default,
    flex: 1,
    backgroundColor: 'white',
  },
  scrollviewContainer: {
    flexGrow: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dimens.default,
    marginTop: dimens.medium,
  },
  realname: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    color: color.btn_black,
  },
  username: {
    fontFamily: fonts.sofia_regular,
    fontSize: 15,
    color: color.grey,
  },
});

export default BusinessDrawer;
