import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {Button, Gap, PageTitle, TransferToBankList} from '../components';
import {
  CitiBank,
  FaysalBank,
  HabibBank,
  ModalFailed,
  ModalSuccess,
  OCBCBank,
} from '../assets';
import {Modal} from '../components';

const TransactionTransferToNod = ({navigation}) => {
  const [transfer, setTransfer] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isInput, setIsInput] = useState(false);
  // state for text input
  const [value, setValue] = useState('');
  // modal
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState({
    image: '',
    title: '',
    subtitle: '',
    btn1Text: '',
    btn2Text: '',
    onClose: () => {},
    onPress: () => {},
  });

  const data = [
    {
      id: 0,
      logo: CitiBank,
      name: 'City Bank',
      number: '1234',
      wallet: '123.456',
    },
    {
      id: 1,
      logo: FaysalBank,
      name: 'Faysal Bank',
      number: '1234',
      wallet: '123.456',
    },
    {
      id: 2,
      logo: HabibBank,
      name: 'Habib Bank',
      number: '1234',
      wallet: '123.456',
    },
    {
      id: 3,
      logo: OCBCBank,
      name: 'OCBC Bank',
      number: '1234',
      wallet: '123.456',
    },
  ];

  // data for list button
  const dataListButton = [
    {
      id: 0,
      amount: 'All',
    },
    {
      id: 1,
      amount: '500',
    },
    {
      id: 2,
      amount: '1000',
    },
    {
      id: 3,
      amount: '2000',
    },
  ];

  // render item list button
  const ListButton = ({amount = 'All', onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.listButtonContainer}>
        <Text style={styles.buttonListItem}>{amount}</Text>
      </TouchableOpacity>
    );
  };

  const onTransfer = () => {
    if (value == '0') {
      setVisible(true);
      setModal({
        image: ModalFailed,
        title: 'Something’s Wrong',
        subtitle:
          'We’re unable to transfer balance, please check your internet connection and tyr again.',
        btn1Text: 'Try Again',
        btn2Text: 'Close',
        onClose: () => setVisible(false),
        onPress: () => {
          setVisible(false);
          // setTransfer(false);
        },
      });
    } else {
      setVisible(true);
      setModal({
        image: ModalSuccess,
        title: 'Transfer Success',
        subtitle: `Rs ${value} has successfuly transfered to your Bank Account`,
        btn1Text: 'Continue Transactions',
        onClose: () => {
          setVisible(false);
          setTransfer(false);
          setValue(0);
        },
        onPress: () => {
          setVisible(false);
          setTransfer(false);
          setValue(0);
          navigation.goBack();
        },
      });
    }
  };

  if (transfer) {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <PageTitle
          containerStyle={{marginTop: 16}}
          isCloseMode
          onPressClose={() => setTransfer(!transfer)}
          title="Transfer To Nod"
          titleStyle={{color: color.btn_black}}
          isCancel
          cancel={{
            height: 32,
            width: 32,
            marginLeft: 5,
          }}
        />
        {/* Header End */}

        <View style={{flex: 1}}>
          {/* Total Amount */}
          <View style={styles.totalAmount}>
            <Text style={styles.label}>Enter Total Amount</Text>
            {/* check is input */}

            {isInput ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <Text style={styles.amount}>Rs</Text>
                <TextInput
                  autoFocus={true}
                  keyboardType="number-pad"
                  value={value}
                  onChangeText={val => setValue(val)}
                  style={[
                    styles.amount,
                    {
                      color: color.btn_black,
                      fontWeight: 'normal',
                      lineHeight: 60,
                      fontSize: 60,
                    },
                  ]}
                  onSubmitEditing={() => {
                    setIsInput(false);
                  }}
                  onBlur={() => {
                    setIsInput(false);
                  }}
                />
              </View>
            ) : (
              <Text
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}
                onPress={() => setIsInput(!isInput)}>
                <Text style={styles.amount}>Rs </Text>
                <Text
                  style={[
                    styles.amount,
                    {
                      color: color.btn_black,
                      fontWeight: 'normal',
                      lineHeight: 60,
                      fontSize: 60,
                    },
                  ]}>
                  {value === '' ? '0' : value}
                </Text>
              </Text>
            )}
          </View>
          {/* Total Amount End */}

          <Gap t={dimens.default_22 + 2} />

          {/* List Button Number*/}
          <FlatList
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
            data={dataListButton}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ListButton
                {...item}
                onPress={() => {
                  if (item.amount == 'All') {
                    // do nothing
                  } else {
                    setValue(item.amount);
                  }
                }}
              />
            )}
          />
          {/* List Button Number End*/}
        </View>

        {/* Bottom Button */}
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={0}
          enabled={Platform.OS === 'android' ? false : true}>
          <View style={styles.btnWrapper}>
            <Button
              onPress={onTransfer}
              title="Transfer"
              titleStyle={{color: color.btn_white_2}}
              btnStyle={{backgroundColor: color.btn_black}}
            />
          </View>
        </KeyboardAvoidingView>
        {/* Bottom Button End */}

        {/* Modal */}
        <Modal
          visible={visible}
          imageSrc={modal.image}
          title={modal.title}
          subtitle={modal.subtitle}
          btn1Text={modal.btn1Text}
          btn2Text={modal.btn2Text}
          btn1Onpress={modal.onPress}
          btn2Onpress={modal.onPress}
          onClose={modal.onClose}
        />
        {/* Modal End */}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />
      {/* Header */}
      <PageTitle
        isBlackArrow
        title="Transfer To Nod"
        titleStyle={{color: color.btn_black}}
      />
      {/* Header End */}

      {/* List Bank */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TransferToBankList
            selected={item.id == selected}
            {...item}
            onPress={() => {
              setSelected(item.id);
            }}
          />
        )}
      />
      {/* List Bank End */}

      {/* Bottom Button */}
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'android' ? false : true}>
        <View style={styles.btnWrapper}>
          <Button
            onPress={() => setTransfer(true)}
            title="Continue"
            titleStyle={{color: color.btn_white_2}}
            btnStyle={{backgroundColor: color.btn_black}}
          />
        </View>
      </KeyboardAvoidingView>
      {/* Bottom Button End */}
    </SafeAreaView>
  );
};

export default TransactionTransferToNod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  btnWrapper: {
    backgroundColor: 'white',
    height: 72,
    justifyContent: 'center',
    padding: dimens.default,
  },
  totalAmount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 115,
  },
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey,
    marginBottom: dimens.small,
  },
  amount: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    color: 'rgba(3,6,12,0.64)',
  },
  listButtonContainer: {
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonListItem: {
    backgroundColor: color.purple,
    padding: 8,
    paddingHorizontal: 16,
    fontFamily: fonts.sofia_bold,
    color: color.bg_color,
    borderRadius: 16,
  },
});
