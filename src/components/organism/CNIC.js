import React from 'react';
import {StyleSheet, ScrollView, Text, View, Image} from 'react-native';

//where local files imported
import {Document} from '../../assets';
import {color, dimens, fonts} from '../../utils';
import {Gap} from '../atoms';
/**
 * @param  {string} cnicData data passed from results screen after input a photo and form.
 */
const CNIC = ({cnicData}) => {
  const RenderText = ({label, value}) => {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
        <Gap t={dimens.default_16} />
      </View>
    );
  };

  if (cnicData != undefined) {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Image source={{uri: cnicData.image}} style={styles.img} />
          <Gap t={dimens.default_16} />
          <RenderText label="CNIC Number" value={cnicData.cnicNumber} />
          <RenderText label="Name" value={cnicData.name} />
          <RenderText label="Date of Birth" value={cnicData.dateOfBirth} />
          <RenderText label="States" value={cnicData.states} />
        </ScrollView>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Image source={Document} style={styles.img} />
      <Gap t={dimens.default_16} />
      <Text style={styles.title}>Scan Document</Text>
      <Text style={styles.subtitle}>
        {`\u2022`} Make sure your entire ID within the frame
      </Text>
      <Text style={styles.subtitle}>
        {`\u2022`} Don't use snac or photocopy
      </Text>
      <Gap t={dimens.default_16} />
    </ScrollView>
  );
};

export default CNIC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: dimens.default_16,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
  },
  subtitle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey,
  },
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: 19,
    color: color.grey,
  },
  value: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_black,
  },
});
