import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { sg } from 'Global/constants';
import ChallengeCard from './ChallengeCard';
import s from './ChallengeSection.style';

const propTypes = {
  title: PropTypes.string.isRequired,
  paddingHorizontal: PropTypes.number.isRequired,
  spaceBetweenPercent: PropTypes.string.isRequired,
  challenges: PropTypes.array, //eslint-disable-line
};

const ChallengeSection = props => (
  <View style={{ paddingHorizontal: props.paddingHorizontal }}>
    <Text style={[sg.header, s.header]}>
      <Text style={sg.headerFront}>ภารกิจ</Text>
      {' '}
      {props.title}
    </Text>
    <View style={s.wrapper}>
      <View style={[s.column, { marginRight: props.spaceBetweenPercent }]}>
        <ChallengeCard
          title={props.challenges[0].challenge_name}
          picture={props.challenges[0].challenge_picture}
          endDate={props.challenges[0].challenge_end_date}
          locationLabel={props.challenges[0].challenge_location_label}
          rating={props.challenges[0].challenge_total_rating}
        />
      </View>
      <View style={[s.column, { marginLeft: props.spaceBetweenPercent }]}>
        <ChallengeCard
          title={props.challenges[1].challenge_name}
          picture={props.challenges[1].challenge_picture}
          endDate={props.challenges[1].challenge_end_date}
          locationLabel={props.challenges[1].challenge_location_label}
          rating={props.challenges[1].challenge_total_rating}
        />
      </View>
    </View>
  </View>
);

ChallengeSection.propTypes = propTypes;

export default ChallengeSection;
