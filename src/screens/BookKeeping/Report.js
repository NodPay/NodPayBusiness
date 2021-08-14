import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import {BarChart, XAxis, YAxis} from 'react-native-svg-charts';
import {G, Rect, Line} from 'react-native-svg';
import {max} from 'lodash';

//where local files imported
import {dimens, color, fonts} from '../../utils';
import {SectionTitle, TransactionItem, EmptyState, Gap} from '../../components';
import {People1, DownBlack, EmptyData} from '../../assets';

const NotificationActivity = () => {
  const [isEmpty, setIsEmpty] = useState(false);
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

  const data1 = [450, 350, 390, 330];
  const data2 = [150, 140, 330, 180];

  const barData = [
    {
      data: data1,
      svg: {
        fill: 'transparent',
        onPress: () => console.log('Display value and index for data 1'),
      },
    },
    {
      data: data2,
      svg: {
        fill: 'transparent',
        borderRadius: 20,
        onPress: () => console.log('Display value and index for data 2'),
      },
    },
  ];

  const RoundedBars = ({x, y, height, bandwidth, data}) => {
    return data.map((item, index) => (
      <G key={index}>
        {item.data.map((itemSub, indexSub) => (
          <G key={indexSub}>
            <Rect
              x={index === 0 ? x(indexSub) : x(indexSub) + bandwidth / 2}
              y={y(itemSub)} // Subtract Height / 2 to make half of the Rect above the bar
              rx={5} // Set to Height / 2
              ry={5} // Set to Height / 2
              width={(bandwidth - 10) / 2}
              height={height - 15 - y(itemSub)} // Height of the Rect
              fill={index === 0 ? color.loading : color.blue}
            />
          </G>
        ))}
      </G>
    ));
  };

  const CustomGrid = ({y, ticks}) => (
    <G>
      {
        // Horizontal grid
        ticks.map(tick => (
          <Line
            key={tick}
            x1={'0%'}
            x2={'100%'}
            y1={y(tick)}
            y2={y(tick)}
            stroke={'rgba(0,0,0,0.1)'}
            strokeDasharray="5, 5"
          />
        ))
      }
    </G>
  );

  return isEmpty ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <EmptyState
        icon={EmptyData}
        iconSize={72}
        content={`You currently have\nno report`}
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
        <View
          style={[
            styles.infoContainer,
            {
              borderColor: color.emoji_active,
              backgroundColor: color.purple,
            },
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={[
                styles.infoLabel,
                {
                  backgroundColor: color.emoji_active,
                },
              ]}
            />
            <Text style={styles.infoLabelText}>Income</Text>
          </View>
          <Text style={styles.infoValueText}>Rs 32.400</Text>
        </View>
        <View
          style={[
            styles.infoContainer,
            {
              borderColor: color.blue,
              backgroundColor: color.blue_2,
            },
          ]}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={[
                styles.infoLabel,
                {
                  backgroundColor: color.blue,
                },
              ]}
            />
            <Text style={styles.infoLabelText}>Expense</Text>
          </View>
          <Text style={styles.infoValueText}>Rs 32.400</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <SectionTitle
          title="Statistic Overview"
          subtitle="Mei 1, 2021 - Mei 30, 2021"
          subTitleStyle={{color: color.grey_2, marginTop: dimens.supersmall}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: color.bg_grey,
            paddingHorizontal: dimens.default_14,
            paddingVertical: dimens.small_10,
            borderRadius: dimens.small,
          }}>
          <Text
            style={{
              fontSize: dimens.default_14,
              lineHeight: dimens.default_18,
              fontFamily: fonts.sofia_bold,
              color: color.btn_black,
              marginRight: dimens.small,
            }}>
            Monthly
          </Text>
          <Image
            style={{
              width: dimens.small_10,
              height: dimens.small_10,
              resizeMode: 'contain',
            }}
            source={DownBlack}
          />
        </View>
      </View>
      <View style={{height: 200, flexDirection: 'row', flex: 1}}>
        <YAxis
          data={data1}
          contentInset={{top: 20, bottom: 32}}
          svg={{
            fill: color.grey_2,
            fontSize: dimens.default_14,
            lineHeight: dimens.default_18,
            fontFamily: fonts.sofia_regular,
          }}
          numberOfTicks={6}
          min={0}
          max={Math.round(max(data1.concat(data2)) / 100) * 100}
          formatLabel={value => ` Rs ${value} `}
        />
        <View style={{flex: 1, paddingLeft: dimens.small}}>
          <BarChart
            spacingInner={0.4}
            style={{flex: 1}}
            data={barData}
            gridMin={0}
            contentInset={{top: 10, bottom: 40}}>
            <RoundedBars />
            <CustomGrid belowChart={true} />
          </BarChart>
          <XAxis
            data={data1}
            formatLabel={(value, index) => index}
            contentInset={{left: 25, right: 28}}
            svg={{
              fill: color.grey_2,
              fontSize: dimens.default_13,
              lineHeight: dimens.default_18,
              fontFamily: fonts.sofia_regular,
            }}
            formatLabel={value => `Week ${value + 1}`}
          />
        </View>
      </View>
      <SectionTitle title="Highest Expenses" />
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
    padding: dimens.default_16,
    backgroundColor: color.btn_white_2,
  },
  infoContainer: {
    padding: dimens.default,
    borderWidth: 2,
    borderRadius: dimens.default,
    flex: 1,
    marginHorizontal: dimens.small,
  },
  infoLabel: {
    width: dimens.default,
    height: dimens.default,
    borderRadius: dimens.supersmall,
    marginRight: dimens.small_6,
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
