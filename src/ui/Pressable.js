import {createBox} from '@shopify/restyle';
import {Pressable as NSPressable} from 'react-native';

export const Pressable = createBox < {children} > NSPressable;
