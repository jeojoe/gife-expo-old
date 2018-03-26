import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from 'Global/constants';
import s from './RewardLabel.style';

const propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['jumbo', 'normal']).isRequired,
};

const RewardLabel = (props) => {
  let height = 30;
  let size = 10;
  if (props.size === 'jumbo') {
    height = 45; size = 16;
  }

  return (
    <LinearGradient
      colors={[Colors.rewardBgLeft, Colors.rewardBgRight]}
      start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
      style={[s.wrapper, { height }]}
    >
      <View
        style={[
          s.iconWrapper,
          { flexBasis: height * 0.7, height: height * 0.7 },
          { marginRight: size * 0.45 },
        ]}
      >
        <Icon name="gift" color="#fff" size={size + 4} />
      </View>
      <Text
        style={[s.text, { fontSize: size }]}
        numberOfLines={1}
      >
        {props.label}
      </Text>
    </LinearGradient>
  );
};

RewardLabel.propTypes = propTypes;

export default RewardLabel;
