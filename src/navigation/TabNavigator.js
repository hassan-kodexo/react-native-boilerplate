import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '~screen/Home';
import Setting from '~screen/Setting';
const Tab = createBottomTabNavigator();

// const getRouteIcon = routeName => {
//   let icon = HomeIcon;
//   switch (routeName) {
//     case 'Home':
//       icon = HomeIcon;
//       break;
//     case 'Style':
//       icon = Settings;
//       break;
//   }

//   return Icon;
// };

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarIcon: ({color}) => {
        //   const icon = getRouteIcon(route.name);
        //   return <SvgXml  xml={icon}  color={color} />;
        // },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};
