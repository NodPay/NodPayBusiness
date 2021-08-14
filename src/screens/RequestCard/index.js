import React, {useState, useMemo, useRef, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

//where local file imported
import {
  PageTitle,
  StepFormRequestCard,
  Button,
  Loading,
  Gap,
} from '../../components';
import {color, dimens, fonts, wait} from '../../utils';
import {CardActive, Exchange, HomeInactive, Next} from '../../assets';

// Steps to request physical card
const RequestCard = ({navigation, route}) => {
  const [stepData, setStepData] = useState({
    isComplete: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const onPressBack = () => {};

  const onPressContinue = () => {
    setIsLoading(true);
    wait(400).then(() => {
      navigation.navigate('RequestCardSuccess');
    });
  };

  // After the last step, set to loading
  if (isLoading) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={color.btn_white_2} />

        <PageTitle
          title="Request Physical Card"
          titleStyle={styles.pageTitle}
          containerStyle={{backgroundColor: color.btn_white_2}}
          isBlackArrow
          onPressBack={onPressBack}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color.btn_white_2,
          }}>
          <Loading
            size="large"
            color={color.loading}
            style={{
              transform: [{scale: 2}],
            }}
          />

          <Gap t={dimens.large} />
          {/* Text */}
          <Text style={styles.pageTitle}>Nod is preparing for your data</Text>
          <Text
            style={{
              color: color.btn_black,
              fontFamily: fonts.sofia_regular,
              fontSize: dimens.default,
              marginTop: dimens.default_12,
            }}>
            Please Wait
          </Text>

          <Gap t={dimens.large} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={color.btn_white_2} />
      <PageTitle
        title="Request Physical Card"
        titleStyle={styles.pageTitle}
        containerStyle={{backgroundColor: color.btn_white_2}}
        isBlackArrow
        onPressBack={onPressBack}
      />

      {/* Steppers */}
      <View style={styles.container}>
        <StepFormRequestCard activeStep={2} isComplete={stepData.isComplete} />
      </View>

      {/* Bottom Button */}
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'android' ? false : true}>
        <View style={styles.btnWrapper}>
          <Button
            onPress={onPressContinue}
            title="Continue"
            titleStyle={{
              color: color.btn_white_2,
              fontFamily: fonts.sofia_bold,
            }}
            btnStyle={{
              backgroundColor: color.btn_black,
              marginLeft: dimens.supersmall,
              flex: 1,
            }}
            iconRight={Next}
          />
        </View>
      </KeyboardAvoidingView>
      {/* Bottom Button End */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
    paddingHorizontal: dimens.default,
  },
  pageTitle: {
    color: color.btn_black,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    fontWeight: '700',
  },
  btnWrapper: {
    backgroundColor: 'white',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: dimens.default,
    paddingTop: dimens.default_12,
  },
});

export default RequestCard;
