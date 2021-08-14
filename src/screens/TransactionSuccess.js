import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, Image, Text} from 'react-native';
import {CommonActions} from '@react-navigation/native';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {Button, PageTitle} from '../components';
import {
  ContactBackground,
  ModalSuccess,
  Facebook,
  Internasional,
} from '../assets';

const TransactionSuccess = ({route, navigation}) => {
  const {action = 'request', userSelected = {}} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <PageTitle
        title={action === 'request' ? 'Request Money' : 'Send Money'}
        titleStyle={{color: color.btn_black}}
        isCancel
        cancel={{
          height: 32,
          width: 32,
          marginLeft: 5,
        }}
      />
      {/* Header End */}

      <View style={styles.wrapper}>
        <View style={styles.wrapperContainer}>
          <Image source={ModalSuccess} style={{marginTop: '-27%'}} />
          <Text style={styles.title}>Transaction Success!</Text>
          <Text style={styles.subtitle}>
            {action === 'request'
              ? 'You requested money to Bruno Fernandes'
              : 'Your money has been successfully sent to Bruno Fernandes'}
          </Text>
          <View style={styles.amountWrapper}>
            <View style={styles.amountContainer}>
              <Text style={styles.amountLabel}>Rs</Text>
              <Text style={styles.amountValue}>5000</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Notes</Text>
            <Text style={styles.valueText}>
              Hallo, Thanks for your progress today!
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Recipient</Text>
            <View style={styles.userContainer}>
              <View style={styles.userImageContainer}>
                <Image source={userSelected.photo} style={styles.userImage} />
                {userSelected.isInternasional && (
                  <Image source={Internasional} style={styles.userIcon} />
                )}
              </View>
              <View style={styles.userContent}>
                <Text style={styles.userName}>{userSelected.name}</Text>
                <Text style={styles.userPhone}>{userSelected.phone}</Text>
              </View>
            </View>
          </View>
          <Button
            iconLeft={Facebook}
            title="Share to facebook"
            btnStyle={{
              backgroundColor: 'white',
              marginTop: dimens.medium,
              borderColor: color.btn_white,
              borderWidth: 1,
              width: '100%',
            }}
            titleStyle={{
              fontFamily: fonts.sofia_bold,
              color: 'black',
              color: color.btn_title_white,
            }}
            onPress={() => {}}
          />
        </View>
      </View>

      {/* Bottom Button */}
      <View style={styles.btnWrapper}>
        <Button
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'AppDrawer'}],
              }),
            )
          }
          title="Back to Home"
          titleStyle={{color: color.btn_white_2, fontFamily: fonts.sofia_bold}}
          btnStyle={{
            backgroundColor: color.btn_black,
            flex: 1,
            marginLeft: dimens.supersmall,
          }}
        />
      </View>
      {/* Bottom Button End */}

      <Image source={ContactBackground} style={styles.bg_contact} />
    </SafeAreaView>
  );
};

export default TransactionSuccess;

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
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: dimens.default,
  },
  btnWrapper: {
    backgroundColor: 'white',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: dimens.default,
    paddingTop: dimens.default_12,
  },
  wrapperContainer: {
    backgroundColor: 'white',
    borderRadius: dimens.default,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: dimens.default,
    paddingVertical: dimens.medium,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.medium,
    lineHeight: dimens.large_28,
    color: color.btn_black,
  },
  subtitle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_18,
    color: 'rgba(3,6,12,0.64)',
    maxWidth: 250,
    textAlign: 'center',
  },
  amountWrapper: {
    width: '100%',
    overflow: 'hidden',
    marginTop: dimens.default,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: dimens.small,
    borderRadius: 1,
    borderWidth: 2,
    marginTop: -2,
    marginLeft: -2,
    borderStyle: 'dashed',
    width: '102%',
    borderColor: color.drawerActive,
  },
  amountLabel: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.medium,
    lineHeight: dimens.large_28,
    color: 'rgba(3,6,12,0.64)',
    marginBottom: dimens.small,
    marginRight: dimens.verysmall,
  },
  amountValue: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.large_60,
    lineHeight: dimens.x_large,
    color: color.btn_black,
  },
  section: {
    width: '100%',
    marginTop: dimens.default,
  },
  label: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    lineHeight: dimens.default_20,
    color: color.btn_black,
    marginBottom: dimens.supersmall,
  },
  valueText: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    lineHeight: dimens.default_24,
    color: color.btn_black,
  },
  userContainer: {
    borderWidth: 4,
    borderColor: color.drawerActive,
    borderRadius: dimens.default,
    padding: dimens.default,
    marginTop: dimens.supersmall,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImageContainer: {
    position: 'relative',
  },
  userImage: {
    width: dimens.large_48,
    height: dimens.large_48,
    resizeMode: 'contain',
  },
  userIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: dimens.medium,
    height: dimens.medium,
  },
  userContent: {marginLeft: dimens.default},
  userName: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
    lineHeight: dimens.default_20,
    color: color.btn_black,
  },
  userPhone: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
    lineHeight: dimens.default_20,
    color: color.grey_2,
    marginTop: dimens.supersmall,
  },
  containerModal: {
    flex: 1,
    padding: dimens.default_16,
  },
});
