import React, {useState} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

//where local files imported
import {dimens, fonts, color} from '../../utils';
import {DownBlack, UpBlack} from '../../assets';
/**
 * Accordion in FAQ, help section
 * @param  {string} title       FAQ title
 * @param  {string} description FAQ description
 * @param  {func} onPress       When FAQ is pressed
 */
const FaqAccordionItem = ({title, description, onPress}) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={() => {
        onPress();
        setShowDescription(prev => !prev);
      }}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={showDescription ? UpBlack : DownBlack}
          style={{height: dimens.small, resizeMode: 'contain'}}
        />
      </View>
      {showDescription && <Text style={styles.description}>{description}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimens.small,
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: color.grey_2,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
  },
  description: {
    color: color.btn_title_white,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_18,
    marginTop: dimens.small,
  },
});

export default FaqAccordionItem;
