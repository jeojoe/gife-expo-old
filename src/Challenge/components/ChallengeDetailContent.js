import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import moment from 'moment';

import { PlaceCard } from 'Place';
import { getAllPlaces } from 'Global/dummyData';
import s from './ChallengeDetailContent.style';

const propTypes = {
  goalDescription: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  places: PropTypes.array, //eslint-disable-line
};

const ChallengeDetailContent = (props) => {
  const timeLeft = moment(props.endDate).fromNow();
  const periodString = `${moment(props.startDate).format()} + ${moment(props.endDate).format()}`;

  return (
    <View style={s.wrapper}>
      <Text style={s.header}>ภารกิจที่ต้องทำ</Text>
      <Text style={s.label}>ไปเที่ยวให้ครบ 5 สถานที่นี้</Text>

      <View style={s.timeLeftWrapper}>
        <View style={s.timeLeft}>
          {/* {timeLeft} */}
          <Text style={s.timeLeftText}>เหลือ 7 วัน</Text>
        </View>
        <View style={s.periodString}>
          {/* {periodString} */}
          <Text>14/03/2018 - 16/03/2018</Text>
        </View>
      </View>

      {getAllPlaces.map(p => (
        <View style={s.placeWrapper} key={p.place_id}>
          <PlaceCard
            jumbo
            title={p.place_name}
            locationLabel={`${p.place_district}, ${p.place_province}`}
            rating={p.place_total_rating}
            bannerImageUrl={p.place_picture}
          />
        </View>
      ))}
    </View>
  );
};

ChallengeDetailContent.propTypes = propTypes;

export default ChallengeDetailContent;
