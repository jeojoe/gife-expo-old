import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { ExploreTabScreen } from 'Explore';
import { GifeScreen } from 'Gife';
import { SettingsScreen } from 'Profile';

export default TabNavigator(
  {
    Home: {
      screen: ExploreTabScreen,
    },
    Links: {
      screen: GifeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      style: {
        borderTopWidth: 0,
        backgroundColor: '#fff',
      },
      tabStyle: {
        paddingBottom: 25,
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);
