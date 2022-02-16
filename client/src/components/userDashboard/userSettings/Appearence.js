import React, { useState } from 'react';

const Appearence = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="m-4 flex gap-2">
      <div
        className={`flex h-7 w-14 cursor-pointer items-center rounded-full bg-gray-300 p-1 ${
          toggle && 'transform bg-slate-900'
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={`h-5 w-5 rounded-full bg-white shadow-md ${
            toggle && 'translate-x-7 transform'
          } `}
        ></div>
      </div>
      <div>Activate dark mode</div>
    </div>
  );
};

export default Appearence;
