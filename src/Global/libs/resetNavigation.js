import { NavigationActions } from 'react-navigation';

export default function resetNavigation(navigation) {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'MainTab' }),
      // NavigationActions.navigate({ routeName: tabName }),
    ],
  });

  navigation.dispatch(resetAction);
}
