import React, { useContext } from 'react';
import { SubContext } from '../UserDashboard/SubContext';

const SwitchSubModal = () => {
  const sub = useContext(SubContext);

  console.log(sub);
  return (
    <div className="bg-white p-4">
      <p>
        You are about to {'i > 1 ? upgrade : downgrade'}your subscriptions to{' '}
        {'sub.name'}
      </p>
      <button> </button>
    </div>
  );
};

export default SwitchSubModal;
