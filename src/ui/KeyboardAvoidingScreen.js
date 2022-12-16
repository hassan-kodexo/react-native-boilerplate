import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {IS_IOS} from './constants';
import {View} from './View';

export const KeyboardAvoidingScreen = ({children}) => (
  <KeyboardAvoidingView
    behavior={IS_IOS ? 'padding' : undefined}
    style={{flex: 1}}>
    <View
      justifyContent="center"
      flexDirection="column"
      paddingHorizontal="m"
      flex={1}
      bg="background">
      {children}
    </View>
  </KeyboardAvoidingView>
);
