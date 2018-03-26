import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ChallengeActions } from 'Challenge';

export default function withAuthRedux(Component) {
  function mapStateToProps(state) {
    return {
      isDoChallengeModalVisible: state.isDoChallengeModalVisible,
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ChallengeActions, dispatch);
  }
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
