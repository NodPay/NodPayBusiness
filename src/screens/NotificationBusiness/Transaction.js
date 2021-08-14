import React, {useState} from 'react';
import {StyleSheet, ScrollView, SectionList} from 'react-native';
import moment from 'moment';

//where local files imported
import {dimens} from '../../utils';
import {SectionTitle, NotifActivityItem} from '../../components';
import {Starbucks} from '../../assets';

const NotificationTransaction = () => {
  const [notifCustomerData, setNotifCustomerData] = useState([
    {
      photo: Starbucks,
      name: 'You',
      action: 'paid',
      action2: 'Starbucks',
      info: 'Coffee',
      date: moment().subtract(1, 'minutes'),
      type: 'out',
      amount: 1000,
      isUnread: true,
    },
    {
      photo: Starbucks,
      name: 'You',
      action: 'paid',
      action2: 'Starbucks',
      info: 'Coffee & Pasta',
      date: moment().subtract(12, 'minutes'),
      type: 'out',
      amount: 1000,
      isUnread: false,
    },
    {
      photo: Starbucks,
      name: 'You',
      action: 'paid',
      action2: 'Starbucks',
      info: 'Spaghetti',
      date: moment().subtract(56, 'minutes'),
      type: 'out',
      amount: 500,
      isUnread: false,
    },
    {
      photo: Starbucks,
      name: 'You',
      action: 'paid',
      action2: 'Starbucks',
      info: 'Spaghetti',
      date: moment().subtract(1, 'days'),
      type: 'out',
      amount: 500,
      isUnread: false,
    },
    {
      photo: Starbucks,
      name: 'You',
      action: 'paid',
      action2: 'Starbucks',
      info: 'Spaghetti',
      date: moment().subtract(1, 'days'),
      type: 'out',
      amount: 500,
      isUnread: false,
    },
    {
      photo: Starbucks,
      name: 'You',
      action: 'paid',
      action2: 'Starbucks',
      info: 'Spaghetti',
      date: moment().subtract(3, 'days'),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
    {
      photo: Starbucks,
      name: 'You',
      action: 'paid',
      action2: 'Starbucks',
      info: 'Spaghetti',
      date: moment().subtract(4, 'days'),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
    {
      photo: Starbucks,
      name: 'You',
      action: 'paid',
      action2: 'Starbucks',
      info: 'Spaghetti',
      date: moment().subtract(3, 'days'),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
    {
      photo: Starbucks,
      name: 'You',
      action: 'paid',
      action2: 'Starbucks',
      info: 'Spaghetti',
      date: moment().subtract(4, 'days'),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
    {
      photo: Starbucks,
      name: 'You',
      action: 'paid',
      action2: 'Starbucks',
      info: 'Spaghetti',
      date: moment().subtract(3, 'days'),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
    {
      photo: Starbucks,
      name: 'You',
      action: 'paid',
      action2: 'Starbucks',
      info: 'Spaghetti',
      date: moment().subtract(4, 'days'),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
  ]);

  const [resultList, setResultList] = useState([
    {
      title: 'Today',
      data: notifCustomerData.filter(item => item.date > today()),
    },
    {
      title: 'Yesterday',
      data: notifCustomerData.filter(
        item => item.date <= today() && item.date > yesterday(),
      ),
    },
    {
      title: 'This Week',
      data: notifCustomerData.filter(
        item =>
          item.date <= today() &&
          item.date <= yesterday() &&
          item.date > thisWeek(),
      ),
    },
  ]);

  return (
    <SectionList
      style={styles.container}
      sections={resultList}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <NotifActivityItem
          photo={item.photo}
          name={item.name}
          action={item.action}
          action2={item.action2}
          info={item.info}
          date={item.date}
          type={item.type}
          amount={item.amount}
          isUnread={item.isUnread}
        />
      )}
      renderSectionHeader={({section: {title}}) => (
        <SectionTitle
          title={title}
          titleStyle={{
            fontSize: dimens.default_16,
          }}
          containerStyle={{
            paddingVertical: 0,
            paddingHorizontal: dimens.default_16,
            marginBottom: -20,
          }}
        />
      )}
    />
  );
};

const today = () => {
  var result = moment().hours(0);
  return result._d;
};

const yesterday = () => {
  var result = moment().subtract(1, 'days').hours(0);
  return result._d;
};

const thisWeek = () => {
  var result = moment().subtract(7, 'days').hours(0);
  return result._d;
};

export default NotificationTransaction;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimens.default_16,
  },
});
