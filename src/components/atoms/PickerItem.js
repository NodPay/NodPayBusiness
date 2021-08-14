import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import {CloseRed, Down} from '../../assets';
import Gap from './Gap';
import {FormLabel} from '.';

/**
 * PickerItem component for dropdown/selectbox using bottom sheet
 * @param   {array}   data                Data list dropdown of array
 * @param   {string}  selectedCategory    Value text selected
 * @param   {func}    setSelectedCategory Triggered onchange of value
 * @param   {string}  label               Label of dropdown/selectbox
 * @param   {object}  labelStyle          For custom label style
 */
const PickerItem = ({
  data = [],
  selectedCategory,
  setSelectedCategory,
  label,
  labelStyle,
}) => {
  const btmSheefRef = useRef(null);

  const RenderItem = ({onPress, title}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            styles.text,
            {
              fontSize: dimens.default_18,
              marginBottom: dimens.default,
              fontFamily: fonts.sofia_bold,
            },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Gap t={dimens.default} />
      <FormLabel label={label} labelStyle={labelStyle} />
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.5}
        onPress={() => btmSheefRef.current.open()}>
        <Text style={styles.text}>{selectedCategory || data[0].title}</Text>
        <Image
          source={Down}
          style={{height: 15, width: 15, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
      <RBSheet
        ref={btmSheefRef}
        height={375}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: dimens.default_16,
            borderTopRightRadius: dimens.default_16,
            padding: dimens.default,
          },
        }}>
        <Gap t={dimens.supersmall} />
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <RenderItem
              {...item}
              onPress={() => {
                setSelectedCategory(item);
                btmSheefRef.current.close();
              }}
            />
          )}
          ListEmptyComponent={() => <Text style={styles.text}>loading..</Text>}
        />
      </RBSheet>
    </View>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: dimens.small,
    paddingHorizontal: dimens.default,
    borderRadius: dimens.large_50,
    height: dimens.large_50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    fontWeight: 'normal',
    color: color.btn_black,
  },
});
