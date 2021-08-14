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
  ImageBackground,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

//where local file imported
import {
  Tabbed,
  PageTitle,
  MenuItem,
  Button,
  Loading,
  Modal,
} from '../../components';
import {color, dimens, fonts, wait} from '../../utils';
import {
  CardActive,
  Exchange,
  HomeInactive,
  CheckCircle,
  VirtualCard,
  PhysicalCardUnready,
  Copy,
  LockOpenPurple,
  EditPurple,
  GlobePurple,
  PlanePurple,
  NameCardPurple,
  PhysicalCardActive,
  Next,
  LockWhite,
  ModalSuccess,
  BgBottomTab,
} from '../../assets';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// In MyCard screen, user can see their own card and related settings.
const MyCard = ({navigation, route}) => {
  const [toggleSwitch, setToggleSwitch] = useState({
    onlinePayments: false,
    paymentsAbroad: false,
  });
  const [isCardLocked, setIsCardLocked] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [isPhysicalCardActive, setIsPhysicalCardActive] = useState(undefined);
  const [isShowingCopyTooltip, setIsShowingCopyTooltip] = useState(false);

  // If there is route params "isPinChanged", show success modal
  useEffect(() => {
    if (route.params) {
      const {isPinChanged} = route.params;

      if (isPinChanged) {
        setModalSuccess(true);
      }
    }
    return () => {};
  }, [route.params]);

  useEffect(() => {
    setIsPhysicalCardActive(true);
    return () => {};
  }, []);

  useEffect(() => {
    if (isShowingCopyTooltip) {
      wait(500).then(() => setIsShowingCopyTooltip(false));
    }
  }, [isShowingCopyTooltip]);

  // Bottom sheet settings
  const refReqCardSheet = useRef(null);
  const snapPoints = useMemo(() => ['0%', '90%'], []);

  if (isPhysicalCardActive === undefined) {
    return <MyCardLoading />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={color.btn_white_2} />

        {/* Success Block Account Modal */}
        <Modal
          imageSrc={ModalSuccess}
          title="Card blocked!"
          subtitle="Your virtual card has been successfuly blocked!"
          visible={modalSuccess}
          onClose={() => {
            setModalSuccess(false);
          }}
        />

        <PageTitle
          title="My Card"
          titleStyle={styles.pageTitle}
          isNoBackButton
        />
        <ScrollView contentContainerStyle={styles.innerContainer}>
          {/* Card(s) */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('VirtualCardDetails');
            }}>
            <Image
              source={VirtualCard}
              style={{
                height: 250,
                width: 410,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
          {/* <Image
            source={PhysicalCardActive}
            style={{
              height: 250,
              width: 410,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          /> */}

          {/* Three Buttons */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 46,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {isCardLocked ? (
                <>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setIsCardLocked(false);
                    }}>
                    <Image
                      source={LockOpenPurple}
                      style={{height: dimens.medium, resizeMode: 'contain'}}
                    />
                  </TouchableOpacity>
                  <Text style={styles.buttonText}>Lock Card</Text>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    style={[styles.button, {backgroundColor: color.loading}]}
                    onPress={() => {
                      setIsCardLocked(true);
                    }}>
                    <Image
                      source={LockWhite}
                      style={{height: dimens.medium, resizeMode: 'contain'}}
                    />
                  </TouchableOpacity>
                  <Text style={styles.buttonText}>Lock Card</Text>
                </>
              )}
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate('MyCardChangePin');
                }}>
                <Image
                  source={EditPurple}
                  style={{height: dimens.medium, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Change Pin</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  Clipboard.setString('1238 2914 2910 0984');
                  setIsShowingCopyTooltip(true);
                }}>
                <Image
                  source={Copy}
                  style={{height: dimens.medium, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Copy CCV</Text>
            </View>
          </View>

          <Text style={styles.sectionText}>Card Settings</Text>

          {/* Menu Items */}
          <MenuItem
            icon={GlobePurple}
            title="Online Payments"
            subtitle="Get Control Over Transaction"
            withoutArrow
            toggleSwitch={{
              value: toggleSwitch.onlinePayments,
              onChange: () => {
                setToggleSwitch(prev => ({
                  ...prev,
                  onlinePayments: !prev.onlinePayments,
                }));
              },
            }}
          />
          <MenuItem
            icon={PlanePurple}
            title="Payments Abroad"
            subtitle="Send Money Overseas with Nod"
            withoutArrow
            toggleSwitch={{
              value: toggleSwitch.paymentsAbroad,
              onChange: () => {
                setToggleSwitch(prev => ({
                  ...prev,
                  paymentsAbroad: !prev.paymentsAbroad,
                }));
              },
            }}
          />
          {isShowingCopyTooltip ? (
            // Copy CCV Tooltip
            <View
              style={{
                backgroundColor: 'black',
                width: '100%',
                borderRadius: dimens.default,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: dimens.small,
              }}>
              <Image
                source={CheckCircle}
                style={{width: 28, height: 28, marginTop: dimens.small}}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: dimens.default,
                  marginLeft: dimens.small,
                }}>
                Virutal card number copied
              </Text>
            </View>
          ) : (
            <MenuItem
              icon={NameCardPurple}
              title="Request Physical Card"
              onPress={() => {
                refReqCardSheet.current?.expand();
              }}
            />
          )}

          {/* Menu Item End */}
        </ScrollView>

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
              }}
              onPress={() => {
                navigation.navigate('Home');
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
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={CardActive}
                style={{width: 30, height: 30, marginBottom: 6}}
              />
              <Text>Card</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Bottom Tab Navigator End*/}
      </View>

      {/* Request Physical Card Bottom Sheet*/}
      <BottomSheet
        ref={refReqCardSheet}
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
          title="Request Physical Card"
          titleStyle={{color: color.btn_black}}
          onPressClose={() => refReqCardSheet.current?.close()}
        />
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            paddingHorizontal: dimens.default,
            paddingBottom: dimens.default,
          }}>
          <View style={{flex: 1}}>
            <Image
              source={PhysicalCardUnready}
              style={{
                height: 250,
                width: 410,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />

            <Text
              style={[styles.reqeustSheetText, {marginBottom: dimens.medium}]}>
              Get instant access to your money with a free debit card from
              NodPay
            </Text>
            <ReqeustSheetPoint text="No monthly fees or minimum balance." />
            <ReqeustSheetPoint text="Instant discount with boost." />
            <ReqeustSheetPoint text="Send & request money instantly." />
            <ReqeustSheetPoint text="No overdraft fees." />
          </View>
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={0}
            enabled={Platform.OS === 'android' ? false : true}>
            <Button
              onPress={() => {
                navigation.navigate('RequestCard');
                refReqCardSheet.current?.close();
              }}
              title="Continue"
              titleStyle={{
                color: color.btn_white_2,
                fontFamily: fonts.sofia_bold,
              }}
              btnStyle={{
                backgroundColor: color.btn_black,
                marginLeft: dimens.supersmall,
              }}
              iconRight={Next}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </BottomSheet>
      {/* Request Physical Card Bottom Sheet*/}
    </SafeAreaView>
  );
};

const MyCardLoading = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.btn_white_2,
      }}>
      <StatusBar animated backgroundColor={color.bg_white} />
      <Loading size="large" color={color.loading} />
    </SafeAreaView>
  );
};

// Checklist point in request physical card bottom sheet
const ReqeustSheetPoint = ({text}) => {
  return (
    <View style={styles.reqeustSheetPoint}>
      <Image source={CheckCircle} style={{width: 30, height: 30}} />
      <Text style={styles.reqeustSheetText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  pageTitle: {
    color: color.btn_black,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    fontWeight: '700',
  },
  innerContainer: {
    paddingHorizontal: dimens.default,
    paddingBottom: dimens.default,
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.purple,
    borderRadius: dimens.default,
    width: 65,
    height: 65,
  },
  buttonText: {
    color: color.btn_black,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_12,
    fontWeight: '600',
    marginTop: dimens.small,
  },
  reqeustSheetPoint: {
    flexDirection: 'row',
    marginTop: dimens.default,
  },
  reqeustSheetText: {
    marginLeft: dimens.small,
    color: color.btn_black,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
  },
  sectionText: {
    color: color.btn_black,
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    marginTop: dimens.large,
    marginBottom: dimens.small,
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

export default MyCard;
