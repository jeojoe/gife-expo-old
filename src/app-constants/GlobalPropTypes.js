import PropTypes from 'prop-types';

export const AuthRedux = {
  isLoggedIn: PropTypes.bool,
  invitationCode: PropTypes.string,
  setInvitationCode: PropTypes.func,
  setIsLoggedIn: PropTypes.func,
};
