import React from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';

import logoSmall from 'Global/assets/images/logo-small.png';
import logoSmallWhite from 'Global/assets/images/logo-small-white.png';
import logoSmallBw from 'Global/assets/images/logo-small-bw.png';

const propTypes = {
  type: PropTypes.oneOf(['grey', 'white', 'normal']),
  size: PropTypes.number.isRequired,
  style: View.propTypes.style,
};

const Logo = (props) => {
  let source = logoSmall;
  let size = 26;

  if (props.type === 'grey') {
    source = logoSmallBw;
  } else if (props.type === 'white') {
    source = logoSmallWhite;
  }

  if (props.size) size = props.size; // eslint-disable-line

  return (
    <Image
      source={source}
      style={[{ width: size, height: size }, props.style]}
    />
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = {
  type: 'normal',
  style: null,
};

export default Logo;
