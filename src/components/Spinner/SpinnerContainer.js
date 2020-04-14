import { connect } from 'react-redux';
import Spinner from './Spinner';

const mapStateToProps = ({ app: { spinnerMessage, pendingTasks } }) => (
  { pendingTasks, spinnerMessage }
);

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Spinner);
