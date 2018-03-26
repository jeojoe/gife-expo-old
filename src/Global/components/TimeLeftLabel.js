import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import moment from 'moment';

import s from './TimeLeftLabel.style';

const propTypes = {
  endDate: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

const TimeLeftLabel = (props) => {
  const timeLeft = moment(props.endDate).fromNow();
  return (
    <View
      style={s.wrapper}
    >
      <Text style={[s.text, props.small && { fontSize: 9 }]}>
        {timeLeft}
      </Text>
    </View>
  );
};

TimeLeftLabel.propTypes = propTypes;
TimeLeftLabel.defaultProps = {
  small: false,
};

export default TimeLeftLabel;
