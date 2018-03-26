import { TabNavigator, TabBarBottom } from 'react-navigation';

import { ExploreTabScreen } from 'Explore';
import { GifeScreen } from 'Gife';
import { SettingsScreen } from 'Profile';
import { Colors } from 'Global/constants';

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
      showLabel: true,
      showIcon: true,
      activeTintColor: Colors.main,
      style: {
        borderTopWidth: 0,
        backgroundColor: '#fff',
      },
      allowFontScaling: true,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);
