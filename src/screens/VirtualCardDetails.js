import React, {useState, useMemo, useRef, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

//where local file imported
import {
  Tabbed,
  PageTitle,
  MenuItem,
  Modal,
  TransactionItem,
  Gap,
  BalanceInfo,
  MainAction,
} from '../components';
import {color, dimens, fonts} from '../utils';
import {
  VirtualCard,
  Copy,
  LockOpenPurple,
  EditPurple,
  BlockPurple,
  Right,
  ModalSuccess,
} from '../assets';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const VirtualCardDetails = ({navigation, route}) => {
  const [modalSuccess, setModalSuccess] = useState(false);

  // If there is route params "isCardBlocked", show success modal
  useEffect(() => {
    if (route.params) {
      const {isCardBlocked} = route.params;

      if (isCardBlocked) {
        setModalSuccess(true);
      }
    }
    return () => {};
  }, [route.params]);

  // Bottom sheet settings
  const mainActionRef = useRef(null);
  const refSheet = useRef(null);
  const snapPoints = useMemo(() => ['0%', '30%'], []);

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
          title="Virtual Card Details"
          titleStyle={styles.pageTitle}
          isNoBackButton
        />
        <View style={styles.innerContainer}>
          {/* Card(s) */}
          <Image
            source={VirtualCard}
            style={{
              height: 250,
              width: 410,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />

          {/* Tabbed Activit and Security */}
          <Tab.Navigator
            tabBar={props => (
              <Tabbed {...props} containerStyle={{marginHorizontal: 0}} />
            )}>
            <Tab.Screen
              name="Activity"
              component={props => (
                <Activity {...props} mainActionRef={mainActionRef} />
              )}
            />
            <Tab.Screen
              name="Security"
              component={props => <Security {...props} refSheet={refSheet} />}
            />
          </Tab.Navigator>
        </View>
      </View>

      {/* Block Card Bottom Sheet*/}
      <BottomSheet
        ref={refSheet}
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
          title="Block Card"
          titleStyle={{color: color.btn_black}}
          onPressClose={() => refSheet.current?.close()}
        />
        <View style={{flex: 1, paddingHorizontal: dimens.default}}>
          <TouchableOpacity
            style={styles.sheetItem}
            onPress={() => {
              refSheet.current?.close();
              navigation.navigate('BlockCardPin');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.sheetText}>Confirm with PIN</Text>
              <Image source={Right} style={{height: 24, width: 24}} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sheetItem}
            onPress={() => {
              refSheet.current?.close();
              navigation.navigate('BlockCardTouchId');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.sheetText}>Confirm with touch ID</Text>
              <Image source={Right} style={{height: 24, width: 24}} />
            </View>
          </TouchableOpacity>
        </View>
      </BottomSheet>
      {/* Block Card Bottom Sheet End*/}

      {/* MainAction BottomSheet */}
      <MainAction mainActionRef={mainActionRef} />
      {/* MainAction BottomSheet End*/}
    </SafeAreaView>
  );
};

const Activity = ({navigation, mainActionRef}) => {
  const data = [
    {name: 'Starbuck', type: 'Groceries', pay: '750'},
    {name: 'Apple', type: 'Tech', pay: '690'},
    {name: 'Food Panda', type: 'Food', pay: '500'},
  ];

  return (
    <View style={{flex: 1, backgroundColor: color.btn_white_2}}>
      {/* Available Balance */}
      <BalanceInfo
        type="virtualCardDetails"
        moneyAmount="400.000"
        onPressAdd={() => mainActionRef.current.open()}
      />
      <FlatList
        data={data}
        style={{backgroundColor: color.btn_white_2}}
        renderItem={({item}) => <TransactionItem isMinus {...item} />}
        keyExtractor={(item, key) => key.toString()}
        ListFooterComponent={<Gap t={dimens.default} />}
      />
    </View>
  );
};

const Security = ({navigation, refSheet}) => {
  const [toggleSwitch, setToggleSwitch] = useState({
    allowLockCard: false,
    allowChangePin: false,
    allowCopyCcv: false,
  });

  console.log(refSheet);
  return (
    <View style={{backgroundColor: color.btn_white_2, flex: 1}}>
      {/* Menu Items */}
      <MenuItem
        icon={BlockPurple}
        title="Block Your Card"
        onPress={() => {
          refSheet.current?.expand();
        }}
      />
      <MenuItem
        icon={LockOpenPurple}
        title="Allow to lock card"
        withoutArrow
        toggleSwitch={{
          value: toggleSwitch.allowLockCard,
          onChange: () => {
            setToggleSwitch(prev => ({
              ...prev,
              allowLockCard: !prev.allowLockCard,
            }));
          },
        }}
      />
      <MenuItem
        icon={EditPurple}
        title="Allow to change PIN"
        withoutArrow
        toggleSwitch={{
          value: toggleSwitch.allowChangePin,
          onChange: () => {
            setToggleSwitch(prev => ({
              ...prev,
              allowChangePin: !prev.allowChangePin,
            }));
          },
        }}
      />
      <MenuItem
        icon={Copy}
        title="Allow to copy CCV"
        withoutArrow
        toggleSwitch={{
          value: toggleSwitch.allowCopyCcv,
          onChange: () => {
            setToggleSwitch(prev => ({
              ...prev,
              allowCopyCcv: !prev.allowCopyCcv,
            }));
          },
        }}
      />
      {/* Menu Item End */}
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
  sheetItem: {
    marginTop: dimens.default,
    paddingVertical: dimens.small,
  },
  sheetText: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
  },
});

export default VirtualCardDetails;
