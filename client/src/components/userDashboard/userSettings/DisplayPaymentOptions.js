import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DisplayPaymentOptions = ({ username }) => {
  const [paymentOptions, setPaymentOptions] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/users/${username.toLowerCase()}/payment_options`
      )
      .then((res) => setPaymentOptions(res.data));
  }, [username]);

  const displayPaymentOptions = paymentOptions.map((option, i) => {
    const displayCC = option.creditCardNumber
      .toString()
      .split('')
      .fill('*', 0, 12)
      .join('');

    console.log(displayCC);
    return (
      <div
        className="my-2 flex h-64 w-96 flex-col justify-center gap-4 rounded-md bg-gradient-to-r from-[#ebf4f5] to-[#b5c6e0] shadow-md transition hover:from-[#e9b7ce] hover:to-[#d3f3f1]"
        key={i}
      >
        <div className="mb-8">
          <p className="mx-12 text-lg">{option.cardHolder}</p>
          <p className="mx-12 text-lg">{displayCC}</p>
        </div>
        <div className="mx-12 flex justify-between gap-2">
          <div>
            <p className="text-sm font-thin">EXP DATE</p>
            <p>{option.ccExpData}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-thin">CVC Num</p>
            <p>{option.cvcNumber}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="flex gap-2 overflow-hidden ">{displayPaymentOptions}</div>
  );
};

export default DisplayPaymentOptions;
