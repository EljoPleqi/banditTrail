import React from 'react';
import AccountInformation from './AccountInformation';

const SettingsDashboard = ({ userData }) => {
  console.log(userData);
  return (
    <div className="flex h-screen flex-col items-center gap-4 bg-neutral-100 p-4">
      <div className="flex w-full items-center gap-20 border-b-2 border-neutral-300 text-sm">
        <h3 className="py-8 hover:border-b-2 hover:border-black">
          Account Informantion
        </h3>
        <h3 className="py-8 hover:border-b-2 hover:border-black">
          Payment Options
        </h3>
        <h3 className="py-8 hover:border-b-2 hover:border-black">
          Billings and subscriptions
        </h3>
        <h3 className="py-8 hover:border-b-2 hover:border-black">Appearence</h3>
      </div>
      <AccountInformation userData={userData} />
    </div>
  );
};

export default SettingsDashboard;
