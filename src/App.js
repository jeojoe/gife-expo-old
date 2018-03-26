import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { AuthServices, LoginScreen } from 'Auth';
import { withAuthRedux } from 'Global/hoc';
import { GlobalPropTypes } from 'Global/constants';
import { SpinnerOverlay } from 'Global/components';
import RootNavigation from 'Global/navigators/RootNavigation';
import configureStore from './configureStore';

class App extends React.Component {
  state = {
    isAppReady: false,
  }

  // Preparing app
  async componentWillMount() {
    await Asset.loadAsync([
      require('./Global/assets/images/robot-dev.png'),
      require('./Global/assets/images/robot-prod.png'),
    ]);

    await Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...FontAwesome.font,
      ...MaterialIcons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      brand: require('./Global/assets/fonts/Bangers-Regular.ttf'),
      'th-fancy-regular': require('./Global/assets/fonts/NotoSansThaiUI-Regular.ttf'),
      'th-fancy-medium': require('./Global/assets/fonts/NotoSansThaiUI-Medium.ttf'),
    });

    // Dummy : create
    // await AuthServices.setInvitationCode('lolcode');
    // await AuthServices.setToken('token');
    // Dummy : delete
    // await AuthServices.deleteInvitationCode();
    // await AuthServices.deleteToken();

    const token = await AuthServices.getToken();
    const code = await AuthServices.getInvitationCode();
    console.log(token, code);
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
        <SpinnerOverlay />

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

App.propTypes = GlobalPropTypes.AuthRedux;

// Redux
const AppWithAuth = withAuthRedux(App);

const store = configureStore({});
export default () => (
  <Provider store={store}>
    <AppWithAuth />
  </Provider>
);
