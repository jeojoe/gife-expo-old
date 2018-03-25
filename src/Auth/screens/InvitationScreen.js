import React, { Component } from 'react';
import { compose } from 'redux';
import { TextInput, Image, ImageBackground, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { AuthServices } from 'Auth';
import { Colors, GlobalPropTypes, AlertMessages } from 'Global/constants';
import { Button } from 'Global/components';
import withGlobalRedux from 'Global/hoc/withGlobalRedux';
import withAuthRedux from 'Global/hoc/withAuthRedux';
import authBg1 from 'Global/assets/images/auth-bg-1.png';
import authBg2 from 'Global/assets/images/auth-bg-2.png';
import authBg3 from 'Global/assets/images/auth-bg-3.png';
import logoWhiteTrans from 'Global/assets/images/logo-white-trans.png';

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

class InvitationScreen extends Component {
  state = {
    code: '',
    isLoading: false,
  }

  _verifyCode = () => {
    // Todo: modal bug
    // this.props.startLoading();
    this.setState({ isLoading: true });
    AuthServices.verifyInvitationCode(this.state.code)
      // Success
      .then(() => {
        this.setState({ isLoading: false });
        this.props.setInvitationCode(this.state.code);
      })
      // Error
      .catch((err) => {
        this.setState({ isLoading: false });
        console.warn(err);
        setTimeout(() => alert(AlertMessages.INVITATION_CODE_REJECTED), 500);
      });
  }

  render() {
    return (
      <ImageBackground
        style={s.wrapper}
        source={bg}
        resizeMode="cover"
      >
        <Spinner visible={this.state.isLoading} />
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
          onPress={this._verifyCode}
        />
      </ImageBackground>
    );
  }
}

InvitationScreen.propTypes = GlobalPropTypes.GlobalRedux;

export default compose(
  withGlobalRedux,
  withAuthRedux,
)(InvitationScreen);
