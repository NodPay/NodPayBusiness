import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView, Text} from 'react-native';
import {uniqBy} from 'lodash';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {
  Button,
  InputSwitch,
  InputCheck,
  PageTitle,
  SettingsSaveButton,
} from '../components';
import {FacebookWhite} from '../assets';

const Accesbility = ({navigation}) => {
  const [topUpTransaction, setTopUpTransaction] = useState(true);
  const [transferToBank, setTransferToBank] = useState(false);
  const [cashACheck, setCashACheck] = useState(false);
  const [report, setReport] = useState(true);
  const [transaction, setTransaction] = useState(false);
  const [employeeList, setEmployeeList] = useState(false);
  const [addEmployee, setAddEmployee] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        title="Accesbility"
        titleStyle={{color: color.btn_black}}
        isBlackArrow
      />
      <ScrollView style={styles.content}>
        <Text style={styles.label}>Transaction</Text>
        <InputSwitch
          label="Top Up Transaction"
          value={topUpTransaction}
          onChange={setTopUpTransaction}
        />
        <InputSwitch
          label="Transer to Bank"
          value={transferToBank}
          onChange={setTransferToBank}
        />
        <InputSwitch
          label="Cash a Check"
          value={cashACheck}
          onChange={setCashACheck}
        />
        <Text style={styles.label}>Book Keeping</Text>
        <InputSwitch label="Report" value={report} onChange={setReport} />
        <InputSwitch
          label="Transaction"
          value={transaction}
          onChange={setTransaction}
        />
        <Text style={styles.label}>Employee</Text>
        <InputSwitch
          label="Employee List"
          value={employeeList}
          onChange={setEmployeeList}
        />
        <InputSwitch
          label="Add Employee"
          value={addEmployee}
          onChange={setAddEmployee}
        />
      </ScrollView>
      <SettingsSaveButton />
    </SafeAreaView>
  );
};

export default Accesbility;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  content: {
    padding: dimens.default_16,
    flex: 1,
  },
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey_2,
    paddingVertical: dimens.small,
  },
  labelGroup: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey,
    paddingTop: dimens.small_10,
  },
  gap: {
    height: 50,
  },
});
