import React from 'react';
import {View} from 'react-native';

/**
 * Gap component for make a white space like a spacing horizontal or vertical
 * @param   {int}   b   Margin bottom
 * @param   {int}   t   Margin top
 * @param   {int}   l   Margin left
 * @param   {int}   r   Margin right
 */
const Gap = ({b, t, l, r}) => {
  return (
    <View
      style={{
        marginTop: t,
        marginBottom: b,
        marginLeft: l,
        marginRight: r,
      }}
    />
  );
};

export default Gap;
