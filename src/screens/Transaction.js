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
import {NoContact, People1} from '../assets';

const Transaction = ({navigation}) => {
  const [friendData, setFriendData] = useState([]);
  const [search, setSearch] = useState('');
  const [contactSelected, setContactSelected] = useState(null);

  const topPeople = [
    {
      photo: People1,
      name: 'Ahmad',
      isInternasional: true,
    },
    {
      photo: People1,
      name: 'Amar',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Ben',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Bruno',
      isInternasional: true,
    },
    {
      photo: People1,
      name: 'Ahmad',
      isInternasional: true,
    },
    {
      photo: People1,
      name: 'Amar',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Ben',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Bruno',
      isInternasional: true,
    },
  ];

  var initialData = [
    {
      id: 0,
      name: 'Andi',
      phoneNumber: '+62 696969699696',
      added: false,
    },
    {
      id: 1,
      name: 'Bae',
      phoneNumber: '+62 696969699696',
      added: false,
    },
    {
      id: 3,
      name: 'Garry',
      phoneNumber: '+62 696969699696',
      added: false,
    },
    {
      id: 4,
      name: 'Widy',
      phoneNumber: '+62 696969699696',
      added: false,
    },
    {
      id: 5,
      name: 'Talha',
      phoneNumber: '+62 696969699696',
      added: true,
    },
    {
      id: 6,
      name: 'Gagan',
      phoneNumber: '+62 696969699696',
      added: true,
    },
    {
      id: 7,
      name: 'Muhammad',
      phoneNumber: '+62 696969699696',
      added: true,
    },
  ];
  const contactList = [
    {
      id: 1,
      value: 'Ahmad Malikil Kudus',
      photo: People1,
      name: 'Ahmad Malikil Kudus',
      phone: '+92 - 3234 - 5456',
      isInternasional: true,
    },
    {
      id: 2,
      value: 'Amar Lukman',
      photo: People1,
      name: 'Amar Lukman',
      phone: '+92 - 9801 - 2358',
      isInternasional: false,
    },
    {
      id: 3,
      value: 'Ammirudin Syarif',
      photo: People1,
      name: 'Ammirudin Syarif',
      phone: '+92 - 9814 - 1498',
      isInternasional: false,
    },
    {
      id: 4,
      value: 'Ben Kasyafana',
      photo: People1,
      name: 'Ben Kasyafana',
      phone: '+92 - 8519 -1257',
      isInternasional: true,
    },
    {
      id: 5,
      value: 'Bruno Fernandes',
      photo: People1,
      name: 'Bruno Fernandes',
      phone: '+92 - 1897 - 1285',
      isInternasional: false,
    },
    {
      id: 6,
      value: 'Bruno Mars',
      photo: People1,
      name: 'Bruno Mars',
      phone: '+92 - 1897 - 1285',
      isInternasional: false,
    },
    {
      id: 7,
      value: 'Ahmad Malikil Kudus',
      photo: People1,
      name: 'Ahmad Malikil Kudus',
      phone: '+92 - 3234 - 5456',
      isInternasional: true,
    },
    {
      id: 8,
      value: 'Amar Lukman',
      photo: People1,
      name: 'Amar Lukman',
      phone: '+92 - 9801 - 2358',
      isInternasional: false,
    },
    {
      id: 9,
      value: 'Ammirudin Syarif',
      photo: People1,
      name: 'Ammirudin Syarif',
      phone: '+92 - 9814 - 1498',
      isInternasional: false,
    },
    {
      id: 10,
      value: 'Ben Kasyafana',
      photo: People1,
      name: 'Ben Kasyafana',
      phone: '+92 - 8519 -1257',
      isInternasional: true,
    },
    {
      id: 11,
      value: 'Bruno Fernandes',
      photo: People1,
      name: 'Bruno Fernandes',
      phone: '+92 - 1897 - 1285',
      isInternasional: false,
    },
    {
      id: 12,
      value: 'Bruno Mars',
      photo: People1,
      name: 'Bruno Mars',
      phone: '+92 - 1897 - 1285',
      isInternasional: false,
    },
  ];

  const [data, setData] = useState(initialData);

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
          <InputSearch
            placeholder="Friend name, Phone Number, Business"
            backgroundColor="white"
          />
        </KeyboardAvoidingView>
        <Gap t={dimens.default_16} />
        <View style={{flexDirection: 'row', paddingLeft: dimens.small_10}}>
          {btn.map((item, index) => {
            return (
              <FilterButton
                index={index}
                title={item.title}
                onPress={() => setCurrent(index)}
              />
            );
          })}
        </View>
        <View style={{paddingHorizontal: dimens.default_20}}>
          <SectionTitle
            title="Top People"
            titleStyle={{
              fontSize: dimens.default_18,
            }}
            containerStyle={{
              paddingVertical: 0,
              marginTop: dimens.medium,
              marginBottom: -20,
            }}
          />
          <ScrollView
            style={styles.peopleList}
            showsHorizontalScrollIndicator={false}
            horizontal>
            {topPeople.map((item, index) => (
              <PeopleCircleItem
                key={index}
                photo={item.photo}
                name={item.name}
                isInternasional={item.isInternasional}
                onPress={() => {
                  setContactSelected(null);
                  navigation.navigate('TransactionForm', {
                    userSelected: item,
                  });
                }}
              />
            ))}
          </ScrollView>
        </View>
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
          renderSectionHeader={section => (
            <View
              style={{
                paddingVertical: dimens.small,
                paddingHorizontal: dimens.medium,
              }}>
              <Text
                style={{
                  color: color.btn_black,
                  fontFamily: fonts.sofia_bold,
                }}>
                {section.title}
              </Text>
            </View>
          )}
          renderItem={(item, index) => (
            <PeopleItem
              key={index}
              photo={item.photo}
              name={item.name}
              phone={item.phone}
              isInternasional={item.isInternasional}
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
              navigation.navigate('TransactionForm', {
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

export default Transaction;

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
