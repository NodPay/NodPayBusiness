import React, {useState, useRef, useMemo, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from 'react-native';
import AlphabetList from 'react-native-flatlist-alphabet';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {
  Button,
  ContactItem,
  Gap,
  InputSearch,
  PageTitle,
  SectionTitle,
  PeopleCircleItem,
  PeopleItem,
} from '../components';
import {NoContact, Starbucks} from '../assets';

const BusinessTransaction = ({navigation}) => {
  const [friendData, setFriendData] = useState([]);
  const [search, setSearch] = useState('');
  const [contactSelected, setContactSelected] = useState(null);

  const contactList = [
    {
      id: 1,
      value: 'Starbucks',
      photo: Starbucks,
      name: 'Starbucks',
      phone: '+92 - 3234 - 5456',
    },
    {
      id: 2,
      value: 'Burger King',
      photo: Starbucks,
      name: 'Burger King',
      phone: '+92 - 9801 - 2358',
    },
    {
      id: 3,
      value: 'Coca Cola',
      photo: Starbucks,
      name: 'Coca Cola',
      phone: '+92 - 9814 - 1498',
    },
    {
      id: 4,
      value: 'KFC',
      photo: Starbucks,
      name: 'KFC',
      phone: '+92 - 8519 -1257',
    },
    {
      id: 5,
      value: 'Pepsi',
      photo: Starbucks,
      name: 'Pepsi',
      phone: '+92 - 1897 - 1285',
    },
    {
      id: 6,
      value: 'Family Supermarket',
      photo: Starbucks,
      name: 'Family Supermarket',
      phone: '+92 - 1897 - 1285',
    },
    {
      id: 7,
      value: 'Starbucks',
      photo: Starbucks,
      name: 'Starbucks',
      phone: '+92 - 3234 - 5456',
    },
    {
      id: 8,
      value: 'Burger King',
      photo: Starbucks,
      name: 'Burger King',
      phone: '+92 - 9801 - 2358',
    },
    {
      id: 9,
      value: 'Coca Cola',
      photo: Starbucks,
      name: 'Coca Cola',
      phone: '+92 - 9814 - 1498',
    },
    {
      id: 10,
      value: 'KFC',
      photo: Starbucks,
      name: 'KFC',
      phone: '+92 - 8519 -1257',
    },
    {
      id: 11,
      value: 'Pepsi',
      photo: Starbucks,
      name: 'Pepsi',
      phone: '+92 - 1897 - 1285',
    },
    {
      id: 12,
      value: 'Family Supermarket',
      photo: Starbucks,
      name: 'Family Supermarket',
      phone: '+92 - 1897 - 1285',
    },
  ];

  const EmptyState = () => {
    return (
      <View style={styles.empty_state_container}>
        <Image source={NoContact} style={styles.icons} />
        <Text style={styles.desc}>
          You currently have no friend. Find who you know by connecting your
          NodPay to your phone contact or Facebook
        </Text>
      </View>
    );
  };

  // render contact state
  const [id, setId] = useState('');
  const [show, setShow] = useState(false);

  const RenderContact = () => {
    const [current, setCurrent] = useState(0);

    const btn = [
      {
        title: 'All',
      },
      {
        title: 'Local',
      },
      {
        title: 'International',
      },
    ];

    const FilterButton = ({title, onPress, index}) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={{
            paddingHorizontal: 15,
            height: 32,
            marginLeft: 8,
            borderRadius: 50,
            backgroundColor: current === index ? color.bg_color : '#F0F0FC',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: fonts.sofia_medium,
              color: current === index ? 'white' : color.bg_color,
              fontSize: dimens.default_16,
              lineHeight: dimens.default_16,
            }}>
            {title}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <KeyboardAvoidingView
          behavior="height"
          style={{paddingHorizontal: dimens.default_20}}>
          <InputSearch placeholder="Business name" backgroundColor="white" />
        </KeyboardAvoidingView>
        <Gap t={dimens.default_16} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Send & Request"
        titleStyle={{color: color.btn_black}}
        isRightQR
        onPressRight={() => navigation.navigate('QRCode')}
      />
      {friendData == null && (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <EmptyState />
        </View>
      )}
      {friendData != null && <RenderContact />}
      <ScrollView>
        <AlphabetList
          style={{flex: 1}}
          data={contactList}
          alphabetContainer={{opacity: 0}}
          renderSectionHeader={section => <></>}
          renderItem={(item, index) => (
            <PeopleItem
              key={index}
              photo={item.photo}
              name={item.name}
              phone={item.phone}
              selectedMode
              isSelected={
                contactSelected ? contactSelected.id === item.id : false
              }
              onPress={() =>
                contactSelected && contactSelected.id === item.id
                  ? setContactSelected(null)
                  : setContactSelected(item)
              }
            />
          )}
        />
        <Gap t={dimens.large_80} />
      </ScrollView>
      {contactSelected && (
        <View style={styles.wrapBtn}>
          <Button
            onPress={() =>
              navigation.navigate('BusinessTransactionForm', {
                userSelected: contactSelected,
              })
            }
            title="Continue"
            btnStyle={{backgroundColor: color.btn_black}}
            titleStyle={{color: color.btn_white_2}}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default BusinessTransaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  bg_contact: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -2,
    width: '100%',
    resizeMode: 'stretch',
  },
  peopleList: {
    marginHorizontal: -dimens.small,
  },
  icons: {
    height: 101,
    width: 101,
    resizeMode: 'cover',
  },
  empty_state_container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dimens.large_48,
  },
  desc: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: '#818386',
    textAlign: 'center',
    marginTop: dimens.default_16,
  },
  wrapBtn: {
    padding: dimens.default_22,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    textAlign: 'center',
    padding: dimens.default_16,
  },
  close_icon: {
    height: dimens.large_40,
    width: dimens.large_40,
  },
  add_friend_section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  add_friend_section_desc: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    padding: dimens.default_16,
    color: color.grey,
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  btnAllowContactAccess: {
    backgroundColor: color.btn_black,
    marginBottom: -8,
    height: 44,
  },
  btnSigninWithFacebook: {
    backgroundColor: '#548EFF',
    borderColor: color.btn_white,
    borderWidth: 1,
    marginBottom: dimens.supersmall,
  },
});
