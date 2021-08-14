import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//where local file imported
import {
  HeaderHome,
  BalanceInfo,
  FeedItem,
  Tabbed,
  Gap,
  TransactionItem,
  MainAction,
} from '../components/';
import {color, dimens, fonts, getData} from '../utils/';
import {
  BgBottomTab,
  BookInactive,
  Exchange,
  HomeActive,
  People1,
} from '../assets/';

const Tab = createMaterialTopTabNavigator();
const HomeBusiness = ({navigation}) => {
  const mainActionRef = useRef(null);
  const [userRole, setUserRole] = useState('admin');

  useEffect(() => {
    getData('session')
      .then(res => {
        console.log('home get session', res.role);
        setUserRole(res.role);
      })
      .catch(e => console.log('error while getData', e));
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <HeaderHome
        onPressSearch={() => navigation.navigate('Search', {type: 'business'})}
        onPressProfile={() => {
          navigation.navigate('BusinessProfile', {type: 'business'});
        }}
      />

      <View style={{flex: 1}}>
        <View style={{padding: dimens.default, paddingBottom: 0, flex: 1}}>
          {userRole === 'admin' && (
            <BalanceInfo
              type="home"
              moneyAmount="400.000"
              onPressAdd={() => mainActionRef.current.open()}
            />
          )}

          <Tab.Navigator
            tabBar={props => (
              <Tabbed
                {...props}
                containerStyle={styles.listContainer}
                notification={{name: 'Request', count: 3}}
              />
            )}>
            <Tab.Screen name="Customer" component={Customer} />
            <Tab.Screen name="Transaction" component={Transaction} />
          </Tab.Navigator>
        </View>

        <Gap t={100} />

        {/* Bottom Tab Navigator */}
        <View style={styles.bottomTab}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={HomeActive}
                style={{width: 30, height: 30, marginBottom: 6}}
              />
              <Text style={{color: color.bg_color}}>Home</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={{
                  top: -35,
                  backgroundColor: color.btn_white_2,
                  padding: 10,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => navigation.navigate('Transaction')}>
                <ImageBackground
                  source={BgBottomTab}
                  style={{
                    height: 64,
                    width: 64,
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    resizeMode: 'cover',
                  }}>
                  <Image source={Exchange} style={{width: 30, height: 30}} />
                </ImageBackground>
              </TouchableOpacity>
              <Text
                style={{
                  position: 'absolute',
                  left: Platform.OS === 'ios' ? -10 : 0,
                  bottom: 15,
                  width: Platform.OS === 'ios' ? 110 : 100,
                }}>
                Send & Request
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BookKeeping');
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Image
                source={BookInactive}
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: 'center',
                  marginBottom: 18,
                }}
              />
              <Text
                style={{
                  position: 'absolute',
                  left: Platform.OS === 'ios' ? -25 : -18,
                  bottom: 0,
                  width: 85,
                }}>
                Bookkeeping
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Bottom Tab Navigator End*/}
      </View>

      {/* MainAction BottomSheet */}
      <MainAction type="business" mainActionRef={mainActionRef} />
      {/* MainAction BottomSheet End*/}
    </SafeAreaView>
  );
};

const Customer = ({navigation}) => {
  const data = [
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
  ];
  // <EmptyState
  //   icon={EmptyData}
  //   iconSize={72}
  //   content={`You currently have\nno customer activity on business profile`}
  // />;
  return (
    <FlatList
      data={data}
      renderItem={props => <FeedItem type="customer" {...props} />}
      style={{backgroundColor: color.btn_white_2}}
      keyExtractor={(item, key) => key.toString()}
      ListFooterComponent={<Gap t={dimens.default} />}
      // ItemSeparatorComponent={separatorItem}
      // ListFooterComponent={
      //   canLoadMore && (
      //     <ActivityIndicator animating color="green" size="large" />
      //   )
      // }
      // refreshing={isRefreshing}
      // onRefresh={refreshList}
      // onEndReached={loadMoreList}
      // onEndReachedThreshold={0.75}
    />
  );
};

const Transaction = props => {
  const data = [
    {name: 'Starbuck', type: 'Groceries', pay: '75'},
    {name: 'Apple', type: 'Tech', pay: '69'},
  ];

  return (
    <FlatList
      data={data}
      style={{backgroundColor: color.btn_white_2}}
      renderItem={({item}) => <TransactionItem isMinus {...item} />}
      keyExtractor={(item, key) => key.toString()}
      ListFooterComponent={<Gap t={dimens.default} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  listContainer: {
    marginHorizontal: 0,
    marginTop: dimens.default,
  },
  requestItemContainer: {
    marginTop: dimens.default,
    marginBottom: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'flex-start',
    zIndex: -1,
  },
  bottomTab: {
    height: 60,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: dimens.default_16,
    zIndex: 1,
  },
});

export default HomeBusiness;
