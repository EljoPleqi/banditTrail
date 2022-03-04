import React, { useEffect } from 'react';
import Subcriptions from './Subcriptions';
import axios from 'axios';
import { DownloadIcon } from '@heroicons/react/outline';
import { useSelector, useDispatch } from 'react-redux';
import { switchSub } from '../../../features/subscription';
const BillingsAndSubcriptions = ({ id, setSubModal }) => {
  const dispatch = useDispatch();
  const sub = useSelector((state) => state.subscription);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/sub/${id}`)
      .then((res) => dispatch(switchSub(res.data)));
  }, []);
  return (
    <>
      <div className="my-8 flex items-center justify-center gap-4 rounded-md bg-neutral-50 p-4 shadow-sm">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-blue-500 px-2 py-4 text-sm text-white hover:bg-blue-400 active:bg-blue-800 lg:flex-row">
          <DownloadIcon className="h-5 w-5" />
          <p>Download receipts</p>
        </div>
      </div>
      <div>
        <Subcriptions sub={sub} id={id} setSubModal={setSubModal} />
      </div>
    </>
  );
};

export default BillingsAndSubcriptions;
