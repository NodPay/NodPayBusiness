import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
  Modal as RNModal,
} from 'react-native';
// import RNModal from 'react-native-modal';

//where local file imported
import {Button} from '../atoms';
import {SectionTitle} from '../moleculs';
import {Close} from '../../assets';
import {color, dimens, fonts} from '../../utils';
/**
component that render a modal
* @param  {bool} {visible if its true, set modal visible true
 * @param  {func} onClose close modal when pressed
 * @param  {string} imageSrc render image modal, assets from image such a success or failed image.
 * @param  {string} title render title
 * @param  {string} subtitle render subtitle
 * @param  {string} btn1Text render item left button text
 * @param  {func} btn1Onpress trigger a function after pressed
 * @param  {string} btn2Text render item right button text
 * @param  {func} btn2Onpress trigger a function after pressed.
 * @param  {bool} isRowBtn check is btn row
 */
const Modal = ({
  visible,
  onClose,
  imageSrc,
  title,
  subtitle,
  btn1Text,
  btn1Onpress,
  btn2Text,
  btn2Onpress,
  isRowBtn,
}) => {
  return (
    <RNModal visible={visible} transparent>
      <Pressable style={styles.backdrop} onPress={onClose} />

      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
          <Image source={Close} />
        </TouchableOpacity>

        <Image
          source={imageSrc}
          style={{alignSelf: 'center', marginBottom: -30}}
        />

        <SectionTitle type="modal" title={title} subtitle={subtitle} />

        {isRowBtn ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: dimens.default,
            }}>
            {btn1Text && (
              <Button
                onPress={btn1Onpress}
                title={btn1Text}
                titleStyle={{color: color.btn_title_white}}
                btnStyle={{flex: 1, width: '100%', marginRight: 8}}
              />
            )}

            {btn2Text && (
              <Button
                titleStyle={{color: 'white'}}
                onPress={btn2Onpress}
                title={btn2Text}
                btnStyle={{
                  flex: 1,
                  width: '100%',
                  marginLeft: 8,
                  backgroundColor: color.btn_black,
                }}
              />
            )}
          </View>
        ) : (
          <View>
            {btn1Text && (
              <Button
                onPress={btn1Onpress}
                btnStyle={styles.btn1}
                title={btn1Text}
                titleStyle={{color: 'white'}}
              />
            )}

            {btn2Text && (
              <Button
                onPress={btn2Onpress}
                btnStyle={styles.btn2}
                title={btn2Text}
                titleStyle={{color: color.btn_title_white}}
              />
            )}
          </View>
        )}
      </View>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: color.btn_black,
    opacity: 0.64,
  },
  contentContainer: {
    position: 'absolute',
    alignSelf: 'center',
    left: dimens.default,
    right: dimens.default,
    top: dimens.percentage_medium,
    backgroundColor: 'white',
    paddingHorizontal: dimens.default_18,
    paddingTop: dimens.large_40,
    paddingBottom: dimens.medium,
    borderRadius: dimens.default,
  },
  closeIcon: {
    padding: dimens.default_22,
    position: 'absolute',
    right: 0,
  },
  btn1: {
    backgroundColor: color.btn_black,
    marginTop: dimens.default,
    marginHorizontal: dimens.x_large,
  },
  btn2: {
    marginTop: dimens.default_12,
    marginHorizontal: dimens.x_large,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: color.btn_white,
  },
});
