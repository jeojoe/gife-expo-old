import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import s from './LocationLabel.style';

const propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  noWrap: PropTypes.bool,
};

const LocationLabel = props => (
  <View style={[s.wrapper, !props.noWrap && { flex: 1, flexWrap: 'wrap' }]}>
    <MaterialIcons
      name="place" color={props.color} size={props.size}
      style={s.icon}
    />
    <Text
      style={[s.label,
        {
          color: props.color,
          fontSize: props.size,
        },
        !props.noWrap && { flex: 1, flexWrap: 'wrap' },
      ]}
    >
      {props.label}
    </Text>
  </View>
);

LocationLabel.propTypes = propTypes;
LocationLabel.defaultProps = {
  color: '#fff',
  size: 12,
  noWrap: false,
};

export default LocationLabel;
