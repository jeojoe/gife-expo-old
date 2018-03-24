import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AuthActions } from 'Auth';

export default function withAuthRedux(Component) {
  function mapStateToProps(state) {
    return {
      isLoggedIn: state.isLoggedIn,
      invitationCode: state.invitationCode,
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(AuthActions, dispatch);
  }
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
