import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CardInactive, Exchange, HomeActive} from '../../assets';
import {color, dimens} from '../../utils';

const BottomTab = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomTab}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Image source={HomeActive} style={{width: 30, height: 30}} />
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
            <Image source={Exchange} style={{width: 30, height: 30}} />
          </TouchableOpacity>
          <Text style={{position: 'absolute', left: 10, bottom: 15}}>
            Exchange
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyCard');
          }}>
          <Image source={CardInactive} style={{width: 30, height: 30}} />
          <Text>Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default BottomTab;
