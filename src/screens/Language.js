import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {
  BR,
  CloseRed,
  CN,
  DE,
  DK,
  ES,
  FR,
  GB,
  IN,
  IT,
  JP,
  Select,
  Selected,
  US,
} from '../assets';
import {Gap, SettingsSaveButton} from '../components';

const Languange = ({navigation}) => {
  const [selected, setSelected] = useState(3);

  const data = [
    {
      id: 0,
      name: 'Dansk',
      icon: DK,
    },
    {
      id: 1,
      name: 'Deutch',
      icon: DE,
    },
    {
      id: 2,
      name: 'English, UK',
      icon: GB,
    },
    {
      id: 3,
      name: 'English, US',
      icon: US,
    },
    {
      id: 4,
      name: 'Spanish',
      icon: ES,
    },
    {
      id: 5,
      name: 'French',
      icon: FR,
    },
    {
      id: 6,
      name: 'Italy',
      icon: IT,
    },
    {
      id: 7,
      name: 'Japan',
      icon: JP,
    },
    {
      id: 8,
      name: 'China',
      icon: CN,
    },
    {
      id: 9,
      name: 'Portugese',
      icon: BR,
    },
    {
      id: 10,
      name: 'Urdu',
      icon: IN,
    },
  ];

  const RenderItem = ({icon, name, selected, onPress}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: dimens.default_16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={icon} style={{height: 20, width: 28}} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <Image
          source={selected ? Selected : Select}
          style={{height: 24, width: 24}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <TouchableOpacity
          style={styles.close}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          <Image
            source={CloseRed}
            style={{height: dimens.large_40, width: dimens.large_40}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Languange</Text>
      </View>
      <Gap t={dimens.default_16} />
      <View style={{flex: 1, paddingHorizontal: dimens.default_16}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <RenderItem
              onPress={() => setSelected(item.id)}
              {...item}
              selected={item.id == selected ? true : false}
            />
          )}
        />
      </View>
      <SettingsSaveButton />
    </SafeAreaView>
  );
};

export default Languange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: dimens.default_16,
  },
  close: {
    position: 'absolute',
    left: dimens.default_16,
    top: dimens.default_16,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    marginTop: 8,
  },
  name: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    paddingHorizontal: dimens.default_16,
  },
});
