import React, { useState } from 'react';
import AccountInformation from './AccountInformation';
import PaymentOptions from './PaymentOption';
import Appearence from './Appearence';
import BillingsAndSubcriptions from './BillingsAndSubcriptions';
import {
  UserCircleIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/outline';

const SettingsDashboard = ({ userData }) => {
  const [toggle, setToggle] = useState(0);
  return (
    <div className="flex h-screen  flex-col gap-4 bg-neutral-100  p-4">
      <div className="flex w-full items-center text-sm">
        <h3
          className={
            toggle === 0
              ? ' border-b-2 border-solid border-black px-4 py-8'
              : 'border-b-2 border-neutral-200 px-4 py-8 hover:cursor-pointer hover:border-black active:bg-neutral-300 '
          }
          onClick={() => setToggle(0)}
        >
          <span className="flex items-center justify-center gap-2">
            <UserCircleIcon className="h-5 w-5" /> Account Informantion
          </span>
        </h3>
        <h3
          className={
            toggle === 1
              ? ' border-b-2 border-solid border-black  px-4 py-8'
              : 'border-b-2 border-neutral-200 px-4 py-8 hover:cursor-pointer hover:border-black active:bg-neutral-300'
          }
          onClick={() => setToggle(1)}
        >
          <span className="flex items-center justify-center gap-2">
            <CreditCardIcon className="h-5 w-5" /> Payment Options
          </span>
        </h3>
        <h3
          className={
            toggle === 2
              ? ' border-b-2 border-solid border-black  px-4 py-8'
              : 'border-b-2 border-neutral-200 px-4 py-8 hover:cursor-pointer hover:border-black active:bg-neutral-300'
          }
          onClick={() => setToggle(2)}
        >
          <span className="flex items-center justify-center gap-2">
            <CurrencyDollarIcon className="h-5 w-5" /> Billings and
            subscriptions
          </span>
        </h3>
        <h3
          className={
            toggle === 3
              ? ' border-b-2 border-solid border-black  px-4 py-8'
              : 'border-b-2 border-neutral-200 px-4 py-8 hover:cursor-pointer hover:border-black active:bg-neutral-300'
          }
          onClick={() => setToggle(3)}
        >
          <span className="flex items-center justify-center gap-2">
            <SunIcon className="h-5 w-5" />
            <span>/</span> <MoonIcon className="h-5 w-5" /> Appearence
          </span>
        </h3>
      </div>

      {toggle === 0 && <AccountInformation userData={userData} />}
      {toggle === 1 && (
        <PaymentOptions username={userData.username} id={userData.id} />
      )}
      {toggle === 2 && <BillingsAndSubcriptions />}
      {toggle === 3 && <Appearence />}
    </div>
  );
};

export default SettingsDashboard;
