import React, { Component } from 'react';
import { ImageBackground, Modal, Text, StatusBar } from 'react-native';

import withAuthRedux from 'hoc/withAuthRedux';
import { GlobalPropTypes } from 'app-constants';
import InvitationScreen from './InvitationScreen';
import s from './LoginScreen.style';

import authBg1 from '../../../assets/images/auth-bg-1.png';
import authBg2 from '../../../assets/images/auth-bg-2.png';
import authBg3 from '../../../assets/images/auth-bg-3.png';

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
  state = {
    lol: 'lol',
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
          visible={this.props.invitationCode}
          onRequestClose={() => console.log('close invitation screen')}
        >
          <InvitationScreen />
        </Modal>
      </ImageBackground>
    );
  }
}

LoginScreen.propTypes = GlobalPropTypes.AuthRedux;

export default withAuthRedux(LoginScreen);
