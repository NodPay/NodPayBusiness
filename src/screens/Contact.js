import React, {useState, useRef, useMemo, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ImageBackground,
  Dimensions,
} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import AlphabetList from 'react-native-flatlist-alphabet';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useIsFocused} from '@react-navigation/native';

//where local files imported
import {color, dimens, fonts, wait} from '../utils';
import {
  Button,
  ContactItem,
  EditTagList,
  Gap,
  InputSearch,
  PageTitle,
} from '../components';
import {
  NoContact,
  Facebook,
  FacebookWhite,
  Dropdown,
  CloseRed,
} from '../assets';
import useStateContext from '../store/useStateContext';

// initial data add friend
var initialData = [
  {
    id: 0,
    name: 'Andi',
    phoneNumber: '+62 696969699696',
    added: false,
    tag: 'local',
  },
  {
    id: 1,
    name: 'Bae',
    phoneNumber: '+62 696969699696',
    added: false,
    tag: 'local',
  },
  {
    id: 3,
    name: 'Garry',
    phoneNumber: '+62 696969699696',
    added: false,
    tag: 'local',
  },
  {
    id: 4,
    name: 'Widy',
    phoneNumber: '+62 696969699696',
    added: false,
    tag: 'local',
  },
  {
    id: 5,
    name: 'Talha',
    phoneNumber: '+62 696969699696',
    added: true,
    tag: 'international',
  },
  {
    id: 6,
    name: 'Gagan',
    phoneNumber: '+62 696969699696',
    added: true,
    tag: 'international',
  },
  {
    id: 7,
    name: 'Muhammad',
    phoneNumber: '+62 696969699696',
    added: true,
    tag: 'international',
  },
];

// initial data contact
const initialDataAlphabet = [
  // the index used is key, not id, data should include random key like used below
  {
    id: 1,
    key: 'a213sad',
    value: 'Ahmad',
    name: 'Ahmad',
    phoneNumber: '+62 123 123',
    tag: 'local',
  },
  {
    id: 2,
    key: 'Baesdsad123',
    value: 'Bae',
    name: 'Bae',
    phoneNumber: '+62 234 234',
    tag: 'local',
  },
  {
    id: 3,
    key: 'Garryasd123',
    value: 'Garry',
    name: 'Garry',
    phoneNumber: '+62 567 567',
    tag: 'local',
  },
  {
    id: 4,
    key: 'Muhammxzsad13ad',
    value: 'Muhammad',
    name: 'Muhammad',
    phoneNumber: '+62 890 890',
    tag: 'international',
  },
];

