import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import {
  BasicInformationSection,
  ResidentialAddress,
  UploadDocumentSection,
} from '../organism';
/**
 * component that render a stepform for business register
 * @param  {bool} {activeStepBusiness current step active, default -, from reducer
 * @param  {bool} isCompleteBusiness} if its true, stepform line fully / completed.
 */
const StepFormBusiness = ({activeStepBusiness, isCompleteBusiness}) => {
  const progressStepsStyle = {
    activeStepIconBorderColor: color.green,
    disabledStepIconColor: 'white',
    borderWidth: 1,
    activeLabelColor: color.btn_black,
    activeLabelFontSize: dimens.default_14,
    activeStepNumColor: color.btn_black,
    activeStepIconColor: 'white',
    completedStepIconColor: color.green,
    completedCheckColor: 'white',
    labelFontFamily: fonts.sofia_bold,
    labelFontSize: dimens.default_14,
    topOffset: dimens.default_14,
    disabledStepNumColor: 'lightgray',
  };

  const scrollViewProps = {
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
  };

  return (
    <View style={styles.container}>
      <ProgressSteps
        {...progressStepsStyle}
        activeStep={activeStepBusiness}
        isComplete={isCompleteBusiness}>
        <ProgressStep
          label={`Basic Information`}
          removeBtnRow={true}
          scrollViewProps={scrollViewProps}>
          <BasicInformationSection />
        </ProgressStep>
        <ProgressStep
          label={`Upload Document`}
          removeBtnRow={true}
          scrollViewProps={scrollViewProps}>
          <UploadDocumentSection />
        </ProgressStep>
        <ProgressStep
          label={`Location`}
          removeBtnRow={true}
          scrollViewProps={scrollViewProps}>
          <ResidentialAddress />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default StepFormBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: dimens.default_16,
  },
});
