import { TabNavigator, TabBarBottom } from 'react-navigation';

import { ExploreTabScreen } from 'Explore';
import { GifeScreen } from 'Gife';
import { SettingsScreen } from 'Profile';

export default TabNavigator(
  {
    Home: {
      screen: ExploreTabScreen,
    },
    Gife: {
      screen: GifeScreen,
    },
    Reward: {
      screen: SettingsScreen,
    },
    Profile: {
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
