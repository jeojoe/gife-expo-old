import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GlobalActions from '../redux/actions';

export default function withGlobalRedux(Component) {
  function mapStateToProps(state) {
    return {
      isLoading: state.isLoading,
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(GlobalActions, dispatch);
  }
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
