import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

//where local file imported
import {dimens, fonts, color} from '../../utils';
import {Plus, HomeBalanceBackground, Withdraw} from '../../assets';

/**
 * Component to show balance amount/info in Home page or Drawer
 * @param  {string} type              where the component placed
 * @param  {int} moneyAmount          money balance
 * @param  {string} backgroundColor
 * @param  {func} onPressAdd          When plus icon pressed
 */
const BalanceInfo = ({type, moneyAmount, backgroundColor, onPressAdd}) => {
  if (type == 'home') {
    return (
      <ImageBackground
        source={HomeBalanceBackground}
        style={styles.container}
        imageStyle={{borderRadius: dimens.default, resizeMode: 'stretch'}}>
        <View>
          <Text style={styles.title}>Available Balance</Text>
          <Text style={styles.moneyAmount}>Rs {moneyAmount || '0'}</Text>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={onPressAdd}>
          <Image source={Plus} style={[styles.addIcon, {height: 50}]} />
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  if (type == 'business') {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor || color.btn_white_2,
            borderRadius: dimens.default,
          },
        ]}>
        <View>
          <Text style={[styles.title, {color: color.grey_2}]}>
            Available Balance
          </Text>
          <Text style={styles.drawerMoneyAmount}>Rs {moneyAmount || '0'}</Text>
        </View>

        <TouchableOpacity style={styles.drawerAddButton} onPress={onPressAdd}>
          <Image source={Withdraw} style={[styles.addIcon, {height: 30}]} />
        </TouchableOpacity>
      </View>
    );
  }

  if (type == 'drawer') {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor || color.btn_white_2,
            borderRadius: dimens.default,
          },
        ]}>
        <View>
          <Text style={[styles.title, {color: color.grey_2}]}>
            Available Balance
          </Text>
          <Text style={styles.drawerMoneyAmount}>Rs {moneyAmount || '0'}</Text>
        </View>

        <TouchableOpacity style={styles.drawerAddButton} onPress={onPressAdd}>
          <Image source={Plus} style={[styles.addIcon, {height: 30}]} />
        </TouchableOpacity>
      </View>
    );
  }
  if (type == 'virtualCardDetails') {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor || color.purple,
            borderRadius: dimens.default,
            paddingVertical: dimens.default,
            marginTop: dimens.default,
          },
        ]}>
        <View>
          <Text style={[styles.title, {color: color.grey_2}]}>
            Available Balance
          </Text>
          <Text style={styles.drawerMoneyAmount}>Rs {moneyAmount || '0'}</Text>
        </View>

        <TouchableOpacity style={styles.drawerAddButton} onPress={onPressAdd}>
          <Image source={Plus} style={[styles.addIcon, {height: 30}]} />
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: dimens.medium,
  },
  title: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
    color: 'white',
  },
  moneyAmount: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.large_40,
    color: 'white',
    lineHeight: 50,
  },
  addButton: {
    backgroundColor: color.btn_black,
    borderRadius: dimens.default,
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    resizeMode: 'contain',
  },

  // Type: Drawer
  drawerMoneyAmount: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.medium,
    color: color.btn_black,
  },
  drawerAddButton: {
    backgroundColor: color.loading,
    width: 38,
    height: 38,
    borderRadius: dimens.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BalanceInfo;
