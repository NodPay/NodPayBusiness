import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// where local files imported
import {SelectAddressItem} from '../atoms';

/**
 * component to render selectItem
 */
const SelectAddressList = () => {
  const [selected, setSelected] = useState('');

  const [data] = useState([
    {
      id: 1,
      title: '2049 Center Street',
      subtitle: 'Albany, OR,Oregon,8989',
    },
    {
      id: 2,
      title: '4938 Cedar Lane',
      subtitle: 'Albany, OR,Oregon,8989',
    },
    {
      id: 3,
      title: '783 Olen Thomas Drive',
      subtitle: 'Albany, OR,Oregon,8989',
    },
  ]);
  return (
    <View>
      {data.map((item, index) => {
        return (
          <SelectAddressItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            selected={selected == item.id}
            onPress={() => {
              setSelected(item.id);
            }}
          />
        );
      })}
    </View>
  );
};

export default SelectAddressList;

const styles = StyleSheet.create({});
