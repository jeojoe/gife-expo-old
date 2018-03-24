import React, { Component } from 'react';
import { TextInput, Image, ImageBackground, Text } from 'react-native';

import { Colors } from 'app-constants';
import { Button } from 'modules/Global';
import s from './LoginScreen.style';

import authBg1 from '../../../assets/images/auth-bg-1.png';
import authBg2 from '../../../assets/images/auth-bg-2.png';
import authBg3 from '../../../assets/images/auth-bg-3.png';
import logoWhiteTrans from '../../../assets/images/logo-white-trans.png';

const random = Math.random();
let bg = '';
if (random < 0.33) {
  bg = authBg1;
} else if (random > 0.66) {
  bg = authBg2;
} else {
  bg = authBg3;
}

class InvitationScreen extends Component {
  state = {
    code: '',
  }

  _verifyCode = async () => {

  }

  render() {
    return (
      <ImageBackground
        style={s.wrapper}
        source={bg}
        resizeMode="cover"
      >
        <Image
          source={logoWhiteTrans}
          style={s.logo}
          resizeMode="contain"
        />
        <Text style={s.text}>
          Welcome to our beta testing. Insert invitation code and have fun traveling with GIFE!
        </Text>
        <TextInput
          style={s.input}
          value={this.state.code}
          onChangeText={code => this.setState({ code })}
          placeholder="Invitation Code"
          placeholderTextColor={Colors.textOnLightPink}
          keyboardType="numeric"
          returnKeyType="done"
          underlineColorAndroid="transparent"
          maxLength={6}
        />
        <Button
          text="Submit"
          onPress={() => console.log('lol')}
        />
      </ImageBackground>
    );
  }
}

export default InvitationScreen;
