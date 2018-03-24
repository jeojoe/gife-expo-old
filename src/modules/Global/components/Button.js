import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';

import { Colors } from 'app-constants';
import s from './Button.style';

const propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  height: PropTypes.number,
  onPress: PropTypes.func,
  style: View.propTypes.style,
};

const Button = (props) => {
  let leftColor = Colors.buttonLeft;
  let rightColor = Colors.buttonRight;
  let textColor = '#fff';

  if (props.bgColor === 'white') {
    leftColor = '#fff'; rightColor = '#fff'; textColor = Colors.main;
  } else if (props.bgColor === 'pink') {
    leftColor = Colors.main; rightColor = Colors.main; textColor = '#fff';
  }

  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={props.height && { height: props.height }}
    >
      <LinearGradient
        colors={[leftColor, rightColor]}
        style={[s.wrapper, props.style]}
        start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
      >
        <Text style={[s.text, { color: textColor }]}>
          {props.text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

Button.propTypes = propTypes;

Button.defaltProps = {
  height: 40,
};

export default Button;
