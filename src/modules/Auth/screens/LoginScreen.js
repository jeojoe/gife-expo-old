import React, { Component } from 'react';
import { ImageBackground, Modal } from 'react-native';

import authBg1 from '../../../assets/images/auth-bg-1.png';
import authBg2 from '../../../assets/images/auth-bg-2.png';
import authBg3 from '../../../assets/images/auth-bg-3.png';

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
  render() {
    return (
      <ImageBackground
        style={s.wrapper}
        source={bg}
        resizeMode="cover"
      >
        <Text>lol</Text>
      </ImageBackground>
    );
  }
}

export default LoginScreen;
