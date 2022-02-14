import React from 'react';
import modalImg from '../../img/lachlan-cruickshank-S9v_EPJfGys-unsplash.jpg';

const SearchModal = () => {
  return (
    <div className="bg-white">
      <div className="w-[32rem]">
        <img src={modalImg} alt="" className=" object-cover" />
      </div>
      <div className=" flex flex-col items-center  gap-4 rounded-md bg-white  pt-6 pb-12">
        <div className="flex flex-col items-center ">
          <h2 className="text-xl ">Great gear makes for great rides</h2>
          <h4 className="text-lg font-light">And it is all one search away </h4>
        </div>
        <input
          type="text"
          placeholder="search here"
          className="rounded-full bg-neutral-100 py-4 px-24"
        />
      </div>
    </div>
  );
};

export default SearchModal;
