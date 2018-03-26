// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// dummy
import { allChallenges } from 'Global/dummyData';
import { ChallengeCardJumbo } from 'Challenge';
import s, { sliderWidth } from './SpotlightCarousel.style';

class SpotlightCarousel extends Component {
  _renderItems = ({ item }) => (
    <ChallengeCardJumbo
      title={item.challenge_name}
      picture={item.challenge_picture}
      endDate={item.challenge_end_date}
      locationLabel={item.challenge_location_label}
      rating={item.challenge_total_rating}
    />
  )

  render() {
    return (
      <View style={s.wrapper}>
        <Carousel
          data={allChallenges}
          renderItem={this._renderItems}
          sliderWidth={sliderWidth}
          itemWidth={ChallengeCardJumbo.width}
        />
      </View>
    );
  }
}

export default SpotlightCarousel;
