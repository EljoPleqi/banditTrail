import React, { useEffect, useState } from 'react';
import DisplayPaymentSVG from '../../UiElements/DisplayPaymentSVG';

const formSubmit = (e) => {
  e.preventDefault();
  console.log('HI 👋');
};

const PaymentOptions = () => {
  const [ccNumber, setCcNumber] = useState(0);
  const firstDigit = Array.from(ccNumber).shift();
  console.log(firstDigit);

  return (
    <form onSubmit={formSubmit} className="mt-16 flex flex-col gap-4">
      <div className="flex gap-4 ">
        <div className="flex flex-col gap-2">
          <label>First Name</label>
          <input type="text" className="py-4 px-12" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Last Name</label>
          <input type="text" className="py-4 px-12" />
        </div>
      </div>
      <div className="flex gap-4 ">
        <div className="flex flex-col gap-2">
          <label>Credit Card Number</label>
          <input
            type="number"
            className="py-4 px-24"
            onChange={(e) => setCcNumber(e.target.value)}
          />
          <DisplayPaymentSVG firstDigit={firstDigit} />
        </div>
        <div className="flex flex-col gap-2">
          <label>Exp..Date</label>
          <input type="date" className="py-4" />
        </div>
        <div className="flex flex-col gap-2">
          <label>CVC code</label>
          <input type="number" className="py-4" />
        </div>
      </div>

      <button className="mx-4 max-w-xs rounded-md bg-green-500 py-4 px-8 text-white hover:bg-green-400 active:bg-green-800">
        Save Payment Method
      </button>
    </form>
  );
};

export default PaymentOptions;
