import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

const SpinnerOverlay = props => (
  <Spinner
    visible={props.isLoading}
  />
);

SpinnerOverlay.propTypes = {
  isLoading: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
  };
}

export default connect(mapStateToProps)(SpinnerOverlay);
