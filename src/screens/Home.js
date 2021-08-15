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
  Platform,
  ImageBackground,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//where local file imported
import {
  HeaderHome,
  BalanceInfo,
  FeedItem,
  Tabbed,
  RequestMoneyItem,
  Gap,
  MainAction,
  WalktroughTooltip,
  Delayed,
} from '../components/';
import {color, dimens, fonts, getData, storeData} from '../utils/';
import {
  BgBottomTab,
  CardInactive,
  Exchange,
  HomeActive,
  People1,
} from '../assets/';

const Tab = createMaterialTopTabNavigator();
const Home = ({navigation}) => {
  const mainActionRef = useRef(null);
  const [walktroughPassed, setWalktroughPassed] = useState(null);
  const [walktrough, setWalktrough] = useState([
    {
      content:
        'Send and ask you friends to pay you easily and quickly right from here!',
      isActive: true,
    },
    {
      content: 'See what your friends are up to and their interactions',
      isActive: false,
    },
    {
      content: 'Check your friends and familes money requests from here!',
      isActive: false,
    },
    {
      content: 'Check your available Nod balance right away after login',
      isActive: false,
    },
    {
      content:
        'Add money to your account by going to a store near you and presesnting ur QR code',
      isActive: false,
    },
    {
      content:
        'Access your profile, search friend, view bank account all in one top navigations',
      isActive: false,
    },
  ]);

  useEffect(() => {
    getData('session')
      .then(res => {
        console.log('home get session', res);
      })
      .catch(e => console.log('error while getData', e));

    getData('walktrough')
      .then(res => {
        console.log('res', res.isHome);
        setWalktroughPassed(res.isHome);
      })
      .catch(e => console.log('error while getData', e));
  }, [walktroughPassed]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <WalktroughTooltip
        items={walktrough}
        setItems={setWalktrough}
        indexActive={5}
        width={250}
        height={180}
        arrowStyle={{left: dimens.large}}
        placement="bottom"
        onFinish={() => {
          getData('walktrough')
            .then(res => {
              setWalktroughPassed(true);
              storeData('walktrough', {
                ...res,
                isHome: true,
              });
            })
            .catch(e => console.log('error while getData', e));
        }}>
        <View
          style={
            walktrough[5].isActive
              ? {width: '100%', backgroundColor: 'white'}
              : {}
          }>
          <HeaderHome
            onPressSearch={() =>
              navigation.navigate('Search', {type: 'personal'})
            }
            onPressProfile={() => {
              navigation.openDrawer();
              // navigation.navigate('Profile');
            }}
          />
        </View>
      </WalktroughTooltip>

      <View style={{flex: 1}}>
        <View style={{padding: dimens.default, paddingBottom: 0, flex: 1}}>
          <WalktroughTooltip
            items={walktrough}
            setItems={setWalktrough}
            indexActive={3}
            width={250}
            height={160}
            arrowStyle={{left: dimens.large}}
            placement="bottom">
            {!walktrough[4].isActive && (
              <BalanceInfo
                type="home"
                moneyAmount="400.000"
                onPressAdd={() => mainActionRef.current.open()}
              />
            )}
          </WalktroughTooltip>
          <WalktroughTooltip
            items={walktrough}
            setItems={setWalktrough}
            indexActive={4}
            width={250}
            height={180}
            arrowStyle={{left: 195}}
            placement="bottom">
            {walktrough[4].isActive && (
              <BalanceInfo
                type="home"
                moneyAmount="400.000"
                onPressAdd={() => mainActionRef.current.open()}
              />
            )}
          </WalktroughTooltip>

          <WalktroughTooltip
            items={walktrough}
            setItems={setWalktrough}
            indexActive={1}
            width={250}
            height={160}
            arrowStyle={{left: dimens.large}}
            placement="bottom">
            {walktrough[1].isActive && (
              <View style={styles.tabButton}>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'white',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.btnTitle,
                      {
                        color: color.btn_black,
                      },
                    ]}>
                    Feed
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'transparent',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.btnTitle,
                      {
                        color: 'gray',
                      },
                    ]}>
                    Request
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </WalktroughTooltip>
          <WalktroughTooltip
            items={walktrough}
            setItems={setWalktrough}
            indexActive={2}
            width={250}
            height={160}
            arrowStyle={{left: 195}}
            placement="bottom">
            {walktrough[2].isActive && (
              <View style={styles.tabButton}>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'white',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.btnTitle,
                      {
                        color: color.btn_black,
                      },
                    ]}>
                    Feed
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'transparent',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.btnTitle,
                      {
                        color: 'gray',
                      },
                    ]}>
                    Request
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </WalktroughTooltip>
          <Tab.Navigator
            tabBar={props => (
              <>
                {!walktrough[1].isActive && !walktrough[2].isActive && (
                  <Tabbed
                    {...props}
                    containerStyle={styles.listContainer}
                    notification={{name: 'Request', count: 3}}
                  />
                )}
              </>
            )}>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Request" component={Request} />
          </Tab.Navigator>
        </View>
        {/* <Gap t={100} /> */}

        {/* Bottom Tab Navigator */}
        {walktroughPassed === null || walktroughPassed === true ? (
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
                <Text>Home</Text>
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
                  navigation.navigate('MyCard');
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={CardInactive}
                  style={{width: 30, height: 30, marginBottom: 6}}
                />
                <Text>Card</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Delayed>
            <WalktroughTooltip
              items={walktrough}
              setItems={setWalktrough}
              indexActive={walktroughPassed === true ? -1 : 0}
              width={250}
              height={160}
              placement="top">
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
                    <Text>Home</Text>
                  </TouchableOpacity>
                  <View>
                    <TouchableOpacity
                      style={{
                        top: -35,
                        height: 80,
                        width: 80,
                        backgroundColor: color.bg_color,
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 10,
                        borderColor: color.btn_white_2,
                      }}
                      onPress={() => navigation.navigate('Transaction')}>
                      <Image
                        source={Exchange}
                        style={{width: 30, height: 30}}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        position: 'absolute',
                        left: Platform.OS === 'ios' ? -10 : 0,
                        bottom: 15,
                        width: Platform.OS === 'ios' ? 110 : 80,
                      }}>
                      Send & Request
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('MyCard');
                    }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={CardInactive}
                      style={{width: 30, height: 30, marginBottom: 6}}
                    />
                    <Text>Card</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </WalktroughTooltip>
          </Delayed>
        )}
        {/* Bottom Tab Navigator End*/}
      </View>

      {/* MainAction BottomSheet */}
      <MainAction mainActionRef={mainActionRef} />
      {/* MainAction BottomSheet End*/}
    </SafeAreaView>
  );
};

