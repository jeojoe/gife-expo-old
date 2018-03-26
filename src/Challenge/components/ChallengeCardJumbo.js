import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { withNavigation } from 'react-navigation';

import { TimeLeftLabel, LocationLabel, StarRating } from 'Global/components';
import { GlobalPropTypes } from 'Global/constants';
import { RewardLabel } from 'Reward';
import s, { cardHeight, cardWidth } from './ChallengeCardJumbo.style';

const ChallengeCardJumbo = props => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => props.navigation.navigate('Challenge')}
    disabled={props.disabled}
  >
    <ImageBackground
      style={s.imageWrapper}
      source={{ uri: props.picture }}
    >
      {/* Time */}
      <View style={s.timeLeft}>
        <TimeLeftLabel
          endDate={props.endDate}
        />
      </View>

      {/* Header */}
      <View style={s.flexSpace}>
        <LinearGradient
          colors={['transparent', '#000']}
          start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}
          style={s.headerGradientWrapper}
        >
          {/* Title */}
          <Text style={s.title} numberOfLines={3}>
            {props.title}
          </Text>
          {/* Location + Star */}
          <View style={s.footerWrapper}>
            <LocationLabel
              label={props.locationLabel}
            />
            <StarRating
              rating={props.rating}
            />
          </View>
        </LinearGradient>
      </View>

      {/* Reward */}
      <RewardLabel
        label="ที่พักในโรงแรม HQO 1 คืน ฟรี!"
        size="jumbo"
      />

    </ImageBackground>
  </TouchableOpacity>
);

ChallengeCardJumbo.width = cardWidth;
ChallengeCardJumbo.height = cardHeight;
ChallengeCardJumbo.propTypes = GlobalPropTypes.Challenge;

export default withNavigation(ChallengeCardJumbo);
