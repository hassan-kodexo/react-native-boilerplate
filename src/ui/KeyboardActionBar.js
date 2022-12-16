import React from 'react';
import {
  InputAccessoryView,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {Text} from './Text';
import {useTheme} from './theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IS_IOS} from './constants';

export const KeyboardActionBar = ({
  inputType,
  isButtonDisabled,
  nativeID,
  nextDisabled,
  onPressDone,
  onPressNext,
  onPressPrev,
  prevDisabled,
  style,
}) => {
  const {colors} = useTheme();
  return (
    <>
      {IS_IOS && (
        <InputAccessoryView
          backgroundColor={'rgb(71,71,71,0.1)'}
          nativeID={nativeID}>
          <BlurView
            blurRadius={25}
            blurType={'light'}
            reducedTransparencyFallbackColor="white"
            style={[styles.container, style]}>
            <View style={styles.flexRow}>
              <TouchableOpacity
                disabled={prevDisabled}
                onPress={onPressPrev}
                style={styles.buttonContainer}>
                <AntDesign name="left" size={15} />
              </TouchableOpacity>

              <TouchableOpacity
                disabled={nextDisabled}
                onPress={onPressNext}
                style={styles.buttonContainer}>
                <AntDesign name="right" size={15} />
              </TouchableOpacity>
            </View>
            {inputType && (
              <Text style={[styles.inputType, {color: colors.grey1}]}>
                {inputType}
              </Text>
            )}
            <TouchableOpacity disabled={isButtonDisabled} onPress={onPressDone}>
              <Text
                style={
                  isButtonDisabled
                    ? [styles.disableDoneButton, {color: colors.grey2}]
                    : [styles.doneButton, {color: colors.primary}]
                }>
                Done
              </Text>
            </TouchableOpacity>
          </BlurView>
        </InputAccessoryView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 12,
  },
  flexRow: {
    flexDirection: 'row',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputType: {
    marginLeft: '-8%',
  },
  doneButton: {
    fontSize: 16,
  },
  disableDoneButton: {
    fontSize: 16,
  },
});
