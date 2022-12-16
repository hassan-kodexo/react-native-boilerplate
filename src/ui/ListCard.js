import {StyleSheet} from 'react-native';
import React from 'react';
import {View, Text} from 'ui';

interface ListProps {
  item?: {
    title?: string;
    body?: string;
  };
}

export const ListCard = ({item}: ListProps) => {
  return (
    <View marginTop={'m'} padding={'s'} backgroundColor={"muted"}>
      <Text color={"primary"} variant={'header'}> {item?.title?.trim()}</Text>
      <Text variant={'body'}>{item?.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
});
