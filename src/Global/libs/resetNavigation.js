import { NavigationActions } from 'react-navigation';

export default function resetNavigation(navigation) {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [{
      type: NavigationActions.NAVIGATE,
      routeName: 'MainTab',
      key: null,
    }],
  });

  navigation.dispatch(resetAction);
}
