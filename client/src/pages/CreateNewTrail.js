import React from 'react';
import CreateNewTrailForm from '../components/trails/CreateNewTrailForm';
import createTrailFromBG from '../img/tim-foster-8iNmC7ZJFnY-unsplash.jpg';

const CreateNewTrail = () => {
  return (
    <div>
      <div
        className=" bg-cover bg-bottom bg-neutral-700 bg-blend-overlay flex flex-col items-center justify-center gap-4 h-[36rem]"
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
