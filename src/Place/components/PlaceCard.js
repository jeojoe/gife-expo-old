import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

import { LocationLabel, StarRating } from 'Global/components';
import { Colors } from 'Global/constants';
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

  _renderButton = type => (
    <TouchableOpacity
      onPress={() => {
        if (type === 'checkin') this._pressCheckIn();
        else this._pressQr();
      }}
      style={s.actionButtonWrapper}
    >
      <LinearGradient
        colors={[Colors.placeActionButtonLeft, Colors.placeActionButtonRight]}
        start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
        style={s.actionButton}
      >
        <MaterialIcons
          name="location-on"
          size={24}
          color="#fff"
        />
        <Text style={s.actionButtonText}>เช็คอินตำแหน่ง</Text>
      </LinearGradient>
    </TouchableOpacity>
  )

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
          {this.props.hasButton &&
            this._renderButton(this.props.buttonType)
          }
          <LinearGradient
            colors={['transparent', '#000']}
            start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}
            style={this.props.jumbo ? s.headerGradientWrapperJumbo : s.headerGradientWrapper}
          >
            {/* Title */}
            <Text style={this.props.jumbo ? s.titleJumbo : s.title} numberOfLines={3}>
              {this.props.title}
            </Text>
            {/* Footer */}
            <View style={s.footerWrapper}>
              <LocationLabel
                label={this.props.locationLabel}
                size={10}
              />
              <StarRating
                rating={this.props.rating}
                size={10}
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
