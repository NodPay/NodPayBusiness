import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, FlatList} from 'react-native';

//where local files imported
import {dimens, color, fonts} from '../../utils';
import {EmptyState, SectionTitle, TransactionItem, Gap} from '../../components';
import {People1, EmptyData} from '../../assets';

const NotificationRequest = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [notifRequestData, setNotifRequestData] = useState([
    {
      id: 1,
      photo: People1,
      name: 'Connor',
      action: 'request you money',
      info: 'For groceries',
      date: '2m',
      type: 'out',
      amount: 125,
      isRequested: false,
    },
    {
      id: 2,
      photo: People1,
      name: 'You',
      action: 'requested Bruno',
      info: 'For groceries',
      date: '1m',
      type: 'in',
      amount: 75,
      isRequested: true,
    },
    {
      id: 3,
      photo: People1,
      name: 'Connor',
      action: 'request you money',
      info: 'For groceries',
      date: '2m',
      type: 'out',
      amount: 125,
      isRequested: false,
    },
    {
      id: 4,
      photo: People1,
      name: 'You',
      action: 'requested Bruno',
      info: 'For groceries',
      date: '1m',
      type: 'in',
      amount: 75,
      isRequested: true,
    },
    {
      id: 5,
      photo: People1,
      name: 'Connor',
      action: 'request you money',
      info: 'For groceries',
      date: '2m',
      type: 'out',
      amount: 125,
      isRequested: false,
    },
    {
      id: 6,
      photo: People1,
      name: 'You',
      action: 'requested Bruno',
      info: 'For groceries',
      date: '1m',
      type: 'in',
      amount: 75,
      isRequested: true,
    },
  ]);
  const dataList = [
    {name: 'Starbuck', type: 'Groceries', pay: '75'},
    {name: 'Apple', type: 'Tech', pay: '69'},
    {name: 'Starbuck', type: 'Groceries', pay: '75'},
    {name: 'Apple', type: 'Tech', pay: '69'},
    {name: 'Starbuck', type: 'Groceries', pay: '75'},
    {name: 'Apple', type: 'Tech', pay: '69'},
    {name: 'Starbuck', type: 'Groceries', pay: '75'},
    {name: 'Apple', type: 'Tech', pay: '69'},
    {name: 'Starbuck', type: 'Groceries', pay: '75'},
    {name: 'Apple', type: 'Tech', pay: '69'},
  ];

  return isEmpty ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <EmptyState
        icon={EmptyData}
        iconSize={72}
        content={`You currently have\nno transaction`}
      />
    </View>
  ) : (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: -dimens.small,
          marginBottom: dimens.default,
        }}>
        <View style={styles.infoContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.infoLabelText}>Total transaction</Text>
          </View>
          <Text style={styles.infoValueText}>324</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.infoLabelText}>Total amount</Text>
          </View>
          <Text style={styles.infoValueText}>Rs 45.546</Text>
        </View>
      </View>
      <SectionTitle title="Transaction History" />
      <FlatList
        data={dataList}
        style={{marginTop: -30, paddingBottom: 30}}
        renderItem={({item}) => <TransactionItem isMinus {...item} />}
        keyExtractor={(item, key) => key.toString()}
      />
      <Gap t={dimens.very_large} />
    </ScrollView>
  );
};

export default NotificationRequest;

const styles = StyleSheet.create({
  container: {
    padding: dimens.default_16,
    backgroundColor: color.btn_white_2,
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: dimens.default,
    borderRadius: dimens.default,
    flex: 1,
    marginHorizontal: dimens.small,
    elevation: 2,
    shadowRadius: 5,
    shadowOffset: {height: 2},
    shadowOpacity: 0.07,
  },
  infoLabelText: {
    fontSize: dimens.default_14,
    lineHeight: dimens.default_18,
    fontFamily: fonts.sofia_regular,
    color: color.btn_black,
  },
  infoValueText: {
    fontSize: dimens.medium,
    lineHeight: dimens.large_28,
    fontFamily: fonts.sofia_bold,
    marginTop: dimens.small,
    color: color.btn_black,
  },
});
