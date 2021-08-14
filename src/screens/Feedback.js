import React, {useState, useRef, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {Transition, Transitioning} from 'react-native-reanimated';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {
  Button,
  FaqAccordionItem,
  PageTitle,
  InputText,
  Modal,
} from '../components';
import {CloseRed, ModalSuccess, ModalFailed} from '../assets';

const accordionData = [
  {
    title: 'How’s NodPay work?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. Proin ac tellus ultrices, lobortis sapien viverra, tristique eros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. \n\neros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at.',
  },
  {
    title: 'Can I cash my balance?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. Proin ac tellus ultrices, lobortis sapien viverra, tristique eros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. \n\neros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at.',
  },
  {
    title: 'How do I add balance?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. Proin ac tellus ultrices, lobortis sapien viverra, tristique eros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. \n\neros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at.',
  },
  {
    title: 'Why do you need my locations?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. Proin ac tellus ultrices, lobortis sapien viverra, tristique eros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. \n\neros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at.',
  },
  {
    title: 'Do I need to pay for transactions?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. Proin ac tellus ultrices, lobortis sapien viverra, tristique eros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. \n\neros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at.',
  },
];

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const Feedback = ({navigation}) => {
  // States
  const [feedback, setFeedback] = useState('');
  const [modalSuccess, setModalSuccess] = useState(false);
  // Refs
  const accordionRef = useRef();
  const bottomSheetRef = useRef();

  const snapPoints = useMemo(() => ['0%', '100%'], []);

  const handleSubmitFeedback = () => {
    if (feedback) {
      bottomSheetRef.current?.close();
      setModalSuccess(true);
      setFeedback('');
    } else {
      Alert.alert('Feedback field is empty', 'Please write your feedback', [
        {text: 'Ok'},
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      {/* Modals */}
      {/* <Modal
        imageSrc={ModalFailed}
        title="Something’s Wrong"
        subtitle="Failed to submit your feedback, please check your internet connection and try again."
        btn1Text="Try Again"
        btn2Text="Close"
        // btn1Onpress={() =>{}}
        visible={modalSuccess}
        onClose={() => {
          setModalSuccess(false);
        }}
      /> */}
      <Modal
        imageSrc={ModalSuccess}
        title="Feedback sent!"
        subtitle="Thank you for taking your time sharing how you feel, we appreciate it!"
        visible={modalSuccess}
        onClose={() => {
          setModalSuccess(false);
        }}
      />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <PageTitle
          isBlackArrow
          title="Help"
          titleStyle={{color: color.btn_black}}
        />

        {/* Feedback Information */}
        <View
          style={{
            paddingHorizontal: dimens.default,
            paddingBottom: dimens.default,
          }}>
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackText}>Feedback</Text>
            <Text style={styles.feedbackDescription}>
              We love to hear your feedback about our app or NodPay in general
            </Text>
            <Button
              title="Submit Feedback"
              titleStyle={{color: 'white'}}
              btnStyle={styles.submitFeedbackButton}
              onPress={() => {
                bottomSheetRef.current?.expand();
              }}
            />
          </View>

          <Text style={styles.faqText}>Frequently Asked Queastion</Text>
          <Transitioning.View ref={accordionRef} transition={transition}>
            {accordionData.map(({title, description}, index) => {
              return (
                <FaqAccordionItem
                  key={index}
                  title={title}
                  description={description}
                  onPress={() => {
                    accordionRef.current.animateNextTransition();
                  }}
                />
              );
            })}
          </Transitioning.View>
        </View>
      </ScrollView>

      {/* Feedback Form */}
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{flex: 1, backgroundColor: color.bg_bottomsheet}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                bottomSheetRef.current?.close();
              }}
              style={{position: 'absolute', left: dimens.default_16}}>
              <Image source={CloseRed} style={styles.close_icon} />
            </TouchableOpacity>
            <Text style={styles.bottomSheetTitle}>Submit Feedback</Text>
          </View>
          <View style={{flex: 1, marginHorizontal: dimens.default_16}}>
            <Text style={styles.bottomSubtitle}>
              What would you like to tell us.
            </Text>
            <InputText
              containerStyle={{flex: 1, paddingTop: 0}}
              value={feedback}
              onChangeText={setFeedback}
              label=""
              placeholder="Your feedback"
              placeholderTextColor="#BBB"
              editable
              inputStyle={styles.bottomSheetInput}
              additionalInputProps={{textAlignVertical: 'top'}}
            />
          </View>

          <KeyboardAvoidingView behavior={Platform.OS == 'ios' && 'position'}>
            <Button
              title="Submit Feedback"
              titleStyle={{color: 'white'}}
              btnStyle={{
                backgroundColor: color.btn_black,
                margin: dimens.default,
              }}
              onPress={handleSubmitFeedback}
            />
          </KeyboardAvoidingView>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  feedbackBox: {
    padding: dimens.default,
    borderRadius: dimens.default,
    backgroundColor: color.purple,
    alignItems: 'center',
  },
  feedbackText: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_20,
    color: color.btn_black,
  },
  feedbackDescription: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    color: color.btn_title_white,
    lineHeight: dimens.default_18,
    marginTop: dimens.small,
    textAlign: 'center',
    marginHorizontal: dimens.small,
  },
  faqText: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_20,
    color: color.btn_black,
    marginTop: dimens.medium,
  },
  submitFeedbackButton: {
    backgroundColor: color.btn_black,
    paddingHorizontal: dimens.large,
    marginTop: dimens.default_12,
  },
  close_icon: {
    height: dimens.large_40,
    width: dimens.large_40,
  },
  bottomSheetTitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    textAlign: 'center',
    padding: dimens.default_16,
  },
  bottomSubtitle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
    color: color.btn_title_white,
  },
  bottomSheetInput: {
    borderRadius: dimens.default,
    flex: 1,
    marginTop: 0,
    lineHeight: dimens.default_18,
  },
});

export default Feedback;
