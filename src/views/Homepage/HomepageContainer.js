import { connect } from 'react-redux';
import Homepage from './Homepage';

import { exampleAction } from 'actions/example';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { exampleAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
