import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { DoingChallengeSection } from 'Challenge';
import s from './DoChallengeTab.style';

class DoChallengeTab extends Component {
  _renderSections = () => {
    return [1,2,3].map(challenge => (
      <View style={s.sectionWrapper} key={challenge}>
        <DoingChallengeSection />
      </View>
    ));
  }

  render() {
    return (
      <ScrollView style={{ paddingTop: 20 }}>
        {this._renderSections()}
      </ScrollView>
    );
  }
}

export default DoChallengeTab;
