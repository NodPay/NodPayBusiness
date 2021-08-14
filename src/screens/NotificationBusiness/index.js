import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

//where local files imported
import {color} from '../../utils';
import {PageTitle, EmptyState, Tabbed} from '../../components';
import {ContactBackground, EmptyData} from '../../assets';
import Customer from './Customer';
import Transaction from './Transaction';

const NotificationBusiness = ({navigation}) => {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Notifications"
        titleStyle={{color: color.btn_black}}
      />
      {isEmpty ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <EmptyState
            icon={EmptyData}
            iconSize={72}
            content={`You currently have\nno notifications`}
          />
        </View>
      ) : (
        <Tab.Navigator tabBar={props => <Tabbed {...props} />}>
          <Tab.Screen name="Customer" component={Customer} />
          <Tab.Screen name="Transaction" component={Transaction} />
        </Tab.Navigator>
      )}
      <Image source={ContactBackground} style={styles.bg_contact} />
    </SafeAreaView>
  );
};

export default NotificationBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  bg_contact: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    width: '100%',
    resizeMode: 'stretch',
  },
});
