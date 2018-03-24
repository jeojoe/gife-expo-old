import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import RootNavigation from 'navigators/RootNavigation';
import { AuthServices, LoginScreen } from 'modules/Auth';
import { withAuthRedux } from 'hoc';
import { GlobalPropTypes } from 'app-constants';
import configureStore from './configureStore';

const propTypes = {
  ...GlobalPropTypes.AuthRedux,
};

class App extends React.Component {
  state = {
    isAppReady: false,
  }

  async componentWillMount() {
    await Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]);

    await Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      brand: require('./assets/fonts/Bangers-Regular.ttf'),
      'thFancy-regular': require('./assets/fonts/NotoSansThaiUI-Regular.ttf'),
    });

    // Dummy
    await AuthServices.setInvitationCode('lolcode');
    await AuthServices.setToken('token');

    const token = await AuthServices.getToken();
    const code = await AuthServices.getInvitationCode();
    if (code) this.props.setInvitationCode(code);
    if (token) {
      this.props.setIsLoggedIn(true);
    } else {
      this.props.setIsLoggedIn(false);
    }

    this.setState({ isAppReady: true });
  }

  render() {
    if (!this.state.isAppReady && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    }

    return (
      <View style={s.container}>
        {!this.props.isLoggedIn ?
          <LoginScreen />
          :
          <RootNavigation />
        }
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

App.propTypes = propTypes;

// Redux
const AppWithAuth = withAuthRedux(App);

const store = configureStore({});
export default () => (
  <Provider store={store}>
    <AppWithAuth />
  </Provider>
);
