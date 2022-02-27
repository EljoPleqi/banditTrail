import React from 'react';
import CreatePaymentOptions from './CreatePaymentOptions';
import DisplayPaymentOptions from './DisplayPaymentOptions';

const PaymentOption = ({ username, id }) => {
  return (
    <div>
      <div>
        <DisplayPaymentOptions username={username} />
      </div>
      <div>
        <CreatePaymentOptions username={username} id={id} />
      </div>
    </div>
  );
};

export default PaymentOption;
