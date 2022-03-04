import React from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';

const SwitchSubModal = ({ setSubModal, setUpdateSub }) => {
  const sub = useSelector((state) => state.subscription);

  const userData = useSelector((state) => state.userData);

  const switchSubHandler = () => {
    axios
      .patch(`http://localhost:8000/users/sub/${userData.id}`, { sub })
      .then((res) => {});
    setSubModal(false);
  };

  return (
    <div className="flex flex-col gap-4 rounded-md bg-white p-24">
      <p>
        You are about to {sub.price > 9 ? 'upgrade' : ' downgrade'} your
        subscription to {sub.name}
      </p>
      <button
        onClick={switchSubHandler}
        className="rounded-md bg-green-600 py-2 px-4 text-white hover:bg-green-500 active:translate-y-1 active:bg-green-900"
      >
        {' '}
        {sub.price > 9.99 ? 'upgrade' : ' downgrade'}{' '}
      </button>
    </div>
  );
};

export default SwitchSubModal;
