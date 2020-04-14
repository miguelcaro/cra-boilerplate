import React from 'react';
import { toast } from 'react-toastify';
import Notification from 'components/Notification';

const showNotification = ({ type, message }) => {
  toast(
    <Notification type={type} message={message} />,
    {
      type,
      className: `notifications ${type}`,
      closeButton: false,
    },
  );
};

export default showNotification;
