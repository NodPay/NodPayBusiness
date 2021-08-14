import React from 'react';
import {ActivityIndicator} from 'react-native';

/**
 * Loading component for circle loading
 * @param   {string}  size    Size of loading
 * @param   {string}  color   Color of loading
 */
const Loading = ({size = 'small', color = 'black', style}) => {
  return <ActivityIndicator size={size} color={color} style={style} />;
};

export default Loading;
