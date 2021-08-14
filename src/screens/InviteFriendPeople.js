import React, {useRef, useState, useMemo, useCallback, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList, Text} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {
  PageTitle,
  StepInfo,
  InputText,
  Button,
  InvitePeopleItem,
} from '../components';
import {Copy, Facebook, PhonePurple} from '../assets';

const InviteFriendPeople = ({navigation}) => {
  const stepInfo = ['Installed', 'Verified', 'Top up'];
  const [peopleList, setPeopleList] = useState([
    {
      id: 1,
      backgroundIcon: '#6668E4',
      name: 'Ammirudin Syarif',
      step: 1,
      onPressRight: () => {},
    },
    {
      id: 2,
      backgroundIcon: '#6668E4',
      name: 'Ammirudin Syarif',
      step: 2,
      onPressRight: () => {},
    },
    {
      id: 3,
      backgroundIcon: '#40C0E7',
      name: 'Ben Kasyafana',
      step: 3,
      onPressRight: () => {},
    },
    {
      id: 4,
      backgroundIcon: '#D21414',
      name: 'Bruno Fernandes',
      step: 3,
      onPressRight: () => {},
    },
    {
      id: 5,
      backgroundIcon: '#6668E4',
      name: 'Ammirudin Syarif',
      step: 1,
      onPressRight: () => {},
    },
    {
      id: 6,
      backgroundIcon: '#6668E4',
      name: 'Ammirudin Syarif',
      step: 2,
      onPressRight: () => {},
    },
    {
      id: 7,
      backgroundIcon: '#40C0E7',
      name: 'Ben Kasyafana',
      step: 3,
      onPressRight: () => {},
    },
    {
      id: 8,
      backgroundIcon: '#D21414',
      name: 'Bruno Fernandes',
      step: 3,
      onPressRight: () => {},
    },
  ]);
  const refRBSheet = useRef(null);
  const snapPoints = useMemo(() => ['-30%', '30%'], []);

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Your Sign Ups"
        titleStyle={{color: color.btn_black}}
      />
      <View style={styles.containerContent}>
        <View style={styles.containerStep}>
          <Text style={styles.title}>How its work?</Text>
          <StepInfo items={stepInfo} />
        </View>
      </View>
      <FlatList
        contentContainerStyle={{paddingBottom: dimens.small}}
        style={styles.list}
        data={peopleList}
        renderItem={({item}) => (
          <InvitePeopleItem
            backgroundIcon={item.backgroundIcon}
            name={item.name}
            step={item.step}
            onPressRight={item.onPressRight}
          />
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.wrapBtn}>
        <InputText
          labelStyle={{color: color.btn_black}}
          label=""
          placeholder=""
          value="nodpay.co/BB3435"
          editable={false}
          iconRight={Copy}
          onPressRight={() => Clipboard.setString('nodpay.co/BB3435')}
          containerStyle={{marginBottom: dimens.default_14, marginTop: 0}}
          inputStyle={{
            backgroundColor: color.grey_7,
            elevation: 0,
            shadowOpacity: 0,
            marginTop: 0,
          }}
        />
        <Button
          onPress={() => refRBSheet.current?.snapTo(1)}
          title="Share With More People!"
          btnStyle={{backgroundColor: color.btn_black}}
          titleStyle={{color: color.btn_white_2}}
        />
      </View>
      <BottomSheet
        ref={refRBSheet}
        snapPoints={snapPoints}
        backdropComponent={backdropProps => (
          <BottomSheetBackdrop
            {...backdropProps}
            enableTouchThrough={true}
            pressBehavior="collapse"
          />
        )}>
        <PageTitle
          isCloseMode
          title="Share Invitation Link"
          titleStyle={{color: color.btn_black}}
          onPressClose={() => refRBSheet.current?.close()}
        />
        <View style={styles.containerModal}>
          <Button
            iconLeft={Facebook}
            title="Sign in with Facebook"
            btnStyle={{
              backgroundColor: 'white',
              marginBottom: dimens.default_16,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{
              fontFamily: fonts.sofia_bold,
              color: 'black',
              color: color.btn_title_white,
            }}
            onPress={() => {}}
          />
          <Button
            iconLeft={PhonePurple}
            title="Share via Mobile Number"
            btnStyle={{
              backgroundColor: 'white',
              marginBottom: dimens.default_16,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{
              fontFamily: fonts.sofia_bold,
              color: 'black',
              color: color.btn_title_white,
            }}
            onPress={() => {}}
          />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default InviteFriendPeople;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  containerContent: {
    padding: dimens.default_16,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    lineHeight: dimens.default_18,
    color: color.btn_black,
    textAlign: 'center',
    marginBottom: dimens.default_16,
  },
  containerStep: {
    backgroundColor: color.bg_success,
    borderRadius: dimens.default_16,
    paddingVertical: dimens.large_25,
  },
  list: {
    padding: dimens.default_16,
    paddingBottom: dimens.large_50,
    marginBottom: 170,
    flex: 1,
  },
  wrapBtn: {
    paddingHorizontal: dimens.default_22,
    paddingTop: dimens.default_22,
    paddingBottom: dimens.large,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
