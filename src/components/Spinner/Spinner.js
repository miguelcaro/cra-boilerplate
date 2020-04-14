import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ pendingTasks, spinnerMessage }) => {
  if (!pendingTasks) return null;

  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="spinner-icon" />
        <div className="spinner-text">{spinnerMessage}</div>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  spinnerMessage: PropTypes.string.isRequired,
  pendingTasks: PropTypes.number.isRequired,
};

export default Spinner;
