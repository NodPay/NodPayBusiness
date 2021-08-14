import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
  ImageBackground,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

//where local file imported
import {
  HeaderHome,
  BalanceInfo,
  FeedItem,
  Tabbed,
  PageTitle,
  Gap,
  TransactionItem,
} from '../../components/';

import {color, dimens, fonts} from '../../utils/';
import {
  BgBottomTab,
  BookActive,
  Exchange,
  HomeInactive,
  People1,
} from '../../assets/';
import Report from './Report';
import Transaction from './Transaction';

const BookKeeping = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle title="Book Keeping" titleStyle={{color: color.btn_black}} />
      <View style={styles.wrapper}>
        <Tab.Navigator tabBar={props => <Tabbed {...props} />}>
          <Tab.Screen name="Report" component={Report} />
          <Tab.Screen name="Transaction" component={Transaction} />
        </Tab.Navigator>
        {/* Bottom Tab Navigator */}
        <View style={styles.bottomTab}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeBusiness');
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={HomeInactive}
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
              onPress={() => {}}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Image
                source={BookActive}
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
                  color: color.bg_color,
                }}>
                Bookkeeping
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Bottom Tab Navigator End*/}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  wrapper: {
    flex: 1,
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

export default BookKeeping;
