import React from 'react';

import {View, StyleSheet} from 'react-native';

/**
 * Divider component for standalone line horizontal like a border bottom
 * @param   {int}   t   Value of margin top on integer
 * @param   {int}   b   Value of margin bottom on integer
 */
const Divider = ({t, b}) => {
  return <View style={[styles.divider, {marginTop: t, marginBottom: b}]} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    backgroundColor: 'lightgray',
    width: '100%',
  },
});
