import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

//where local files imported
import {color, dimens} from '../../utils';
import {InputText, PickerItem} from '../../components';
import useStateContext from '../../store/useStateContext';
import {setFormEditProfileBusiness} from '../../store/action';

const Address = () => {
  const {dispatch} = useStateContext();

  const [data, setData] = useState({
    zipCode: '',
    country: '',
    state: '',
    city: '',
    adress: '',
  });

  const [country, setCountry] = useState([
    {
      id: 0,
      title: 'Select Country',
    },
    {
      id: 1,
      title: 'Pakistan',
    },
  ]);

  const [states, setStates] = useState([
    {
      id: 0,
      title: 'Select State',
    },
    {
      id: 1,
      title: 'loading..',
    },
  ]);

  const [city, setCity] = useState([
    {
      id: 0,
      title: 'Select City',
    },
    {
      id: 1,
      title: 'loading..',
    },
  ]);

  const [selectedCountry, setSelectedCountry] = useState(country[0].title);
  const [selectedStates, setSelectedStates] = useState(states[0].title);
  const [selectedCity, setSelectedCity] = useState(city[0].title);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <InputText
          label="ZIP Code"
          value={data.zipCode}
          placeholder="Enter ZIP Code"
          placeholderTextColor={color.grey_2}
          onChangeText={value => {
            setData({...data, zipCode: value});
            dispatch(setFormEditProfileBusiness('zipCode', value));
          }}
        />
        <PickerItem
          data={country}
          selectedCategory={selectedCountry}
          setSelectedCategory={item => {
            setSelectedCountry(item.title);
            if (item.id == 0) {
              dispatch(setFormEditProfileBusiness('country', ''));
            } else {
              dispatch(setFormEditProfileBusiness('country', item.title));
            }
          }}
          label="Country"
        />
        <PickerItem
          data={states}
          selectedCategory={selectedStates}
          setSelectedCategory={item => {
            setSelectedStates(item.title);
            if (item.id == 0) {
              dispatch(setFormEditProfileBusiness('state', ''));
            } else {
              dispatch(setFormEditProfileBusiness('state', item.title));
            }
          }}
          label="State"
        />
        <PickerItem
          data={city}
          selectedCategory={selectedCity}
          setSelectedCategory={item => {
            setSelectedCity(item.title);
            if (item.id == 0) {
              dispatch(setFormEditProfileBusiness('city', ''));
            } else {
              dispatch(setFormEditProfileBusiness('city', item.title));
            }
          }}
          label="City"
        />
        <InputText
          label="Address"
          value={data.address}
          placeholder="Enter your business description"
          placeholderTextColor={color.grey_2}
          onChangeText={value => {
            setData({...data, description: value});
            dispatch(setFormEditProfileBusiness('description', value));
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: dimens.default_16,
  },
});
