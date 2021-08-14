import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {Close, CloseRed} from '../assets';
import RBSheet from 'react-native-raw-bottom-sheet';

// Local
import {
  Button,
  Gap,
  PageTitle,
  SettingsSaveButton,
  TextInput,
} from '../components';
import {color, dimens, fonts, wait} from '../utils';

const EditTag = () => {
  const initialTagData = [
    {
      id: 0,
      title: 'Local',
    },
    {
      id: 1,
      title: 'International',
    },
  ];

  const [tagData, setTagData] = useState(initialTagData);
  const [text, setText] = useState('');
  const btmSheefRef = useRef(null);

  const onSave = () => {
    btmSheefRef.current.close();
    wait(250).then(() => {
      let data = {
        id: initialTagData.length + 1,
        title: text,
      };
      setTagData(tagData.concat(data));
      setText('');
    });
  };

  const onRemove = item => {
    Alert.alert('Delete Tag', `are you sure want to delete ${item.tag} tag?`, [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'Yes',
        onPress: () => {
          // remove tag from data
          let removedData = tagData.filter(i => i.id != item.id);
          setTagData(removedData);
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Edit Contact Tag"
        titleStyle={{color: color.btn_black}}
      />
      <Text style={styles.description}>
        You can assign a tag to your contact list so you can easily search and
        filter them.
      </Text>
      <Text style={styles.title}>Your Tag</Text>
      <ScrollView
        contentContainerStyle={{
          //   paddingHorizontal: dimens.default,
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: 72 + 16,
          paddingHorizontal: dimens.default,
        }}>
        {tagData.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.btn}
              key={index}
              onPress={() => onRemove(item)}>
              <Text style={styles.btnTitle}>{item.title}</Text>
              <Image
                source={Close}
                style={{height: 10, width: 10, marginLeft: 8}}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={styles.wrapBottomBtn}>
        <Button
          title="+ Create Tag"
          btnStyle={{backgroundColor: color.btn_black, width: '100%'}}
          titleStyle={{color: 'white'}}
          onPress={() => btmSheefRef.current.open()}
        />
      </View>
      {/* bottomsheet */}
      <RBSheet
        ref={btmSheefRef}
        height={215}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: dimens.default_16,
            borderTopRightRadius: dimens.default_16,
            padding: dimens.default,
          },
        }}>
        <Gap t={dimens.supersmall} />
        <View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => btmSheefRef.current.close()}>
            <Image source={CloseRed} style={{height: 40, width: 40}} />
          </TouchableOpacity>
          <Text style={styles.btmSheetTitle}>Create Tag</Text>
        </View>
        <Gap t={dimens.default} />
        {/* Input */}
        <TextInput
          style={{backgroundColor: color.grey_7}}
          placeholder="input tag"
          value={text}
          onChangeText={val => setText(val)}
        />
        {/* Input End */}
        {/* Button Save */}
        <Gap t={8} />
        <SettingsSaveButton
          onCancel={() => btmSheefRef.current.close()}
          onSave={onSave}
        />
        {/* Button SaveEnd */}
      </RBSheet>
      {/* bottomsheet end */}
    </SafeAreaView>
  );
};

export default EditTag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  description: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
    color: color.grey_5,
    padding: dimens.default,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_22,
    color: color.btn_black,
    padding: dimens.default,
    paddingTop: -24,
  },
  btn: {
    height: 37,
    borderRadius: dimens.default,
    backgroundColor: color.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: dimens.default,
    margin: 4,
  },
  btnTitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    color: color.blue,
  },
  wrapBottomBtn: {
    height: 72,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dimens.default,
  },
  btmSheetTitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    textAlign: 'center',
    flex: 0.9,
  },
});
