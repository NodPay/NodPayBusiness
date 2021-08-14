import {Platform} from 'react-native';

export const fonts = {
  noto_regular: Platform.OS === 'android' ? 'NotoSans-Regular' : 'NotoSans',
  noto_bold: 'NotoSans-Bold',
  noto_italic: 'NotoSans-Italic',
  noto_bold_italic: 'NotoSans-BoldItalic',
  sofia_regular: Platform.OS === 'android' ? 'SofiaPro-Regular' : 'SofiaPro',
  sofia_bold: 'SofiaPro-Bold',
  sofia_italic: 'SofiaPro-Italic',
  sofia_medium: 'SofiaPro-Medium',
};
