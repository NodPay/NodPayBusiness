import React, {useState} from 'react';
import {StyleSheet, ScrollView, SectionList} from 'react-native';
import moment from 'moment';

//where local files imported
import {dimens} from '../../utils';
import {SectionTitle, NotifActivityItem} from '../../components';
import {People1} from '../../assets';

const NotificationActivity = () => {
  const [notifActivityData, setNotifActivityData] = useState([
    {
      photo: People1,
      name: 'Thania',
      action: 'request you money',
      info: 'For groceries',
      date: moment().subtract(1, 'minutes'),
      type: 'out',
      amount: 75,
      isUnread: true,
    },
    {
      photo: People1,
      name: 'John',
      action: 'accept your friend request',
      info: '',
      date: moment().subtract(3, 'hours'),
      type: '',
      amount: 0,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Ben',
      action: 'paid you money',
      info: 'For groceries',
      date: moment().subtract(1, 'days'),
      type: 'in',
      amount: 125,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Charles',
      action: 'commented on your post',
      info: 'For groceries',
      date: moment().subtract(1, 'days'),
      type: '',
      amount: 0,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Connor',
      action: 'request you money',
      info: 'For groceries',
      date: moment().subtract(1, 'days'),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'John',
      action: 'commented on your post',
      info: 'For groceries',
      date: moment().subtract(3, 'days'),
      type: '',
      amount: 0,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Diana',
      action: 'request you money',
      info: 'For groceries',
      date: moment().subtract(4, 'days'),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'John',
      action: 'commented on your post',
      info: 'For groceries',
      date: moment().subtract(3, 'days'),
      type: '',
      amount: 0,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Diana',
      action: 'request you money',
      info: 'For groceries',
      date: moment().subtract(4, 'days'),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'John',
      action: 'commented on your post',
      info: 'For groceries',
      date: moment().subtract(3, 'days'),
      type: '',
      amount: 0,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Diana',
      action: 'request you money',
      info: 'For groceries',
      date: moment().subtract(4, 'days'),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
  ]);

  const [resultList, setResultList] = useState([
    {
      title: 'Today',
      data: notifActivityData.filter(item => item.date > today()),
    },
    {
      title: 'Yesterday',
      data: notifActivityData.filter(
        item => item.date <= today() && item.date > yesterday(),
      ),
    },
    {
      title: 'This Week',
      data: notifActivityData.filter(
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

export default NotificationActivity;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimens.default_16,
  },
});
