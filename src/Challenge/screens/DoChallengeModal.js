import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
import { View, Text, Modal, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
// WTF BUG!!
import withChallengeRedux from 'Global/hoc/withChallengeRedux';
import { Colors, GlobalPropTypes } from 'Global/constants';
import { Button } from 'Global/components';
import resetNavigation from 'Global/libs/resetNavigation';
import ChallengeCardJumbo from '../components/ChallengeCardJumbo';

import s from './DoChallengeModal.style';

const propTypes = {
  isDoChallengeModalVisible: PropTypes.bool.isRequired,
  ...GlobalPropTypes.Challenge,
};

const DoChallengeModal = props => (
  <Modal
    visible={props.isDoChallengeModalVisible}
    animationType="slide"
    onRequestClose={() => console.log('close')}
    transparent
  >
    <LinearGradient
      colors={[Colors.mainGradientTopLeft, Colors.mainGradientBottomRight]}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
      style={[s.gradientBg]}
    >
      <ScrollView style={{ flex: 1 }} contentContainerStyle={s.wrapper}>
        <Text style={s.header}>LET&apos;S GIFE !</Text>
        <Text style={s.subHeader}>เริ่มทำภารกิจนี้ได้ที่หน้า ทำภารกิจ!</Text>
        <View style={{ marginBottom: 20 }}>
          <ChallengeCardJumbo
            title={props.title}
            picture={props.picture}
            endDate={props.endDate}
            locationLabel={props.locationLabel}
            rating={props.rating}
            disabled
          />
        </View>
        <Button
          text="เลือกภารกิจอื่นต่อ"
          bgColor="pink"
          style={{ marginBottom: 10, borderColor: '#fff', borderWidth: 1 }}
          onPress={() => {
            props.setDoChallengeModalVisible(false);
            setTimeout(() => {
              resetNavigation(props.navigation);
            }, 500);
          }}
        />
      </ScrollView>
    </LinearGradient>
  </Modal>
);

DoChallengeModal.propTypes = propTypes;


export default compose(
  withChallengeRedux,
  withNavigation,
)(DoChallengeModal);