const Contact = ({navigation}) => {
  const {state, dispatch} = useStateContext();

  let isFocused = useIsFocused();

  useEffect(() => {
    console.log('dataAlphabet', dataAlphabet);
    return () => {
      isFocused.valueOf(false);
    };
  }, [dataAlphabet]);

  const [friendData, setFriendData] = useState([]);
  const [getContact, setGetContact] = useState(true);
  const [isContact, setIsContact] = useState(false);
  const [isFacebook, setIsFacebook] = useState(false);
  // addFriendSearch
  const [friendSearch, setFriendSearch] = useState('');

  // ref
  const bottomSheetRef = useRef();

  // variables
  const snapPoints = useMemo(() => ['0%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const [data, setData] = useState(initialData);

  const onSearch = () => {
    let filtered = initialData.filter(
      item => item.name.toLowerCase() == friendSearch.toLowerCase(),
    );
    setData(filtered);
  };

  const onSearchAddFriend = () => {
    let filtered = initialData.filter(item =>
      item.name.toLowerCase().includes(friendSearch.toLowerCase()),
    );
    console.log(filtered);
  };

  const onAdd = item => {
    item.added = true;
    let a = data.filter(res => res.id != item.id);
    let b = a.concat(item).sort((a, b) => a.id - b.id);
    setData(b);
    setFriendData(data);
  };

  const EmptyState = () => {
    return (
      <View style={styles.empty_state_container}>
        <Image source={NoContact} style={styles.icons} />
        <Text style={styles.desc}>
          You currently have no friend. Find who you know by connecting your
          NodPay to your phone contact or Facebook
        </Text>
      </View>
    );
  };

  // render contact state
  const [id, setId] = useState('');
  const [show, setShow] = useState(false);

  // selected button tag
  const [current, setCurrent] = useState(0);

  // CONTACT
  const [dataAlphabet, setDataAlphabet] = useState(initialDataAlphabet);
  const [contactSearch, setContactSearch] = useState('');

  const FilterButton = ({title, onPress, selected}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{
          marginLeft: 8,
          backgroundColor: selected ? color.bg_color : '#F0F0FC',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          height: 32,
        }}>
        <Text
          style={{
            fontFamily: fonts.sofia_regular,
            color: selected ? 'white' : color.bg_color,
            fontSize: dimens.default_16,
            lineHeight: dimens.default_16,
            paddingHorizontal: 16,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const onContactSearch = () => {
    if (contactSearch == '') {
      setDataAlphabet(initialDataAlphabet);
    } else {
      let filtered = initialDataAlphabet.filter(
        i =>
          i.name.toLowerCase().includes(contactSearch) ||
          i.phoneNumber.includes(contactSearch),
      );
      setDataAlphabet(filtered);
    }
  };

  // tag section
  const btmEditTagRef = useRef(null);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={{flex: 1}}
        onPress={() => {
          setId('');
          setShow(false);
        }}>
        <PageTitle
          isContact
          isBlackArrow
          title="Contacts"
          titleStyle={{color: color.btn_black}}
          editTag={() => navigation.navigate('EditTag')}
        />

        {friendData == null && (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <EmptyState />
          </View>
        )}

        {/* Render Contact */}
        <View>
          <KeyboardAvoidingView
            behavior="height"
            style={{paddingHorizontal: dimens.default_16}}>
            <InputSearch
              value={contactSearch}
              onChangeText={val => setContactSearch(val)}
              onSubmitEditing={onContactSearch}
              placeholder="Friend name, Phone Number, Business"
              backgroundColor="white"
            />
          </KeyboardAvoidingView>

          <Gap t={dimens.default_16} />

          <View style={{flexDirection: 'row', paddingLeft: dimens.default_16}}>
            {state.tag.map((item, index) => {
              //get tag from reducer
              return (
                <FilterButton
                  selected={item.id == current}
                  key={index}
                  title={item.title}
                  onPress={() => {
                    console.log(item);
                    console.log(dataAlphabet);
                    setCurrent(item.id);
                    if (item.title == 'all') {
                      setDataAlphabet(initialDataAlphabet);
                      // Do Nothing
                    } else {
                      let filtered = initialDataAlphabet.filter(
                        i => i.tag.toLowerCase() == item.title.toLowerCase(),
                      );
                      console.log(filtered);
                      setDataAlphabet(filtered);
                    }
                  }}
                />
              );
            })}
          </View>
        </View>
        {/* Render Contact End */}

        <Gap t={dimens.default_16} />

        {/* List Contact */}
        <AlphabetList
          style={{flex: 1}}
          data={dataAlphabet}
          renderSectionHeader={section => (
            <View
              style={{
                paddingLeft: dimens.default_16,
                paddingVertical: 8,
              }}>
              <Text
                style={{
                  color: color.btn_black,
                  fontFamily: fonts.sofia_bold,
                  marginLeft: 8,
                }}>
                {section.title}
              </Text>
            </View>
          )}
          renderItem={(item, index) => (
            <View>
              <ContactItem
                key={item.value}
                {...item}
                isContact
                isInternational={item.tag == 'international' ? true : false}
                onPress={() => {
                  setId(item.id);
                  setShow(!show);
                }}
                onEditTag={() => {
                  btmEditTagRef.current.open();
                  setSelectedUser(item);
                }}
              />
            </View>
          )}
        />
        {/* List Contact End*/}

        {/* Addfriend Button */}
        <View style={styles.wrapBtn}>
          <Button
            onPress={() => bottomSheetRef.current?.expand()}
            title="+ Add Friend"
            btnStyle={{backgroundColor: color.btn_black}}
            titleStyle={{color: color.btn_white_2}}
          />
        </View>
        {/* Addfriend Button End */}

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View
            style={{
              flex: isContact || isFacebook ? 0 : 1,
              backgroundColor: 'white',
              paddingVertical: Platform.OS === 'ios' ? dimens.medium : 0,
            }}>
            <PageTitle
              isCloseMode
              title="Add Friends"
              titleStyle={{color: color.btn_black}}
              onPressClose={() => {
                bottomSheetRef.current?.close();
                setGetContact(true);
                setIsFacebook(false);
                setIsContact(false);
              }}
            />
            {getContact && (
              <View style={styles.add_friend_section}>
                <Text style={styles.add_friend_section_desc}>
                  By allowing access to your contact or Facebook you can connect
                  with your friend that use NodPay
                </Text>
              </View>
            )}
            {getContact && (
              <View
                style={{
                  paddingHorizontal: dimens.default_16,
                  marginBottom: dimens.default_16,
                }}>
                <Button
                  iconLeft={FacebookWhite}
                  title="Sign in with Facebook"
                  onPress={() => {
                    setGetContact(false);
                    setIsFacebook(true);
                  }}
                  btnStyle={styles.btnSigninWithFacebook}
                  titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
                />
                <Button
                  onPress={() => {
                    setGetContact(false);
                    setIsContact(true);
                  }}
                  title="Allow Contact Access"
                  btnStyle={styles.btnAllowContactAccess}
                  titleStyle={{color: color.btn_white_2}}
                />
              </View>
            )}
          </View>
          {isContact ? (
            <View>
              <Text style={styles.add_friend_section_desc}>
                Connect with Facebook to see your frend that use NodPay
              </Text>
              <View
                style={{
                  paddingHorizontal: dimens.default_16,
                  paddingVertical: dimens.default_16,
                }}>
                <Button
                  iconLeft={FacebookWhite}
                  title="Sign in with Facebook"
                  onPress={() => {
                    setIsFacebook(true);
                    setIsContact(false);
                  }}
                  btnStyle={{
                    backgroundColor: '#548EFF',
                    borderColor: color.btn_white,
                    borderWidth: 1,
                    marginBottom: dimens.supersmall,
                  }}
                  titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
                />
                <InputSearch
                  placeholder="Filter by Name"
                  value={friendSearch}
                  onChangeText={val => setFriendSearch(val)}
                  onSubmitEditing={onSearchAddFriend}
                />
              </View>
            </View>
          ) : null}

          {isContact && (
            <BottomSheetFlatList
              keyExtractor={item => item.id}
              data={data}
              renderItem={({item}) => (
                <ContactItem {...item} onPress={() => onAdd(item)} />
              )}
            />
          )}

          {isFacebook && (
            <View
              style={{
                paddingLeft: dimens.default_16,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={Facebook} height={40} width={40} />
                <Text
                  style={{
                    fontFamily: fonts.sofia_regular,
                    textAlign: 'left',
                    color: color.grey,
                    fontSize: dimens.default_18,
                    padding: dimens.default_16,
                  }}>
                  You currently have{' '}
                  <Text
                    style={{color: '#6366E4', fontFamily: fonts.sofia_bold}}>
                    19 friends
                  </Text>{' '}
                  {`using \nNodPay on Facebook`}{' '}
                </Text>
              </View>
              <InputSearch
                placeholder="Filter by Name"
                value={friendSearch}
                onChangeText={val => {
                  setFriendSearch(val);
                }}
                onSubmitEditing={onSearch}
              />
              <Gap t={dimens.default_16} />
            </View>
          )}

          {isFacebook && (
            <BottomSheetFlatList
              keyExtractor={item => item.id}
              data={data}
              renderItem={({item}) => (
                <ContactItem {...item} onPress={() => onAdd(item)} />
              )}
            />
          )}
        </BottomSheet>
      </Pressable>

      {/* BottomSheet for Edit Tag */}
      <RBSheet
        ref={btmEditTagRef}
        height={Dimensions.get('window').height}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: dimens.default_16,
            borderTopRightRadius: dimens.default_16,
          },
        }}>
        <Gap t={dimens.supersmall} />
        <View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            padding: dimens.default,
          }}>
          <TouchableOpacity onPress={() => btmEditTagRef.current.close()}>
            <Image source={CloseRed} style={{height: 40, width: 40}} />
          </TouchableOpacity>
          <Text style={styles.btmSheetTitle}>Edit Tag</Text>
        </View>
        <Gap t={dimens.default} />
        <Text style={styles.editTag}>
          Edit{' '}
          <Text
            style={{
              fontFamily: fonts.sofia_bold,
              color: 'black',
              fontSize: dimens.default,
            }}>
            {`${selectedUser?.name}'s`}
          </Text>{' '}
          Tag
        </Text>
        <Gap t={dimens.default} />
        {state.tag
          ?.filter(i => i.title != 'all')
          .map(item => {
            return (
              <EditTagList
                key={item.id}
                onSelectTag={() => {
                  let data = selectedUser;
                  data['tag'] = 'international';
                  let datas = dataAlphabet
                    .filter(i => i.id != data['id'])
                    .concat(data);
                  setDataAlphabet(datas);
                  btmEditTagRef.current.close();
                }}
                title={item.title}
                selected={selectedUser?.tag == item.title}
              />
            );
          })}
      </RBSheet>
      {/* BottomSheet for Edit Tag End */}
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  bg_contact: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -2,
    width: '100%',
    resizeMode: 'stretch',
  },
  icons: {
    height: 101,
    width: 101,
    resizeMode: 'cover',
  },
  empty_state_container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dimens.large_48,
  },
  desc: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: '#818386',
    textAlign: 'center',
    marginTop: dimens.default_16,
  },
  wrapBtn: {
    padding: dimens.default_22,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    textAlign: 'center',
    padding: dimens.default_16,
  },
  close_icon: {
    height: dimens.large_40,
    width: dimens.large_40,
  },
  add_friend_section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  add_friend_section_desc: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    paddingHorizontal: dimens.default_16,
    color: color.grey,
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  btnAllowContactAccess: {
    backgroundColor: color.btn_black,
    marginBottom: -8,
    height: 44,
  },
  btnSigninWithFacebook: {
    backgroundColor: '#548EFF',
    borderColor: color.btn_white,
    borderWidth: 1,
    marginBottom: dimens.supersmall,
  },
  insideDropdown: {
    position: 'absolute',
    left: 24,
    top: 24,
    paddingLeft: 8,
    paddingTop: 8,
  },
  titleInsideDropdown: {
    fontFamily: fonts.sofia_regular,
    fontSize: 18,
    color: color.btn_black,
    letterSpacing: 1.5,
  },
  btmSheetTitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    textAlign: 'center',
    flex: 0.9,
  },
  editTag: {
    fontFamily: fonts.sofia_regular,
    fontSize: 16,
    color: color.grey_5,
    marginLeft: dimens.default,
  },
});
