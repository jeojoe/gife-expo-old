// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from 'Global/constants';
import s from './StarRating.style';

const propTypes = {
  rating: PropTypes.number.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

const StarRating = props => (
  <View style={s.wrapper}>
    <Icon
      name="star" size={props.size} color={props.color}
      style={s.icon}
    />
    <Text style={[s.rating, { color: props.color, fontSize: props.size }]}>
      {Number(props.rating).toFixed(1)}
    </Text>
  </View>
);

StarRating.propTypes = propTypes;
StarRating.defaultProps = {
  color: Colors.rating,
  size: 12,
};

export default StarRating;
