import React from 'react';
import trailImg from '../../img/julian-rayar-6zegJuw68o4-unsplash.jpg';

const TrailsCard = () => {
  const displayTrail = (
    <div className="cursor-pointer">
      <div>
        <img src={trailImg} alt="" className="object-cover" />
      </div>
      <div className="flex flex-col px-5 py-5 min-h-full bg-white">
        <div className="flex gap-4 pt-4 justify-between">
          <p>trail duration</p>
          <p>trail difficulty</p>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <h3>Trail Name</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
  return <div>{displayTrail}</div>;
};

export default TrailsCard;