const Feed = ({navigation}) => {
  const data = [
    {
      isLoved: false,
      isCommented: false,
      isEmojied: true,
      loveCount: null,
      commentCount: null,
      emojiCount: 1,
      message: 'Thank you Lorem Ipsum 🤗😎😍😍',
    },
    {
      isLoved: true,
      isCommented: false,
      isEmojied: false,
      loveCount: 2,
      commentCount: 13,
      emojiCount: 12,
      message: 'Thank you Lorem Ipsum 🤗😎😍😍',
    },
    {
      isLoved: true,
      isCommented: true,
      isEmojied: false,
      loveCount: 4,
      commentCount: 5,
      emojiCount: null,
      message: 'Thank you Lorem Ipsum 🤗😎😍😍',
    },
    {
      isLoved: true,
      isCommented: true,
      isEmojied: true,
      loveCount: 3,
      commentCount: 10,
      emojiCount: 11,
      message: 'Thank you Lorem Ipsum 🤗😎😍😍',
    },
  ];
  // <EmptyState
  //   icon={EmptyData}
  //   iconSize={72}
  //   content={`You currently have\nno notifications`}
  // />;
  return (
    <FlatList
      data={data}
      renderItem={props => (
        <FeedItem
          onPressComment={() => {
            navigation.navigate('Comment');
          }}
          {...props}
        />
      )}
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

const Request = props => {
  const data = [
    {
      photo: People1,
      name: 'Connor',
      action: 'request you money',
      info: 'For groceries',
      date: '2m',
      type: 'out',
      amount: 125,
      isRequested: false,
    },
    {
      photo: People1,
      name: 'You',
      action: 'requested Bruno',
      info: 'For groceries',
      date: '1m',
      type: 'in',
      amount: 75,
      isRequested: true,
    },
  ];

  return (
    <FlatList
      data={data}
      style={{backgroundColor: color.btn_white_2}}
      renderItem={({item}) => (
        <RequestMoneyItem
          photo={item.photo}
          name={item.name}
          action={item.action}
          info={item.info}
          date={item.date}
          type={item.type}
          amount={item.amount}
          isRequested={item.isRequested}
          containerStyle={styles.requestItemContainer}
        />
      )}
      keyExtractor={(item, key) => key.toString()}
      ListFooterComponent={<Gap t={dimens.default} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
    position: 'relative',
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
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: dimens.default_16,
    zIndex: 1,
  },
  tabButton: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    justifyContent: 'space-between',
    borderRadius: 11,
    height: 46,
    marginTop: dimens.default_18,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 11,
  },
  btnTitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    lineHeight: dimens.medium,
    color: color.btn_black,
  },
});

export default Home;
