import React from 'react';
import 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {RootNavigator} from 'navigation';
import {hydrateAuth, setI18nConfig} from '~core';
import APIProvider from '~api/apiProvider';
import {Provider} from 'react-redux';
import store from '~store';

const App = () => {
  return (
    <APIProvider>
      <Provider store={store}>
        <RootNavigator />
        <FlashMessage position="top" />
      </Provider>
    </APIProvider>
  );
};

export default App;
