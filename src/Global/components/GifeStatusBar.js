import React from 'react';
import { StatusBar } from 'react-native';

import { Colors } from 'Global/constants';

const GifeStatusBar = ({ white, grey }) => {
  let barStyle = 'light-content';
  let bgColor = Colors.main;
  if (white) {
    barStyle = 'dark-content';
    bgColor = '#fff';
  } else if (grey) {
    barStyle = 'dark-content';
    bgColor = Colors.bgGrey;
  }

  return (
    <StatusBar
      barStyle={barStyle}
      backgroundColor={bgColor}
      animated
    />
  );
};

export default GifeStatusBar;
