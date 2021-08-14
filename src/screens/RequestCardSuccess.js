import React from 'react';
import {StyleSheet, View, SafeAreaView, Image, Text} from 'react-native';
import {CommonActions} from '@react-navigation/native';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {Button, PageTitle} from '../components';
import {ModalSuccess, PurpleDottedLine} from '../assets';

const RequestCardSuccess = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <PageTitle
        title="Request Physical Card"
        titleStyle={{color: color.btn_black}}
        isCancel
        isNoBackButton
        isCloseMode
        cancel={{height: 32, width: 32, marginLeft: 5}}
      />
      {/* Header End */}

      <View style={styles.wrapper}>
        <View style={styles.wrapperContainer}>
          <Image source={ModalSuccess} style={{marginTop: '-27%'}} />
          <Text style={styles.title}>Request Sent</Text>
          <Text style={styles.subtitle}>
            We have received your request, you’ll receive your card soon
          </Text>

          {/* Purple dashed line */}
          <Image
            source={PurpleDottedLine}
            style={{width: '100%', marginTop: dimens.large}}
          />

          {/* Receiver Information */}
          <View style={styles.section}>
            <Text style={styles.label}>Receiver Information</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.informationKey}>Receiver</Text>
              <Text
                style={[
                  styles.label,
                  {fontSize: dimens.default_14, textAlign: 'right', flex: 1},
                ]}>
                Robert Langdon
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.informationKey}>Delivery Address</Text>
              <Text
                style={[
                  styles.label,
                  {fontSize: dimens.default_14, textAlign: 'right', flex: 1},
                ]}>
                45127 Washington, Kentucky
              </Text>
            </View>
          </View>

          {/* Receiver Information */}
          <View style={styles.section}>
            <Text style={styles.label}>Estimated Arrived</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.informationKey}>Date</Text>
              <Text
                style={[
                  styles.label,
                  {fontSize: dimens.default_14, textAlign: 'right', flex: 1},
                ]}>
                Mon, Mei 15, 2021
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Button */}
      <View style={styles.btnWrapper}>
        <Button
          onPress={() =>
            navigation.navigate('AppDrawer', {
              screen: 'MyCard',
            })
          }
          title="Back to Homepage"
          titleStyle={{color: color.btn_white_2, fontFamily: fonts.sofia_bold}}
          btnStyle={{
            backgroundColor: color.btn_black,
            flex: 1,
            marginLeft: dimens.supersmall,
          }}
        />
      </View>
      {/* Bottom Button End */}
    </SafeAreaView>
  );
};

export default RequestCardSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
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
    marginTop: dimens.small,
  },
  section: {
    width: '100%',
    marginTop: dimens.large,
  },
  label: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    lineHeight: dimens.default_20,
    color: color.btn_black,
    marginBottom: dimens.supersmall,
  },
  informationKey: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    color: color.btn_black,
  },
});
