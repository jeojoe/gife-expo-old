import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import { Colors, sg } from 'Global/constants';
import { getAllPlaces } from 'Global/dummyData';
import { PlaceCard } from 'Place';
import s from './DoingChallengeSection.style';

class DoingChallengeSection extends Component {
  state = {
    lol: 'lol'
  }

  _renderPlaces = () => {
    const place = getAllPlaces[0];
    return [1,2,3].map(key => (
      <View style={s.placeWrapper}>
        <PlaceCard
          key={key}
          title={place.place_name}
          locationLabel={place.place_district_name}
          rating={place.place_total_rating}
          bannerImageUrl={place.place_picture}
          hasButton
          buttonType="checkin"
        />
      </View>
    ));
  }

  render() {
    return (
      <View>
        <View style={sg.horizontalPad}>
          {/* Title */}
          <Text style={s.title}>
            5 ร้านอร่อยต้องไปโดนย่านสวนหลวง
          </Text>
          {/* Detail grey */}
          <View style={[sg.flexRow, sg.alignCenter, { marginBottom: 15 }]}>
            <MaterialIcons
              name="timer"
              color={Colors.textGreyLighter}
            />
            <Text style={s.textDetail}>{' '}เหลือ 3 วัน{' '}</Text>
            <FontAwesome
              name="gift"
              color={Colors.textGreyLighter}
            />
            <Text style={s.textDetail}>{' '}สิทธิลุ้นรับ iPhone 7s Plus !</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={s.placesRowWrapper}>
            {this._renderPlaces()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DoingChallengeSection;
