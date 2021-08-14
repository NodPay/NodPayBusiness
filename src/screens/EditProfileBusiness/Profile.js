import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

//where local files imported
import {color, dimens} from '../../utils';
import {InputPhoto, InputText, PickerItem} from '../../components';
import {setFormEditProfileBusiness} from '../../store/action';
import useStateContext from '../../store/useStateContext';

const Profile = () => {
  const {dispatch} = useStateContext();

  const [data, setData] = useState({
    logo: '',
    category: '',
    description: '',
  });

  const [category, setCategory] = useState([
    {
      id: 0,
      title: 'Select Category',
    },
    {
      id: 1,
      title: 'Food And Beverage',
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(category[0].title);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <InputPhoto type="business" />
        <InputText
          label="Business Name"
          value={data.description}
          placeholder="Enter your business name"
          placeholderTextColor={color.grey_2}
          onChangeText={value => {
            setData({...data, name: value});
            dispatch(setFormEditProfileBusiness('name', value));
          }}
        />
        <PickerItem
          data={category}
          selectedCategory={selectedCategory}
          setSelectedCategory={item => {
            setSelectedCategory(item.title);
            if (item.id == 0) {
              dispatch(setFormEditProfileBusiness('category', ''));
            } else {
              dispatch(setFormEditProfileBusiness('category', item.title));
            }
          }}
          label="Business Category"
        />
        <InputText
          label="Business Description"
          value={data.description}
          placeholder="Enter your business description"
          placeholderTextColor={color.grey_2}
          onChangeText={value => {
            setData({...data, description: value});
            dispatch(setFormEditProfileBusiness('description', item.title));
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: dimens.default_16,
  },
});
