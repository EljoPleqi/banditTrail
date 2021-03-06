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

    axios
      .post(
        ` http://localhost:8000/users/${username.toLowerCase()}/payment_options`,
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
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-16 flex flex-col gap-4">
      {open && (
        <div className="flex flex-col gap-4 md:w-96">
          <div className="flex w-full flex-col gap-4 md:flex-row ">
            <div className="flex flex-col gap-2">
              <label>Credit Card Number</label>
              <input
                type="number"
                className="bg-neutral-50 py-4 md:px-24"
                onChange={(e) => setCcNumber(e.target.value)}
              />
              <DisplayPaymentSVG firstDigit={firstDigit} />
            </div>
            <div className="flex flex-col gap-2">
              <label>CVC code</label>
              <input
                type="number"
                className="bg-neutral-50 py-4"
                onChange={(e) => setCvcNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-2">
              <label>Card Holder's Name</label>
              <input
                type="text"
                className="bg-neutral-50 py-4 md:px-12"
                onChange={(e) => setCardHolder(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Exp..Date</label>
              <input
                type="date"
                className="bg-neutral-50 py-4"
                onChange={(e) => setCcExpDate(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {open ? (
        <button
          type="submit"
          className="hover:bg-banditYellow-500 active:bg-banditYellow-800 mt-4 place-self-end border-2 border-black  py-3 px-8"
        >
          Save Payment Method
        </button>
      ) : (
        <button
          className="hover:bg-banditYellow-500 active:bg-banditYellow-800 mt-4 flex items-center justify-center gap-2 place-self-start border-2 border-black  py-3 px-8"
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
