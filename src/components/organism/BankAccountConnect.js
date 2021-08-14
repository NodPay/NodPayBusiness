import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

//where local file imported
import {
  PageTitle,
  ErrorMessage,
  InfoMessage,
  Button,
  InputText,
  Modal,
} from '../../components';
import {color, dimens, fonts} from '../../utils';
import {LockPurple, ModalSuccess, ModalFailed} from '../../assets';

const BankAccountConnect = ({onCancel}) => {
  const [form, setForm] = useState({
    routingNumber: '',
    accountNumber: '',
    confirmAccountNumber: '',
  });
  const [modalSuccess, setModalSuccess] = useState(false);

  const handleConnectAccount = () => {
    setModalSuccess(true);
    onCancel();
  };
  const isButtonSubmitEnabled =
    form.routingNumber && form.accountNumber && form.confirmAccountNumber;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      {/* Modal Failed */}
      {/* <Modal
        imageSrc={ModalFailed}
        title="Something’s Wrong"
        subtitle="We’re unable to connect to your bank account, please check your internet connection and tyr again."
        btn1Text="Try Again"
        btn2Text="Close"
        // btn1Onpress={() =>{}}
        visible={modalSuccess}
        onClose={() => {
          setModalSuccess(false);
        }}
      /> */}
      <Modal
        imageSrc={ModalSuccess}
        title="Bank Account Connected!"
        subtitle="Your bank account is succesfuly connected with NodPay"
        visible={modalSuccess}
        btn1Text="Close"
        btn1Onpress={() => {
          setModalSuccess(false);
        }}
        onClose={() => {
          setModalSuccess(false);
        }}
      />

      <PageTitle
        isCloseMode
        onPressClose={onCancel}
        title="Connect Bank Account"
        titleStyle={styles.pageTitle}
      />

      <ScrollView contentContainerStyle={styles.listContainer}>
        <View style={{flex: 1}}>
          <InputText
            label="Routing Number"
            placeholder="Enter routing number"
            placeholderTextColor={color.grey_3}
            value={form.routingNumber}
            onChangeText={val =>
              setForm(prev => ({...prev, routingNumber: val}))
            }
            keyboardType="number-pad"
          />
          <InputText
            label="Account Number"
            placeholder="Enter account number"
            placeholderTextColor={color.grey_3}
            value={form.accountNumber}
            onChangeText={val =>
              setForm(prev => ({...prev, accountNumber: val}))
            }
            keyboardType="number-pad"
          />
          <InputText
            label="Confirm Account Number"
            placeholder="Confirm account number"
            placeholderTextColor={color.grey_3}
            value={form.confirmAccountNumber}
            onChangeText={val =>
              setForm(prev => ({...prev, confirmAccountNumber: val}))
            }
            keyboardType="number-pad"
          />

          <InfoMessage
            icon={LockPurple}
            message="Your bank account information is safe and protected with NodPay"
          />
        </View>
        {/* <ErrorMessage message="Invalid Bank account information, please check your information and try again" /> */}
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' && 'position'}
        style={styles.addButtonContainer}>
        <Button
          disabled={!isButtonSubmitEnabled}
          onPress={handleConnectAccount}
          title="Connect Bank Account"
          btnStyle={{
            backgroundColor: isButtonSubmitEnabled
              ? color.btn_black
              : color.grey,
            flex: 1,
          }}
          titleStyle={{color: 'white'}}
        />
      </KeyboardAvoidingView>
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
  listContainer: {
    marginHorizontal: dimens.default,
    marginVertical: 0,
    flexGrow: 1,
  },
  addButtonContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dimens.default,
    paddingVertical: dimens.default_12,
  },
});

export default BankAccountConnect;
