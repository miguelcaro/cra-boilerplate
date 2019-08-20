import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);
