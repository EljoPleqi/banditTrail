import React from 'react';
import highLightImg from '../../img/jaime-dantas-B2_T58LhG24-unsplash.jpg';
import { Link } from 'react-router-dom';
let trailId = '/';
const TrailHiglight = () => {
  return (
    <div
      className="my-4 flex h-screen flex-col items-center justify-center gap-4 bg-neutral-700 bg-cover bg-blend-overlay"
      style={{ backgroundImage: `url(${highLightImg})` }}
    >
      <h3 className="text-4xl text-white">This Week's Best in Trail</h3>
      <Link to={`data/${trailId}`}>
        <h2 className="cursor-pointer text-6xl font-bold text-white">
          Trail Title
        </h2>
      </Link>
    </div>
  );
};

export default TrailHiglight;
