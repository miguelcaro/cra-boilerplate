import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);
