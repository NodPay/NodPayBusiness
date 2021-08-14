import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {
  ContactItem,
  FeedItem,
  Gap,
  InputSearch,
  PageTitle,
} from '../components';

const SearchEmployee = ({navigation}) => {
  const [search, setSearch] = useState('');

  const [data, setData] = useState([
    {
      id: 0,
      name: 'bae',
      phoneNumber: '+62 6869 69696969',
    },
    {
      id: 1,
      name: 'andi',
      phoneNumber: '+62 6869 69696969',
    },
    {
      id: 2,
      name: 'garry',
      phoneNumber: '+62 6869 69696969',
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} />
      <PageTitle
        title="Search Account"
        isBlackArrow
        titleStyle={{color: color.btn_black}}
      />
      <View style={{padding: dimens.default}}>
        <InputSearch
          backgroundColor={color.bg_input_comment}
          placeholder="Account Name"
          value={search}
          onChangeText={val => setSearch(val)}
          onSubmitEditing={() => alert(search)}
        />
        <Gap t={dimens.default} />
        <Text style={styles.title}>Recent Search</Text>
      </View>

      {/* List Account */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ContactItem
            {...item}
            onPress={() => navigation.navigate('AddEmployee')}
          />
        )}
      />
      {/* List Account end */}
    </SafeAreaView>
  );
};

export default SearchEmployee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_grey,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    color: color.btn_black,
  },
});
