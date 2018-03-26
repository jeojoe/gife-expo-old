import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import { Colors, sg } from 'Global/constants';
import s from './DoingChallengeSection.style';

class DoingChallengeSection extends Component {
  state = {
    lol: 'lol'
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
        <Text>content</Text>
      </View>
    );
  }
}

export default DoingChallengeSection;
