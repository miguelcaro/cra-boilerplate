import { connect } from 'react-redux';
import { exampleAction } from 'actions/example';
import Homepage from './Homepage';


const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { exampleAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);
