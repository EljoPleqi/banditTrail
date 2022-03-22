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
      <div className="my-8 flex items-center justify-between gap-4  bg-neutral-50 p-4 shadow-sm">
        <div>
          <p>Download your billing history</p>
        </div>
        <div
          className="hover:bg-banditYellow-500 active:bg-banditTrail-800 flex cursor-pointer flex-col items-center justify-center gap-2 border-2 border-black px-8
         py-3 text-sm lg:flex-row"
        >
          <DownloadIcon className="h-5 w-5" />
          <p>Download</p>
        </div>
      </div>
      <div>
        <Subcriptions sub={sub} id={id} setSubModal={setSubModal} />
      </div>
    </>
  );
};

export default BillingsAndSubcriptions;
