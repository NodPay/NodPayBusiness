import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, SafeAreaView, Image} from 'react-native';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {
  PageTitle,
  Button,
  InputSearch,
  SectionTitle,
  PeopleCircleItem,
  PeopleItem,
} from '../components';
import {PeopleInviteFriend, People1} from '../assets';

const Search = ({route, navigation}) => {
  const {type} = route.params;

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
  const recentTransaction = [
    {
      photo: People1,
      name: 'Ahmad Malikil Kudus',
      phone: '+92 - 3234 - 5456',
      isInternasional: true,
    },
    {
      photo: People1,
      name: 'Amar Lukman',
      phone: '+92 - 9801 - 2358',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Ammirudin Syarif',
      phone: '+92 - 9814 - 1498',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Ben Kasyafana',
      phone: '+92 - 8519 -1257',
      isInternasional: true,
    },
    {
      photo: People1,
      name: 'Bruno Fernandes',
      phone: '+92 - 1897 - 1285',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Bruno Mars',
      phone: '+92 - 1897 - 1285',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Ahmad Malikil Kudus',
      phone: '+92 - 3234 - 5456',
      isInternasional: true,
    },
    {
      photo: People1,
      name: 'Amar Lukman',
      phone: '+92 - 9801 - 2358',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Ammirudin Syarif',
      phone: '+92 - 9814 - 1498',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Ben Kasyafana',
      phone: '+92 - 8519 -1257',
      isInternasional: true,
    },
    {
      photo: People1,
      name: 'Bruno Fernandes',
      phone: '+92 - 1897 - 1285',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Bruno Mars',
      phone: '+92 - 1897 - 1285',
      isInternasional: false,
    },
  ];
  const searchPeople = [
    {
      photo: People1,
      name: 'Joana Banderas',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'John Brothers',
      isInternasional: false,
    },
    {
      photo: People1,
      name: 'Buroana Jonathan',
      isInternasional: false,
    },
  ];
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Search"
        titleStyle={{color: color.btn_black}}
        isRightQR
        onPressRight={() => navigation.navigate('QRCode')}
      />
      <View style={styles.containerContent}>
        <InputSearch
          backgroundColor={color.bg_grey}
          placeholder="Friend Name, Business, Phone Number"
          value={search}
          onChangeText={setSearch}
        />
        {search === '' && (
          <>
            <SectionTitle
              title="Top People"
              titleStyle={{
                fontSize: dimens.default_16,
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
                />
              ))}
            </ScrollView>
            <Button
              onPress={() =>
                type === 'business'
                  ? navigation.navigate('InviteOtherBusiness')
                  : navigation.navigate('InviteFriend')
              }
              title={
                type === 'business' ? 'Invite Other Business' : 'Invite Friends'
              }
              btnStyle={{backgroundColor: color.btn_black}}
              titleStyle={{
                color: color.btn_white_2,
                fontFamily: fonts.sofia_bold,
              }}
            />
          </>
        )}
      </View>
      <ScrollView>
        {search !== '' ? (
          <View style={styles.searchList}>
            {searchPeople.map((item, index) => (
              <PeopleItem
                key={index}
                photo={item.photo}
                name={item.name}
                isInternasional={item.isInternasional}
                isSmall={true}
              />
            ))}
          </View>
        ) : (
          <>
            <SectionTitle
              title="Recent Transactions"
              titleStyle={{
                fontSize: dimens.default_16,
              }}
              containerStyle={{
                paddingVertical: 0,
                paddingHorizontal: dimens.default,
                marginBottom: -20,
              }}
            />
            {recentTransaction.map((item, index) => (
              <PeopleItem
                key={index}
                photo={item.photo}
                name={item.name}
                phone={item.phone}
                isInternasional={item.isInternasional}
              />
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  containerContent: {
    padding: dimens.default_16,
  },
  peopleList: {
    marginHorizontal: -dimens.small,
  },
  searchList: {
    marginTop: dimens.small,
  },
  wrapBtn: {
    padding: dimens.default_22,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
