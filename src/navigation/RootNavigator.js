import React, {useEffect , useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from './NavigationContainer';
import {TabNavigator} from './TabNavigator';
import {AuthNavigator} from './AuthNavigator';
import {ThemeProvider} from '~ui';
import { getItem } from '~utils/mmkv';

const Stack = createStackNavigator();

export const Root = () => {
  const [status, setStatus] = useState(null);
  const checkAuth = async () => {
    const token = await getItem('token');
    if (token !== null) {
      setStatus('signIn');
    }
    setStatus('signOut');
  };

  useEffect(() => {
    checkAuth();
  }, [status]);

  useEffect(() => {
    if (status !== '') {
      RNBootSplash.hide({fade: true});
    }
  }, [status]);

  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
        gestureEnabled: false,
        animationTypeForReplace: status === 'signIn' ? 'push' : 'pop',
      }}>
      {status === 'signIn' ? (
        <Stack.Screen name="App" component={TabNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => (
  <ThemeProvider>
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  </ThemeProvider>
);
