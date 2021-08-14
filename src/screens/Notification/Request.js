import React, {useState} from 'react';
import {StyleSheet, ScrollView, FlatList} from 'react-native';
import moment from 'moment';

//where local files imported
import {dimens} from '../../utils';
import {RequestMoneyItem} from '../../components';
import {People1} from '../../assets';

const NotificationRequest = () => {
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

  return (
    <FlatList
      contentContainerStyle={{paddingBottom: dimens.small}}
      style={styles.container}
      data={notifRequestData}
      renderItem={({item}) => (
        <RequestMoneyItem
          photo={item.photo}
          name={item.name}
          action={item.action}
          info={item.info}
          date={item.date}
          type={item.type}
          amount={item.amount}
          isRequested={item.isRequested}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default NotificationRequest;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimens.default_16,
  },
});
