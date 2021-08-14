import React, {useRef, useState, useMemo, useCallback} from 'react';
import {StyleSheet, View, ScrollView, SafeAreaView, Image} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {PageTitle, Button, StepInfo, MenuItem, InputText} from '../components';
import {
  InviteBusiness,
  Business,
  Money,
  Copy,
  Facebook,
  PhonePurple,
} from '../assets';

const InviteOtherBusiness = ({navigation}) => {
  const stepInfo = [
    'You invite other Bussiness',
    'They Register & Topup',
    'You both get XX',
  ];
  const refRBSheet = useRef(null);
  const snapPoints = useMemo(() => ['-30%', '30%'], []);

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Invite Other Bussiness"
        titleStyle={{color: color.btn_black}}
      />
      <ScrollView>
        <View style={styles.containerCenter}>
          <Image source={InviteBusiness} style={styles.photo} />
          <StepInfo items={stepInfo} />
        </View>
        <View style={styles.containerContent}>
          <MenuItem
            icon={Business}
            title="Bussiness Signed Up"
            subtitle="This put you in the top X%"
            onPress={() => navigation.navigate('InviteSignupBusiness')}
          />
          <MenuItem
            icon={Money}
            title="Money Earned"
            info="Rs2000"
            withoutArrow={true}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
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
          onPress={() => refRBSheet.current?.expand()}
          title="Share Invitation Link"
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
            title="Share to facebook"
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

export default InviteOtherBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  containerCenter: {
    alignItems: 'center',
    marginVertical: dimens.medium,
  },
  containerContent: {
    padding: dimens.default_16,
  },
  photo: {
    width: 253,
    height: 147,
    resizeMode: 'cover',
    marginBottom: dimens.medium,
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
  containerModal: {
    padding: dimens.default_16,
  },
});
