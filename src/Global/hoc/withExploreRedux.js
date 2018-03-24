import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ExploreActions } from 'Explore';

export default function withExploreRedux(Component) {
  function mapStateToProps(state) {
    return {
      test: state.test,
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ExploreActions, dispatch);
  }
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
