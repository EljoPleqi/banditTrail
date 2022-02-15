import React from 'react';
import CreateNewTrailForm from '../components/Trails/CreateNewTrailForm';
import createTrailFromBG from '../img/tim-foster-8iNmC7ZJFnY-unsplash.jpg';

const CreateNewTrail = () => {
  return (
    <div>
      <div
        className=" flex h-[36rem] flex-col items-center justify-center gap-4 bg-neutral-700 bg-cover bg-bottom bg-blend-overlay"
        style={{ backgroundImage: `url(${createTrailFromBG})` }}
      >
        <h1 className="text-4xl text-white">
          Share your trails, grow your community
        </h1>
      </div>
      ;
      <CreateNewTrailForm />
    </div>
  );
};

export default CreateNewTrail;
