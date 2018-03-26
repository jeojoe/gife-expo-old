import PropTypes from 'prop-types';

export const AuthRedux = {
  isLoggedIn: PropTypes.bool,
  invitationCode: PropTypes.string,
  setInvitationCode: PropTypes.func,
  setIsLoggedIn: PropTypes.func,
};

export const GlobalRedux = {
  isLoading: PropTypes.bool,
};

export const Challenge = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  locationLabel: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
