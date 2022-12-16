import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Style, List} from '~screens';
import {Home as HomeIcon, Settings} from '~ui';
import {SvgProps} from 'react-native-svg';
const Tab = createBottomTabNavigator();

const getRouteIcon = routeName => {
  let Icon = HomeIcon;
  switch (routeName) {
    case 'Home':
      Icon = HomeIcon;
      break;
    case 'Style':
      Icon = Settings;
      break;
    case 'List':
      Icon = Settings;
      break;
  }

  return Icon;
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          const Icon = getRouteIcon(route.name);
          return <Icon color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Style" component={Style} />
      <Tab.Screen name="List" component={List} />
    </Tab.Navigator>
  );
};
