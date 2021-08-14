import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {
  PageTitle,
  Tabbed,
  FeedItem,
  Gap,
  RequestMoneyItem,
  Button,
} from '../components/';
import {DefaultPict, Dropdown, People1} from '../assets';

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

const Tab = createMaterialTopTabNavigator();

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

const Profile = ({navigation}) => {
  // button add friend
  const [friend, setFriend] = useState(false);
  // show dropdown
  const [show, setShow] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.bg_blue}>
        <PageTitle
          isOtherProfile
          onEdit={() => {
            setShow(!show);
          }}
        />
      </View>
      {/* Header End */}

      {/* Profile Box */}
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.wrapProfile}>
            <Image source={DefaultPict} style={styles.image} />
            <Text style={styles.name}>Bruno Fernandes</Text>
            <Text style={styles.description}>Not a Who Who!</Text>
          </View>
          <View style={styles.details}>
            <Details count={32} description="Transactions" />
            <Details count={24} description="Friends" />
            <Details count="Mei 05" description="Join Date" />
          </View>
          {/* Button Friend */}
          <View style={{padding: dimens.default, marginTop: dimens.default}}>
            <Button
              onPress={() => setFriend(!friend)}
              title={friend ? 'Unfriend' : '+ Add Friends'}
              btnStyle={{
                backgroundColor: friend ? color.btn_white : color.bg_color,
              }}
              titleStyle={{color: friend ? color.grey : color.btn_white}}
            />
          </View>
          {/* Button Friend End */}
        </View>
      </View>
      {/* Profile Box End */}

      {show && (
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={() => setShow(false)}>
          <View style={styles.dropdown}>
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}>
              <Text style={styles.title}>Block Bruno</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShow(!show);
              }}>
              <Text style={styles.title}>Report Bruno</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      )}

      <Gap b={124} />

      {/* Feed & Request */}
      <View style={{padding: dimens.default, paddingBottom: 72, flex: 1}}>
        <Tab.Navigator
          tabBar={props => (
            <Tabbed
              {...props}
              containerStyle={styles.listContainer}
              notification={{name: 'Request', count: 3}}
            />
          )}>
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Request" component={Request} />
        </Tab.Navigator>
      </View>
      {/* Feed & Request End */}

      {/* Bottom Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Request"
          btnStyle={{flex: 1, backgroundColor: color.btn_white, marginRight: 5}}
          onPress={() => navigation.navigate('QRCode')}
        />
        <Button
          title="Pay"
          titleStyle={{color: color.btn_white}}
          btnStyle={{flex: 1, backgroundColor: color.btn_black, marginLeft: 5}}
          onPress={() => navigation.navigate('QRCode')}
        />
      </View>
      {/* Bottom Button End */}
    </SafeAreaView>
  );
};

export default Profile;

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
    height: 350,
    position: 'absolute',
    width: '100%',
    top: '6%',
    left: 0,
    right: 0,
    padding: dimens.default,
    zIndex: 0,
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
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    height: 72,
    flexDirection: 'row',
    padding: dimens.default,
  },
  dropdown: {
    height: 90,
    width: 180,
    backgroundColor: 'white',
    position: 'absolute',
    top: dimens.large_46,
    right: dimens.default_22,
    borderRadius: dimens.small,
    padding: dimens.default,
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
  },
});
