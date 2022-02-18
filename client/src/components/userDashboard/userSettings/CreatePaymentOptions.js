import axios from 'axios';
import React, { useState } from 'react';
import DisplayPaymentSVG from '../../UiElements/DisplayPaymentSVG';
import { PlusCircleIcon } from '@heroicons/react/outline';

const CreatePaymentOptions = ({ username, id }) => {
  const [ccNumber, setCcNumber] = useState(0);
  const [cardHolder, setCardHolder] = useState(0);
  const [ccExpDate, setCcExpDate] = useState(0);
  const [cvcNumber, setCvcNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const firstDigit = Array.from(ccNumber).shift();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username);

    // const card = new FormData();

    // card.append('creditCardNumber', ccNumber);
    // card.append('cardHolder', cardHolder);
    // card.append('cvcNumber', cvcNumber);
    // card.append('ccExpData', ccExpDate);
    // card.append('UserId', id);

    console.log(ccNumber, cardHolder);
    axios
      .post(
        `http://127.0.0.1:8000/users/${username.toLowerCase()}/payment_options`,
        {
          creditCardNumber: ccNumber,
          cardHolder: cardHolder,
          cvcNumber: cvcNumber,
          ccExpData: ccExpDate,
          UserId: id,
        }
      )

      .then((res) => {
        console.log(res.data);
        setOpen(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-16 flex flex-col gap-4">
      {open && (
        <div className="flex w-96 flex-col gap-4">
          <div className="flex w-full gap-4 ">
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
              <label>CVC code</label>
              <input
                type="number"
                className="py-4"
                onChange={(e) => setCvcNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full gap-4">
            <div className="flex flex-col gap-2">
              <label>Card Holder's Name</label>
              <input
                type="text"
                className="py-4 px-12"
                onChange={(e) => setCardHolder(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Exp..Date</label>
              <input
                type="date"
                className="py-4"
                onChange={(e) => setCcExpDate(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {open ? (
        <button
          type="submit"
          className="mx-4 max-w-xs rounded-md bg-green-500 py-4 px-8 text-white hover:bg-green-400 active:bg-green-800"
        >
          Save Payment Method
        </button>
      ) : (
        <button
          className="mx-4 max-w-xs rounded-md bg-green-500 py-4 px-8 text-white hover:bg-green-400 active:bg-green-800"
          onClick={() => setOpen(true)}
        >
          <PlusCircleIcon className="h-5 w-6" />
          Add Payment Method
        </button>
      )}
    </form>
  );
};

export default CreatePaymentOptions;
