import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

import { LocationLabel, StarRating } from 'Global/components';
import s from './PlaceCard.style';

const propTypes = {
  title: PropTypes.string.isRequired,
  locationLabel: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bannerImageUrl: PropTypes.string.isRequired,
  jumbo: PropTypes.bool,
  hasButton: PropTypes.bool,
  buttonType: PropTypes.oneOf(['qr', 'checkin']),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

class PlaceCard extends Component {
  static defaultProps = {
    jumbo: false,
    hasButton: false,
    buttonType: null,
  }

  _pressQr = () => {
    console.log('press qr');
  }

  _pressCheckIn = () => {
    console.log('press checkin');
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => this.props.navigation.navigate('Place')}
        style={this.props.jumbo ? s.jumboWrapper : s.wrapper}
      >
        <ImageBackground
          source={{ uri: this.props.bannerImageUrl }}
          style={s.imageBg}
        >
          <LinearGradient
            colors={['transparent', '#000']}
            start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}
            style={s.headerGradientWrapper}
          >
            {/* Title */}
            <Text style={s.title} numberOfLines={3}>
              {this.props.title}
            </Text>
            {/* Footer */}
            <View style={s.footerWrapper}>
              <LocationLabel
                label={this.props.locationLabel}
              />
              <StarRating
                rating={this.props.rating}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

PlaceCard.propTypes = propTypes;

export default withNavigation(PlaceCard);
