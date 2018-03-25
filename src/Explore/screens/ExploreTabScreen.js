import React from 'react';
import { StatusBar, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';

import { MonoText } from 'Global/components';
import withExploreRedux from 'Global/hoc/withExploreRedux';
import { Colors, sg } from 'Global/constants';
// dummy
import { getSections } from 'Global/dummyData';

import s from './ExploreTabScreen.style';

class ExploreTabScreen extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ focused }) => (
      <FontAwesome
        name="search"
        color={focused ? Colors.main : Colors.textGreyLighter}
        size={25}
      />
    ),
  };

  _renderSection = () => {
    return getSections().map(section => (
      <Text>lol</Text>
    ));
  }

  render() {
    return (
      <SafeAreaView style={s.container}>
        <StatusBar
          barStyle="dark-content"
        />
        {/* Sections */}
        {this._renderSection()}
      </SafeAreaView>
    );
  }
}

export default withExploreRedux(ExploreTabScreen);
