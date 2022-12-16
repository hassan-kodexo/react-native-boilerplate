import React from 'react';
import {View, Text} from '~ui';

export const ListCard = ({item}) => {
  return (
    <View marginTop={'m'} padding={'s'} backgroundColor={'muted'}>
      <Text color={'primary'} variant={'header'}>
        {' '}
        {item?.title?.trim()}
      </Text>
      <Text variant={'body'}>{item?.body}</Text>
    </View>
  );
};

