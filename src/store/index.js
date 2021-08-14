import React, {createContext, useReducer} from 'react';

export const State = createContext();
export const Dispatch = createContext();

const initialState = {
  // create account
  activeStep: 0, //stepper counter
  isComplete: false, //if all step completed, set to true
  error: false, // error on register screen with ErrorMessage component,
  errorMessage: '', // error message with ErrorMessage component
  isVerification: false, // check if verification set to true, then change te UI
  isRunning: false, //resent code countdown start
  isFamilyRelation: false, //family relation ui personal detail
  isDisabled: false, //button next register
  setUpBiometric: false, //setup biometric section
  showModal: false, // createa account modal
  typeModal: null, // check if modal success or failed
  modalPhoneCode: false, // check if modal phone code success or failed
  // create account end
  formRegister: {
    phoneNumber: '',
    verificationCode: '',
    profileImage: '',
    firstName: '',
    lastName: '',
    username: '',
    age: '',
    gender: '', // male or female,
    email: '',
    bio: '',
    familyRelationName: '',
    address: '', // postal code
    cnicImage: '',
    cnicNumber: '',
    cnicName: '',
    cnicDob: '',
    cnicStates: '',
    password: '',
  },
  // form create account for business
  activeStepBusiness: 0,
  isCompleteBusiness: false,
  errorBusiness: false,
  formRegisterBusiness: {
    name: '',
    category: '',
    description: '',
    email: '',
    number: '',
    logo: '',
    secpImage: '',
    ntnImage: '',
    cnicImage: '',
    address: '', //postal code
  },
  // from edit profile business
  formEditProfileBusiness: {
    name: '',
    logo: '',
    description: '',
    category: '',
    zipCode: '',
    country: '',
    state: '',
    city: '',
    detailAddress: '',
  },
  // Tag
  tag: [
    {id: 0, title: 'all'},
    {id: 1, title: 'local'},
    {id: 2, title: 'international'},
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_STEP':
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case 'SET_ACTIVE_STEP_PAYLOAD':
      return {
        ...state,
        activeStep: action.payload,
      };
    case 'SET_ACTIVE_STEP_BUSINESS':
      return {
        ...state,
        activeStepBusiness: state.activeStepBusiness + 1,
      };
    case 'SET_ACTIVE_STEP_PAYLOAD_BUSINESS':
      return {
        ...state,
        activeStepBusiness: action.payload,
      };
    case 'SET_IS_COMPLETED':
      return {
        ...state,
        isComplete: action.payload,
      };
    case 'SET_IS_COMPLETED_BUSINESS':
      return {
        ...state,
        isCompleteBusiness: action.payload,
      };
    case 'SET_VERIFICATION':
      return {
        ...state,
        isVerification: action.payload,
      };
    case 'SET_IS_RUNNING':
      return {
        ...state,
        isRunning: action.payload,
      };
    case 'SET_ERROR_REGISTER':
      return {
        ...state,
        error: action.error,
        errorMessage: action.errorMessage,
      };
    case 'SET_FAMILY_RELATION':
      return {
        ...state,
        isFamilyRelation: action.payload,
      };
    case 'SET_BUTTON':
      return {
        ...state,
        isDisabled: action.payload,
      };
    case 'SET_BIOMETRIC':
      return {
        ...state,
        setUpBiometric: action.payload,
      };
    case 'SET_MODAL':
      return {
        ...state,
        showModal: action.showModal,
        typeModal: action.typeModal,
      };
    case 'SET_MODAL_PHONE_CODE':
      return {
        ...state,
        modalPhoneCode: action.modalPhoneCode,
      };
    case 'RESET_REGISTER':
      return {
        ...state,
        activeStep: 0,
        isComplete: false,
        error: false,
        errorMessage: '',
        phoneNumber: '',
        isVerification: false,
        isRunning: false,
        verificationCode: '',
        isFamilyRelation: false,
        isDisabled: false,
        cnicData: null,
        setUpBiometric: false,
        showModal: false,
        typeModal: null,
      };
    case 'SET_FORM_REGISTER':
      return {
        ...state,
        formRegister: {
          ...state.formRegister,
          [action.inputType]: action.inputValue,
        },
      };
    case 'SET_FORM_REGISTER_BUSINESS':
      return {
        ...state,
        formRegisterBusiness: {
          ...state.formRegisterBusiness,
          [action.inputType]: action.inputValue,
        },
      };
    case 'SET_FORM_EDIT_PROFILE_BUSINESS':
      return {
        ...state,
        formEditProfileBusiness: {
          ...state.formEditProfileBusiness,
          [action.inputType]: action.inputValue,
        },
      };
    case 'SET_ERROR_REGISTER_BUSINESS':
      return {
        ...state,
        errorBusiness: action.payload,
      };
    default:
      return state;
  }
};

export default ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};
