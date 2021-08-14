import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  SectionList,
  Platform,
  StatusBar,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {
  BalanceInfo,
  MainAction,
  PageTitle,
  Tabbed,
  FeedItem,
  Gap,
  RequestMoneyItem,
  CustomerItem,
  TransactionItem,
} from '../components/';
import {DefaultPict, GPS, People1} from '../assets';

const Details = ({count, description}) => {
  return (
    <View style={styles.detailItem}>
      <Text
        style={[styles.name, {fontFamily: fonts.sofia_bold, marginBottom: 2}]}>
        {count}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const BusinessProfile = ({navigation}) => {
  const mainActionRef = useRef(null);

  const Tab = createMaterialTopTabNavigator();

  const Customer = ({navigation}) => {
    const data = [
      {
        title: 'June 12, 30',
        data: [
          {
            time: '12:30 pm',
            message: 'Pay Bills',
          },
          {
            time: '10:30 pm',
            message: 'Pay Electrics',
          },
          {
            time: '08:00',
            message: 'Pay Gasoline',
          },
        ],
      },
      {
        title: 'June 11, 30',
        data: [
          {
            time: '12:30 pm',
            message: 'Pay Bills',
          },
          {
            time: '10:30 pm',
            message: 'Pay Electrics',
          },
          {
            time: '08:00',
            message: 'Pay Gasoline',
          },
        ],
      },
    ];

    return (
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <CustomerItem {...item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text
            style={{
              fontFamily: fonts.sofia_bold,
              fontSize: dimens.default,
              marginTop: dimens.default,
            }}>
            {title}
          </Text>
        )}
        renderSectionFooter={() => <Gap t={dimens.default} />}
      />
    );
  };

  const Transaction = props => {
    const data = [
      {
        title: 'June 12, 30',
        data: [
          {name: 'Starbuck', type: 'Groceries', pay: '75'},
          {name: 'Apple', type: 'Tech', pay: '69'},
          {name: '', type: '', pay: ''},
        ],
      },
    ];

    return (
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <TransactionItem {...item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text
            style={{
              fontFamily: fonts.sofia_bold,
              fontSize: dimens.default,
              marginTop: dimens.default,
            }}>
            {title}
          </Text>
        )}
        renderSectionFooter={() => <Gap t={dimens.default} />}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_color} />
      {/* Header */}
      <View style={styles.bg_blue}>
        <PageTitle
          isWhiteArrow
          title="Business Profile"
          isProfile
          onEdit={() => navigation.navigate('EditProfileBusiness')}
        />
      </View>
      {/* Header End */}

      {/* Profile Box */}
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.wrapProfile}>
            <Image source={DefaultPict} style={styles.image} />
            <Text style={styles.name}>Robert Langdon</Text>
            <Text style={styles.description}>Idk what is this.</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={GPS}
                style={{
                  height: 24,
                  width: 24,
                  resizeMode: 'contain',
                  marginRight: dimens.supersmall,
                }}
              />
              <Text style={[styles.description, {color: color.bg_color}]}>
                2049 Center Street
              </Text>
            </View>
          </View>
          <View style={styles.details}>
            <Details count={32} description="Transactions" />
            <Details count={24} description="Friends" />
            <Details count="Mei 05" description="Join Date" />
          </View>
          <View
            style={{
              padding: dimens.default,
              height: 65,
              position: 'relative',
              //   bottom: dimens.de,
            }}>
            <BalanceInfo type="business" />
          </View>
        </View>
      </View>
      {/* Profile Box End */}

      <Gap b={150} />

      {/* Feed & Request */}
      <View style={{padding: dimens.default, paddingBottom: 0, flex: 1}}>
        <Tab.Navigator
          tabBar={props => (
            <Tabbed
              {...props}
              containerStyle={styles.listContainer}
              //   notification={{name: 'Request', count: 3}}
            />
          )}>
          <Tab.Screen name="Customer" component={Customer} />
          <Tab.Screen name="Transaction" component={Transaction} />
        </Tab.Navigator>
      </View>
      {/* Feed & Request End */}

      {/* MainAction BottomSheet */}
      <MainAction mainActionRef={mainActionRef} />
      {/* MainAction BottomSheet End*/}
    </SafeAreaView>
  );
};

export default BusinessProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg_blue: {
    height: 250,
    backgroundColor: color.bg_color,
  },
  boxContainer: {
    // backgroundColor: 'rgba(0,0,0,0.1)',
    height: 380,
    position: 'absolute',
    width: '100%',
    top: Platform.OS === 'android' ? '6%' : '12%',
    left: 0,
    right: 0,
    padding: dimens.default,
  },
  box: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: dimens.default_22,
    // justifyContent: 'center',
  },
  wrapProfile: {
    alignItems: 'center',
    paddingTop: dimens.default,
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: 'lightgray',
  },
  name: {
    fontFamily: fonts.sofia_medium,
    fontSize: dimens.default,
    marginTop: 8,
    marginBottom: 4,
    color: color.btn_black,
  },
  description: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    color: 'gray',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: dimens.medium,
    marginHorizontal: dimens.default,
  },
  detailItem: {
    alignItems: 'center',
  },
  listContainer: {
    marginHorizontal: 0,
    marginTop: dimens.default,
  },
});
