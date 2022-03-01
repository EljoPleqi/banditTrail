import React from 'react';

const Popup = ({ message, type }) => {
  return <div className={type}>{message}</div>;
};

export default Popup;
