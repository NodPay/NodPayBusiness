import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

// where local files imported
import {color, fonts, dimens} from '../utils';
import {Button, MainActionList, PageTitle, Modal} from '../components';
import {ModalFailed, ModalSuccess, OutlineCamera} from '../assets';

const CashACheck = ({navigation}) => {
  // check is input
  const [isInput, setIsInput] = useState(false);
  const [value, setValue] = useState(0);

  // selected / choosed
  const [selected, setSelected] = useState(null);

  // image
  const [image, setImage] = useState('');

  // modal
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState({
    image: '',
    title: '',
    subtitle: '',
    btn1Text: '',
    onClose: () => {},
    onPress: () => {},
  });

  const onTakePicture = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(res => {
      console.log('result', res);
      setImage(res.path);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <PageTitle
        containerStyle={{marginTop: 16}}
        isCloseMode
        onPressClose={() => navigation.goBack()}
        title="Cash A Check"
        titleStyle={{color: color.btn_black}}
        isCancel
        cancel={{
          height: 32,
          width: 32,
          marginLeft: 5,
        }}
      />
      {/* Header End*/}

      {/* Total Amount */}
      <View style={styles.totalAmount}>
        <Text style={styles.enterTotalAmount}>Enter Total Amount</Text>
        {/* check is input */}
        {isInput ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.amount}>Rs</Text>
            <TextInput
              onFocus={() => {
                if (value == '0') {
                  setValue('');
                }
              }}
              autoFocus={true}
              keyboardType="number-pad"
              value={value}
              onChangeText={val => setValue(val)}
              style={[styles.amount, {color: '#03060C', fontSize: 47}]}
              onSubmitEditing={() => {
                setIsInput(false);
              }}
            />
          </View>
        ) : (
          <Text style={styles.amount} onPress={() => setIsInput(!isInput)}>
            Rs <Text style={{color: '#03060C', fontSize: 47}}>{value}</Text>
          </Text>
        )}
      </View>
      {/* Total Amount End */}

      {/* Bottom Button Section */}
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'android' ? false : true}
        style={styles.bottomButtonSection}>
        <MainActionList
          icon={OutlineCamera}
          uploadCheck={image != '' ? true : false}
          image={{uri: image}}
          iconStyle={{height: 24, width: 24}}
          imageStyle={{resizeMode: 'cover'}}
          title="Upload check picture"
          description="Tap to take a picture"
          onPress={onTakePicture}
        />
        <View style={styles.line} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: dimens.default,
          }}>
          <TouchableOpacity
            onPress={() => setSelected(1)}
            style={[
              styles.btn,
              {
                marginRight: 8,
                backgroundColor: selected == 1 ? color.purple : 'white',
                borderColor: selected == 1 ? color.emoji_active : 'lightgray',
              },
            ]}>
            <Text style={styles.title}>Instant</Text>
            <Text style={styles.subtitle}>Rs 100 Fee</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(2)}
            style={[
              styles.btn,
              {
                marginLeft: 8,
                marginRight: 8,
                backgroundColor: selected == 2 ? color.purple : 'white',
                borderColor: selected == 2 ? color.emoji_active : 'lightgray',
              },
            ]}>
            <Text style={styles.title}>2 - 3 Days</Text>
            <Text style={styles.subtitle}>Free</Text>
          </TouchableOpacity>
        </View>
        <Button
          disabled={selected == null ? true : false}
          onPress={() => {
            if (value == 0) {
              setVisible(true);
              setModal({
                image: ModalFailed,
                title: 'Cash a check Has Failed!',
                subtitle: 'Cant check cash with Rs 0 ',
                btn1Text: 'Ok',
                onClose: () => {
                  setVisible(false);
                },
                onPress: () => {
                  setVisible(false);
                },
              });
            } else {
              setVisible(true);
              setModal({
                image: ModalSuccess,
                title: 'Cash a check Successfuly',
                subtitle: 'We sent you a confirmation to disclaimer your email',
                btn1Text: 'Ok',
                onClose: () => {
                  setVisible(false);
                  navigation.replace('AppDrawer');
                  setValue(0);
                },
                onPress: () => {
                  // TODO: POST INTO API
                  setVisible(false);
                  navigation.replace('AppDrawer');
                  setValue(0);
                },
              });
            }
          }}
          title="Confirm"
          titleStyle={{color: color.btn_white}}
          btnStyle={{
            marginBottom: dimens.default,
            backgroundColor: selected == null ? 'lightgray' : color.btn_black,
          }}
        />
      </KeyboardAvoidingView>

      {/* Bottom Button Section End */}

      {/* Modal */}
      <Modal
        visible={visible}
        imageSrc={modal.image}
        title={modal.title}
        subtitle={modal.subtitle}
        btn1Text={modal.btn1Text}
        btn1Onpress={modal.onPress}
        onClose={modal.onClose}
      />
      {/* Modal End */}
    </SafeAreaView>
  );
};

export default CashACheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  totalAmount: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterTotalAmount: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey,
  },
  amount: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    color: 'rgba(3,6,12,0.64)',
  },
  bottomButtonSection: {
    backgroundColor: 'white',
    paddingHorizontal: dimens.default,
  },
  line: {
    height: 1,
    borderRadius: 1,
    backgroundColor: 'lightgray',
    marginVertical: dimens.default,
  },
  btn: {
    padding: dimens.default,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 0.8,
    borderRadius: 8,
    flex: 1,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    color: color.btn_black,
  },
  subtitle: {
    fontFamily: fonts.sofia_medium,
    fontSize: dimens.default_14,
    color: 'lightgray',
  },
});
