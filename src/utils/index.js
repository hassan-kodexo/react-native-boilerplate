import Toast from 'react-native-toast-message';
import {clearStorage} from './mmkv';

// make first latter capital
export const capitalizeFirstLetter = string => {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
};

// Get searchedArray according to given keyword
export const searchArray = (data, keyword) => {
  const result = [];
  data.forEach(item => {
    let matched = false;
    Object.keys(item).forEach(key => {
      if (
        item &&
        typeof item[key] === 'string' &&
        item[key]?.toLowerCase().match(keyword.toLowerCase())
      ) {
        return (matched = true);
      } else if (item && typeof item[key] === 'object') {
        if (item[key]) {
          Object.keys(item[key]).forEach(val => {
            if (
              item[key][val] &&
              typeof item[key][val] === 'string' &&
              item[key][val]?.toLowerCase().match(keyword.toLowerCase())
            ) {
              return (matched = true);
            }
          });
        }
      }
    });
    if (matched) {
      result.push(item);
    }
  });
  return result;
};

// Check User Authorization
export const errorHandling = async (error, navigation) => {
  let status = error?.response?.status;
  if (status >= 400) {
    const response = get(error, 'response.data');
    if (status === 401) {
      await clearStorage();
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'AuthStack'}],
        }),
      );
    }

    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: response.error,
      text2: response.message,
    });
  }
  if (error.message === 'Network Error') {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: error.message,
      text2: 'Error',
    });
  }
};
