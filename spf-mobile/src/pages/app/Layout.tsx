// App.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OverView from './OverView';
import Partner from './Partner';
import Leads from './Leads';
import Telecaller from './Telecaller';
import { images } from '../../constants/images';
import { Image } from 'react-native';
import { colors } from '../../constants/colors';

const Tab = createBottomTabNavigator();

const TabLayout: React.FC = () => {

  const tabBarIcon = ({ route, focused }) => {
    let iconSource;
    switch (route.name) {
      case 'OverView':
        iconSource = images.ic_home;
        break;
      case 'Partner':
        iconSource = images.ic_partner;
        break;
      case 'Leads':
        iconSource = images.ic_lead;
        break;
      case 'Telecaller':
        iconSource = images.ic_telecaller;
        break;
      default:
        break;
    }

    return <Image source={iconSource} style={{ width: route.name === 'Partner' ? 28 : 24, height: route.name === 'Partner' ? 28 : 24, tintColor: focused ? colors.pink : colors.gray }} />;
  };

  return (
    <Tab.Navigator initialRouteName='Telecaller' screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="OverView"
        component={OverView}
        options={{
          tabBarIcon: ({ focused }) => tabBarIcon({ route: { name: 'OverView' }, focused }),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Partner"
        component={Partner}
        options={{
          tabBarIcon: ({ focused }) => tabBarIcon({ route: { name: 'Partner' }, focused }),
          tabBarShowLabel: false
        }}
      />
      <Tab.Screen
        name="Leads"
        component={Leads}
        options={{
          tabBarIcon: ({ focused }) => tabBarIcon({ route: { name: 'Leads' }, focused }),
          tabBarShowLabel: false
        }}
      />
      <Tab.Screen
        name="Telecaller"
        component={Telecaller}
        options={{
          tabBarIcon: ({ focused }) => tabBarIcon({ route: { name: 'Telecaller' }, focused }),
          tabBarShowLabel: false
        }}
      />
    </Tab.Navigator>
  );
};

export default TabLayout;
