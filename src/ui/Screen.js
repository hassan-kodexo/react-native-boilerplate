import React from 'react';
import {View} from './View';

export const Screen = ({children}) => (
  <View
    justifyContent="center"
    flexDirection="column"
    paddingHorizontal="m"
    flex={1}
    bg="background">
    {children}
  </View>
);
