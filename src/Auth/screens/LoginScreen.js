import React, { Component } from 'react';
import { compose } from 'redux';
import { ImageBackground, Modal, Text, StatusBar, Image } from 'react-native';
import { Facebook } from 'expo';

import { AuthServices } from 'Auth';
import withAuthRedux from 'Global/hoc/withAuthRedux';
import withGlobalRedux from 'Global/hoc/withGlobalRedux';
import { GlobalPropTypes, Config, AlertMessages } from 'Global/constants';
import { Button } from 'Global/components';
import authBg1 from 'Global/assets/images/auth-bg-1.png';
import authBg2 from 'Global/assets/images/auth-bg-2.png';
import authBg3 from 'Global/assets/images/auth-bg-3.png';
import logoWhiteTrans from 'Global/assets/images/logo-white-trans.png';

import InvitationScreen from './InvitationScreen';
import s from './LoginScreen.style';

const random = Math.random();
let bg = '';
if (random < 0.33) {
  bg = authBg1;
} else if (random > 0.66) {
  bg = authBg2;
} else {
  bg = authBg3;
}

class LoginScreen extends Component {
  _login = async () => {
    const { type, token: accessToken } = await Facebook.logInWithReadPermissionsAsync(Config.FACEBOOK_APP_ID, {
      permissions: ['public_profile', 'email', 'user_friends'],
    });

    if (type === 'success') {
      this.props.startLoading();
      Promise.resolve(AuthServices.loginOAuth(accessToken))
        // Succeed
        .then((res) => {
          this._loginSuccess('facebook', res.body.token);
        })
        // Failed
        .catch((err) => {
          console.log(err);
          alert(AlertMessages.NETWORK_ERR);
        })
        // Finally
        .finally(() => this.props.endLoading());
    } else {
      alert(AlertMessages.NETWORK_ERR);
    }
  }

  _loginSuccess = async (type, token) => {
    console.log(token);
    await AuthServices.setToken(token);
    if (type === 'facebook') {
      console.log('Login: FB');
    }
    this.props.setIsLoggedIn(true);
  }

  render() {
    return (
      <ImageBackground
        style={s.wrapper}
        source={bg}
        resizeMode="cover"
      >
        <StatusBar
          animated
          barStyle="light-content"
        />
        <Modal
          visible={!this.props.invitationCode}
          animationType="fade"
          onRequestClose={() => console.log('close invitation screen')}
        >
          <InvitationScreen />
        </Modal>
        {/* Content */}
        <Image
          source={logoWhiteTrans}
          style={s.logo}
          resizeMode="contain"
        />
        <Text style={[s.text, { marginBottom: 70 }]}>
          แอพที่ทำให้คุณเที่ยวแล้วได้รางวัล!
        </Text>
        <Button
          text="ดำเนินการต่อด้วย Facebook"
          onPress={this._login}
          bgColor="white"
        />
      </ImageBackground>
    );
  }
}

LoginScreen.propTypes = GlobalPropTypes.AuthRedux;

export default compose(
  withAuthRedux,
  withGlobalRedux,
)(LoginScreen);
