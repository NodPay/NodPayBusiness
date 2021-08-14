import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useNavigation} from '@react-navigation/native';

//where local files imported
import {
  DefaultPict,
  Dropdown,
  Facebook,
  GlobePurple,
  ThreeDots,
} from '../../assets';
import {color, dimens, fonts} from '../../utils';

/**
 * ContactItem component for listing item of contact list
 * @param   {string}  name              The name text of contact
 * @param   {string}  phoneNumber       The phone number text of contact
 * @param   {source}  picture           The photo ptofil of image source
 * @param   {bool}    added             Added condition state
 * @param   {func}    onPress           Triggered when onclick add button
 * @param   {bool}    isContact         For is contact condition state
 * @param   {bool}    isInternational   For is international contact condition state
 * @param   {func}    onEditTag         trigger function when edit tag pressed
 */
const ContactItem = ({
  name = 'Name',
  phoneNumber = 'Phone Number',
  picture = DefaultPict,
  added,
  onPress,
  isContact,
  isInternational,
  onEditTag,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapProfile}>
        <View>
          <Image source={picture} style={styles.pict} />
          {isInternational && (
            <Image
              source={GlobePurple}
              style={{
                height: 12,
                width: 12,
                resizeMode: 'contain',
                position: 'absolute',
                right: 8,
                bottom: 0,
              }}
            />
          )}
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.number}>{phoneNumber}</Text>
        </View>
      </View>
      {isContact ? (
        <View>
          <Menu style={{borderRadius: dimens.default}}>
            {/* three dots */}
            <MenuTrigger>
              <Image source={ThreeDots} style={{height: 24, width: 30}} />
            </MenuTrigger>
            <MenuOptions
              style={{
                padding: 8,
              }}>
              {/* <MenuOption
                onSelect={() => alert(`Save`)}
                text="Edit Tag"
              /> */}
              <MenuOption
                onSelect={onEditTag}
                text={`Edit Tag`}
                customStyles={{
                  optionText: styles.titleInsideDropdown,
                  optionWrapper: {borderBottomWidth: 0.5},
                }}
              />
              <MenuOption
                onSelect={() => alert(`Block`)}
                text={`Block ${name}`}
                customStyles={{
                  optionText: styles.titleInsideDropdown,
                  optionWrapper: {borderBottomWidth: 0.5},
                }}
              />
              <MenuOption
                onSelect={() => alert(`Report`)}
                text={`Report ${name}`}
                customStyles={{
                  optionText: styles.titleInsideDropdown,
                  optionWrapper: {borderBottomWidth: 0.5},
                }}
              />
              <MenuOption
                onSelect={() => alert(`Unfriend`)}
                customStyles={{
                  optionText: [styles.titleInsideDropdown, {color: 'red'}],
                }}
                text="Unfriend"
              />
            </MenuOptions>
          </Menu>
        </View>
      ) : (
        <TouchableOpacity
          disabled={added}
          style={[
            styles.btn,
            {backgroundColor: added ? 'lightgray' : color.btn_black},
          ]}
          activeOpacity={0.8}
          onPress={onPress}>
          <Text style={[styles.number, {color: 'white'}]}>
            {added ? 'Added' : '+Add'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: dimens.default_16,
  },
  wrapProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pict: {
    height: dimens.large_48,
    width: dimens.large_48,
    borderRadius: dimens.large_48 / 2,
    borderWidth: 1,
    borderColor: color.bg_grey,
    marginRight: dimens.default_12,
  },
  name: {
    fontFamily: fonts.sofia_regular,
    fontSize: 19,
    color: color.btn_black,
  },
  number: {
    fontFamily: fonts.sofia_regular,
    fontSize: 14,
    color: color.grey,
  },
  btn: {
    textAlignVertical: 'center',
    height: 40,
    width: 80,
    borderRadius: 8,
    backgroundColor: color.btn_black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'cover',
  },
  imageBackground: {
    resizeMode: 'contain',
    position: 'absolute',
    height: 150,
    width: 200,
    right: 0,
    top: dimens.default_16,
    zIndex: 1,
  },
  titleInsideDropdown: {
    fontFamily: fonts.sofia_medium,
    fontSize: dimens.default,
    lineHeight: dimens.default_18,
    color: color.btn_black,
    marginBottom: dimens.verysmall,
  },
});
