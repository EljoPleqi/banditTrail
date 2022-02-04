import React from 'react';
import TrailHiglight from './TrailHiglight';
import TrailsCard from './TrailsCard';

const TrailsSection = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-8 p-8">
        <h2 className="text-4xl">User Trails</h2>
        <div className="flex items-center gap-8">
          <TrailsCard />
          <TrailsCard />
          <TrailsCard />
          <TrailsCard />
        </div>
      </div>
      <div>
        <TrailHiglight />
      </div>
    </>
  );
};

export default TrailsSection;
