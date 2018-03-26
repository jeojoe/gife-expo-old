import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from 'Global/constants';
import s from './RewardLabelDetailed.style';
import sReward from './RewardLabel.style';

const propTypes = {
  label: PropTypes.string.isRequired,
  sponsorName: PropTypes.string.isRequired,
  sponsorImageUrl: PropTypes.string.isRequired,
};

const RewardLabelDetailed = props => (
  <LinearGradient
    colors={[Colors.rewardBgLeft, Colors.rewardBgRight]}
    start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
    style={[s.wrapper]}
  >
    {/* Header */}
    <View style={s.headerWrapper}>
      <View style={[sReward.iconWrapper, s.iconWrapper]}>
        <Icon name="gift" color="#fff" size={20} />
      </View>
      <Text
        style={[sReward.text, s.headerText]}
        numberOfLines={1}
      >
        รางวัลเมื่อทำภารกิจสำเร็จ
      </Text>
    </View>

    {/* Label */}
    <Text style={s.label}>ที่พักในโรงแรม HQO 1 คืน ฟรี!</Text>

    {/* Sponsor */}
    {true &&
      <View>
        <Text style={s.sponsorHeader}>
          สนับสนุนโดย
        </Text>
        {/* <Text>Hotel.com</Text> */}
        <Image
          source={{ uri: 'https://a.cdn-hotels.com/cos/production35/d1963/6710bf70-c529-11e5-b39c-d89d672bfba8.jpg' }}
          style={s.sponsorImage}
        />
      </View>
    }
  </LinearGradient>
);

RewardLabelDetailed.propTypes = propTypes;

export default RewardLabelDetailed;
