import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// where screens should be imported
import {
  GetStarted,
  Login,
  LoginEmail,
  LoginPhone,
  ForgotPassword,
  NewPassword,
  Splash,
  OnBoarding,
  Loader,
  Register,
  ScanResult,
  Biometrics,
  Contact,
  Home,
  Notification,
  InviteFriend,
  InviteFriendPeople,
  Search,
  Settings,
  Comment,
  MyCard,
  MyCardChangePin,
  Feedback,
  Language,
  ChangePhoneNumber,
  EditProfile,
  PasswordSecurity,
  PrivacySocial,
  NotificationSetting,
  BankAccount,
  QRCode,
  TransferToBank,
  CashACheck,
  Profile,
  OtherUserProfile,
  Transaction,
  TransactionForm,
  TransactionPIN,
  TransactionSuccess,
  TransactionTransferToNod,
  RegisterBusiness,
  BusinessProfile,
  EditProfileBusiness,
  BusinessDocument,
  HomeBusiness,
  BookKeeping,
  Employee,
  LoginBusiness,
  LoginEmailBusiness,
  LoginPhoneBusiness,
  InviteOtherBusiness,
  InviteSignupBusiness,
  NotificationBusiness,
  SearchEmployee,
  AddEmployee,
  EmployeeDetail,
  BusinessTransaction,
  BusinessTransactionForm,
  BusinessTransactionPIN,
  BusinessTransactionSuccess,
  BusinessTransactionTransferToNod,
  Accesbility,
  PaySalary,
  VirtualCardDetails,
  BlockCardPin,
  BlockCardTouchId,
  RequestCard,
  RequestCardSuccess,
  EditTag,
} from '../screens';
import {Drawer as DrawerComponent, BusinessDrawer} from '../components';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Loader" component={Loader} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginEmail" component={LoginEmail} />
        <Stack.Screen name="LoginPhone" component={LoginPhone} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ScanResult" component={ScanResult} />
        <Stack.Screen name="Biometrics" component={Biometrics} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="InviteFriend" component={InviteFriend} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Comment" component={Comment} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumber} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="PasswordSecurity" component={PasswordSecurity} />
        <Stack.Screen name="PrivacySocial" component={PrivacySocial} />
        <Stack.Screen name="BlockCardTouchId" component={BlockCardTouchId} />
        <Stack.Screen
          name="NotificationSetting"
          component={NotificationSetting}
        />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen
          name="InviteFriendPeople"
          component={InviteFriendPeople}
        />
        <Stack.Screen name="BankAccount" component={BankAccount} />
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
        <Stack.Screen name="AppBusinessDrawer" component={AppBusinessDrawer} />
        <Stack.Screen name="QRCode" component={QRCode} />
        <Stack.Screen name="TransferToBank" component={TransferToBank} />
        <Stack.Screen name="CashACheck" component={CashACheck} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="OtherUserProfile" component={OtherUserProfile} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="TransactionForm" component={TransactionForm} />
        <Stack.Screen name="TransactionPIN" component={TransactionPIN} />
        <Stack.Screen
          name="TransactionSuccess"
          component={TransactionSuccess}
        />
        <Stack.Screen
          name="TransactionTransferToNod"
          component={TransactionTransferToNod}
        />
        <Stack.Screen name="RegisterBusiness" component={RegisterBusiness} />
        <Stack.Screen name="BusinessProfile" component={BusinessProfile} />
        <Stack.Screen
          name="EditProfileBusiness"
          component={EditProfileBusiness}
        />
        <Stack.Screen name="BusinessDocument" component={BusinessDocument} />
        <Stack.Screen name="Employee" component={Employee} />
        <Stack.Screen name="LoginBusiness" component={LoginBusiness} />
        <Stack.Screen
          name="LoginPhoneBusiness"
          component={LoginPhoneBusiness}
        />
        <Stack.Screen
          name="LoginEmailBusiness"
          component={LoginEmailBusiness}
        />
        <Stack.Screen
          name="InviteOtherBusiness"
          component={InviteOtherBusiness}
        />
        <Stack.Screen
          name="InviteSignupBusiness"
          component={InviteSignupBusiness}
        />
        <Stack.Screen
          name="NotificationBusiness"
          component={NotificationBusiness}
        />
        <Stack.Screen name="SearchEmployee" component={SearchEmployee} />
        <Stack.Screen name="AddEmployee" component={AddEmployee} />
        <Stack.Screen name="EmployeeDetail" component={EmployeeDetail} />
        <Stack.Screen
          name="BusinessTransaction"
          component={BusinessTransaction}
        />
        <Stack.Screen
          name="BusinessTransactionForm"
          component={BusinessTransactionForm}
        />
        <Stack.Screen
          name="BusinessTransactionPIN"
          component={BusinessTransactionPIN}
        />
        <Stack.Screen
          name="BusinessTransactionSuccess"
          component={BusinessTransactionSuccess}
        />
        <Stack.Screen
          name="BusinessTransactionTransferToNod"
          component={BusinessTransactionTransferToNod}
        />
        <Stack.Screen name="Accesbility" component={Accesbility} />
        <Stack.Screen name="PaySalary" component={PaySalary} />
        <Stack.Screen name="MyCardChangePin" component={MyCardChangePin} />
        <Stack.Screen name="RequestCard" component={RequestCard} />
        <Stack.Screen
          name="RequestCardSuccess"
          component={RequestCardSuccess}
        />
        <Stack.Screen
          name="VirtualCardDetails"
          component={VirtualCardDetails}
        />
        <Stack.Screen name="BlockCardPin" component={BlockCardPin} />
        <Stack.Screen name="EditTag" component={EditTag} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerType="front"
      drawerPosition="right"
      drawerStyle={{backgroundColor: 'transparent'}}
      screenOptions={{unmountOnBlur: true}}
      drawerContent={props => <DrawerComponent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="MyCard" component={MyCard} />
    </Drawer.Navigator>
  );
};

const AppBusinessDrawer = () => {
  return (
    <Drawer.Navigator
      drawerType="front"
      drawerPosition="right"
      drawerStyle={{backgroundColor: 'transparent'}}
      screenOptions={{unmountOnBlur: true}}
      drawerContent={props => <BusinessDrawer {...props} />}>
      <Drawer.Screen name="HomeBusiness" component={HomeBusiness} />
      <Drawer.Screen name="BookKeeping" component={BookKeeping} />
    </Drawer.Navigator>
  );
};

export default Router;
