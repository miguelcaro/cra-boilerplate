import React from 'react';
import PropTypes from 'prop-types';

const notifications = {
  error: {
    defaultTitle: 'Error!',
  },
  warning: {
    defaultTitle: 'Warning!',
  },
  success: {
    defaultTitle: 'Success!',
  },
};

const Notification = ({ type, message, closeToast }) => (
  <>
    <button
      className="notifications__close-btn text-base line-height-1 border-0 bg-transparent p-0"
      type="button"
      onClick={closeToast}
    >
      &times;
    </button>
    <h1 className="text-large mb-3">
      {type && notifications[type].defaultTitle}
    </h1>
    <p className="text-small mb-0">{message}</p>
  </>
);


Notification.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

Notification.defaultProps = {
  type: '',
  message: '',
};

export default Notification;
