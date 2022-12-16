import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  composeRestyleFunctions,
  createRestyleComponent,
  createVariant,
} from '@shopify/restyle';

import {Text} from './Text';
import {View} from './View';

const buttonVariant = createVariant({themeKey: 'buttonVariants'});
const ButtonContainer =
  createRestyleComponent < React.ComponentProps > ([buttonVariant], View);

const restyleFunctions = composeRestyleFunctions([
  buttonVariant,
  spacing,
  border,
  backgroundColor,
]);

export const Button = ({
  onPress,
  label,
  loading = false,
  variant = 'primary',
  ...rest
}) => {
  const props = useRestyle(restyleFunctions, {...rest, variant});
  const textVariant = 'button_' + variant;

  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer
        borderRadius={44}
        flexDirection="row"
        paddingVertical="m"
        paddingHorizontal="xl"
        marginVertical="s"
        justifyContent="center"
        {...props}>
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text variant={textVariant}>{label}</Text>
        )}
      </ButtonContainer>
    </TouchableOpacity>
  );
};
