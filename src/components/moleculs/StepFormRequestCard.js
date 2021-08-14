import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import DeliveryAddress from '../../screens/RequestCard/DeliveryAddress';
import Name from '../../screens/RequestCard/Name';
import PinNumber from '../../screens/RequestCard/PinNumber';

// where local files imported
import {color, dimens, fonts} from '../../utils';

const StepFormRequestCard = ({activeStep, isComplete}) => {
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
    <ProgressSteps
      {...progressStepsStyle}
      activeStep={activeStep}
      isComplete={isComplete}>
      {/* Delivery Address */}
      <ProgressStep
        label={`Delivery\nAddress`}
        removeBtnRow={true}
        scrollViewProps={scrollViewProps}>
        <DeliveryAddress />
      </ProgressStep>
      {/* Name */}
      <ProgressStep
        label={`Name`}
        removeBtnRow={true}
        scrollViewProps={scrollViewProps}>
        <Name />
      </ProgressStep>
      {/* PIN */}
      <ProgressStep
        label={`PIN\nNumber`}
        removeBtnRow={true}
        scrollViewProps={scrollViewProps}>
        <PinNumber />
      </ProgressStep>
    </ProgressSteps>
  );
};

export default StepFormRequestCard;
