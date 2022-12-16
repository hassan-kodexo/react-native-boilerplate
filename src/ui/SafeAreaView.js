import {createBox} from '@shopify/restyle';
import {SafeAreaView as NSafeAreaView} from 'react-native-safe-area-context';

export const SafeAreaView = createBox < {children} > NSafeAreaView;
