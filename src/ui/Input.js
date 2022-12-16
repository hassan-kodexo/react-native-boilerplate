import * as React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';
import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  useController,
} from 'react-hook-form';
import {Text} from './Text';
import {View} from './View';
import {useTheme} from './theme';

// types
type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

export type RuleType<T> = {[name in keyof T]: TRule};
export type InputControllerType<T> = {
  name: Path<T>;
  control: Control<FieldValues | any>;
  rules?: TRule;
};

interface Props<T> extends TextInputProps, InputControllerType<T> {
  disabled?: boolean;
  label?: string;
  inputRef?: React.RefObject<TextInput>;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onChangeText: (text: string) => void;
}

export function Input<T>(props: Props<T>) {
  const {
    label,
    name,
    control,
    inputRef,
    onSubmitEditing,
    onBlur,
    onFocus,
    onChangeText,
    rules,
    ...inputProps
  } = props;
  const {colors} = useTheme();
  const {field, fieldState} = useController({control, name, rules});
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlurInput = () => setIsFocussed(false);
  const onFocusInput = () => setIsFocussed(true);

  const borderColor = fieldState.invalid
    ? colors.red
    : isFocussed
    ? colors.secondary
    : colors.grey2;

  return (
    <View key={`input-${name}`} marginBottom="m">
      {label && (
        <Text
          variant="label"
          color={
            fieldState.invalid ? 'red' : isFocussed ? 'secondary' : 'grey1'
          }>
          {label}
        </Text>
      )}
      <TextInput
        ref={inputRef}
        placeholderTextColor={colors.grey2}
        style={[
          styles.input,
          {
            borderColor,
            color: colors.grey1,
          },
        ]}
        autoCapitalize="none"
        onChangeText={field.onChange}
        value={field.value as string}
        onBlur={() => {
          onBlurInput();
          onBlur && onBlur();
        }}
        onSubmitEditing={onSubmitEditing}
        onFocus={() => {
          onFocusInput();
          onFocus && onFocus();
        }}
        {...inputProps}
      />
      {fieldState.error && (
        <Text fontSize={12} color="red">
          {fieldState.error.message}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F3F3F3',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 2,
    fontSize: 16,
  },
});
