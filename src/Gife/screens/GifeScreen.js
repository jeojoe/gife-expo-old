import React from 'react';
import { Text, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

import { Logo } from 'Global/components';
import { Colors } from 'Global/constants';
import DoChallengeTab from '../components/DoChallengeTab';
import PendingReviewTab from '../components/PendingReviewTab';
import s from './GifeScreen.style';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'ทำภารกิจ!',
    tabBarIcon: ({ focused }) => (
      <Logo
        type={focused ? 'normal' : 'grey'}
        // name="search"
        // color={focused ? Colors.main : Colors.textGreyLighter}
        size={25}
      />
    ),
  };

  state = {
    activeTab: 'do-challenge',
  }

  _changeTab = activeTab => this.setState({ activeTab })

  render() {
    return (
      <LinearGradient
        colors={[Colors.bgMainLightTop, Colors.bgMainLightBottom]}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        style={s.wrapper}
      >
        <LinearGradient
          colors={[Colors.bgTopBarLeft, Colors.bgTopBarRight]}
          style={s.topBar}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            style={s.topBarButton}
            onPress={() => this._changeTab('do-challenge')}
          >
            <Text
              style={[
                s.topBarText,
                this.state.activeTab === 'do-challenge' && s.topBarTextActive,
              ]}
            >
              ทำภารกิจ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={s.topBarButton}
            onPress={() => this._changeTab('pending-review')}
          >
            <Text
              style={[
                s.topBarText,
                this.state.activeTab === 'pending-review' && s.topBarTextActive,
              ]}
            >
              รอรีวิวอยู่
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        {this.state.activeTab === 'do-challenge' ?
          <DoChallengeTab />
          :
          <PendingReviewTab />
        }
      </LinearGradient>
    );
  }
}
