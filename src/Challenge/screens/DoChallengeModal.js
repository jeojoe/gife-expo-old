import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Modal, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
// WTF BUG!!
import withChallengeRedux from 'Global/hoc/withChallengeRedux';
import { Colors, GlobalPropTypes } from 'Global/constants';
import { Button } from 'Global/components';
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
        <Text style={s.subHeader}>ไปทำภารกิจนี้กัน!</Text>
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
          text="ไปหน้าทำภารกิจ"
          bgColor="white"
          style={{ marginBottom: 10 }}
        />
        <Button
          text="เลือกภารกิจอื่นต่อ"
          bgColor="pink"
          style={{ marginBottom: 10, borderColor: '#fff', borderWidth: 1 }}
        />
      </ScrollView>
    </LinearGradient>
  </Modal>
);

DoChallengeModal.propTypes = propTypes;

export default withChallengeRedux(DoChallengeModal);