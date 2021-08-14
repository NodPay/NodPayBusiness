import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

//where local files imported
import {DefaultPict, Next, NextBlack, ThreeDots} from '../../assets';
import {color, dimens, fonts} from '../../utils';
import {Gap} from '../atoms';
/**
 * Item of employee list
 * @param  {boolean} isOnline     is employee online?
 * @param  {boolean} isPending    pending status
 * @param  {string} name          employee name
 * @param  {string} job           employee job
 * @param  {string} added         Added status
 * @param  {func} onDetail        When detail is pressed
 */
const EmployeeItem = ({isOnline, isPending, name, job, added, onDetail}) => {
  if (isPending) {
    return (
      <View style={[styles.container, {height: 80}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={DefaultPict} style={styles.img} />
            <View style={{marginLeft: dimens.default}}>
              <Text style={styles.name}>{name || 'Name'}</Text>
              <Text style={[styles.job, {color: color.grey, width: '100%'}]}>
                Pending Invitation
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={ThreeDots}
              style={{
                height: 24,
                width: 24,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={DefaultPict} style={styles.img} />
          {isOnline && <View style={styles.onlineBadge} />}
          <View style={{marginLeft: dimens.default}}>
            <Text style={styles.name}>{name || 'Name'}</Text>
            <Text style={styles.job}>{job || 'Job'}</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={ThreeDots}
            style={{
              height: 24,
              width: 24,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
      <Gap t={dimens.default} />
      <View
        style={{
          height: 0.2,
          borderRadius: 0.1,
          backgroundColor: color.grey,
          marginBottom: 5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.date}>Added: {added}</Text>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={onDetail}>
          <Text style={styles.detail}>Detail</Text>
          <Image
            source={NextBlack}
            style={{height: 24, width: 24, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmployeeItem;

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: dimens.default,
    padding: dimens.default,
    marginBottom: dimens.default,
  },
  img: {
    height: 48,
    width: 48,
    borderRadius: 48,
    resizeMode: 'contain',
    borderWidth: 0.1,
  },
  name: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    color: color.btn_black,
  },
  job: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    color: color.bg_color,
    backgroundColor: color.purple,
    height: 24,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  onlineBadge: {
    height: 16,
    width: 16,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: color.green,
    position: 'absolute',
    bottom: 0,
    left: 32,
  },
  date: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
    color: 'lightgray',
  },
  detail: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    color: color.btn_black,
  },
});
