import React, {useRef} from 'react';
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
  DrawerCard,
  DrawerBusiness,
  DrawerContact,
  DrawerBank,
  DrawerInvite,
  DrawerNotification,
  DrawerSetting,
  DrawerHelp,
  DrawerLogout,
  ProfileExample,
} from '../../assets';
import {dimens, color, fonts, removeData, storeData} from '../../utils';
import {MainAction} from '../organism';

const Drawer = ({navigation}) => {
  // ref for open bottomsheet
  const mainActionRef = useRef(null);

  return (
    <SafeAreaView style={styles.drawerContainer}>
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}
          activeOpacity={0.6}
          style={styles.profileContainer}>
          <Image
            source={ProfileExample}
            style={{height: 45, width: 45, resizeMode: 'contain'}}
          />
          <View style={{marginLeft: dimens.default}}>
            <Text style={styles.realname}>Ahmad Jalaluddin</Text>
            <Text style={styles.username}>@ahmadjalaluddin</Text>
          </View>
        </TouchableOpacity>

        <View style={{padding: dimens.default}}>
          <BalanceInfo
            type="drawer"
            moneyAmount="400.000"
            onPressAdd={() => mainActionRef.current.open()}
          />
        </View>

        <DrawerItem
          label="Home"
          isActive
          image={DrawerHomeActive}
          onPress={() => {}}
        />
        <DrawerItem label="My Card" image={DrawerCard} onPress={() => {}} />
        <DrawerItem
          label="Contacts"
          image={DrawerContact}
          onPress={() => {
            navigation.navigate('Contact');
          }}
        />
        <DrawerItem
          label="Bank Account"
          image={DrawerBank}
          onPress={() => {
            navigation.navigate('BankAccount');
          }}
        />
        <DrawerItem
          label="Invite Your Friends"
          image={DrawerInvite}
          onPress={() => {
            navigation.navigate('InviteFriend');
          }}
        />
        <DrawerItem
          label="Notifications"
          image={DrawerNotification}
          onPress={() => {
            navigation.navigate('Notification');
          }}
          unreadCount={4}
        />
        <DrawerItem
          label="Settings"
          image={DrawerSetting}
          onPress={() => navigation.navigate('Settings', {type: 'personal'})}
        />
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

export default Drawer;
