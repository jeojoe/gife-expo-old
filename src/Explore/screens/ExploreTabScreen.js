import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { ChallengeSection } from 'Challenge';
import { GifeStatusBar } from 'Global/components';
import { sg, Colors } from 'Global/constants';
// dummy
import { getSections } from 'Global/dummyData';
import SpotlightCarousel from '../components/SpotlightCarousel';
import s from './ExploreTabScreen.style';

export default class ExploreTabScreen extends Component {
  // static propTypes = {
  //   navigation: PropTypes.objectOf({
  //     navigate: PropTypes.func.isRequired,
  //   }).isRequired,
  // }

  static navigationOptions = {
    header: null,
    title: 'ค้นหา',
    tabBarIcon: ({ focused }) => (
      <FontAwesome
        name="search"
        color={focused ? Colors.main : Colors.textGreyLighter}
        size={25}
      />
    ),
  }

  _renderSections = () => (
    getSections().map(section => (
      <ChallengeSection
        key={section.id}
        title={section.title}
        paddingHorizontal={20}
        spaceBetweenPercent="2.5%"
        challenges={section.challenges}
      />
    ))
  )

  render() {
    return (
      <SafeAreaView style={[sg.wrapper, s.wrapper]}>
        <GifeStatusBar grey />
        <ScrollView>
          {/* space <==> */}
          <View style={{ height: 20 }} />

          {/* Spotlight */}
          <Text style={[sg.header]}>
            <Text style={sg.headerFront}>
              ภารกิจ
            </Text>
            {' '}
            <Text>โดดเด่นและแนะนำ</Text>
          </Text>
          <SpotlightCarousel />

          {/* Sections */}
          {this._renderSections()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
