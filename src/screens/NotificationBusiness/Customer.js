import React, {useState} from 'react';
import {StyleSheet, ScrollView, SectionList} from 'react-native';
import moment from 'moment';

//where local files imported
import {dimens} from '../../utils';
import {SectionTitle, NotifActivityItem} from '../../components';
import {People1} from '../../assets';

const NotificationCustomer = () => {
  const [notifCustomerData, setNotifCustomerData] = useState([
    {
      photo: People1,
      name: 'Thania',
      action: 'paid',
      action2: 'Bills',
      info: 'Coffee',
      date: moment().subtract(1, 'minutes'),
      type: 'in',
      amount: 1000,
      isUnread: true,
    },
    {
      photo: People1,
      name: 'Mikael',
      action: 'paid',
      action2: 'Bills',
      info: 'Coffee & Pasta',
      date: moment().subtract(12, 'minutes'),
      type: 'in',
      amount: 1000,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Nana',
      action: 'paid',
      action2: 'Bills',
      info: 'Spaghetti',
      date: moment().subtract(56, 'minutes'),
      type: 'in',
      amount: 500,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Ben',
      action: 'paid',
      action2: 'Bills',
      info: 'Spaghetti',
      date: moment().subtract(1, 'days'),
      type: 'in',
      amount: 500,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Connor',
      action: 'paid',
      action2: 'Bills',
      info: 'Spaghetti',
      date: moment().subtract(1, 'days'),
      type: 'in',
      amount: 500,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'John',
      action: 'paid',
      action2: 'Bills',
      info: 'Spaghetti',
      date: moment().subtract(3, 'days'),
      type: 'in',
      amount: 125,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Diana',
      action: 'paid',
      action2: 'Bills',
      info: 'Spaghetti',
      date: moment().subtract(4, 'days'),
      type: 'in',
      amount: 125,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'John',
      action: 'paid',
      action2: 'Bills',
      info: 'Spaghetti',
      date: moment().subtract(3, 'days'),
      type: 'in',
      amount: 125,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Diana',
      action: 'paid',
      action2: 'Bills',
      info: 'Spaghetti',
      date: moment().subtract(4, 'days'),
      type: 'in',
      amount: 125,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'John',
      action: 'paid',
      action2: 'Bills',
      info: 'Spaghetti',
      date: moment().subtract(3, 'days'),
      type: 'in',
      amount: 125,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Diana',
      action: 'paid',
      action2: 'Bills',
      info: 'Spaghetti',
      date: moment().subtract(4, 'days'),
      type: 'in',
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

export default NotificationCustomer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimens.default_16,
  },
});
