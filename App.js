import 'react-native-gesture-handler';
import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';

// where local file imported
import Router from './src/router';
import Store from './src/store';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Store>
      <MenuProvider>
        <Router />
      </MenuProvider>
    </Store>
  );
};

export default App;
