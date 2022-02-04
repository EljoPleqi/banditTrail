import React from 'react';
import highLightImg from '../../img/jaime-dantas-B2_T58LhG24-unsplash.jpg';
import { Link } from 'react-router-dom';
let trailId = '/';
const TrailHiglight = () => {
  return (
    <div
      className="h-screen bg-cover bg-neutral-700 bg-blend-overlay flex flex-col items-center justify-center gap-4"
      style={{ backgroundImage: `url(${highLightImg})` }}
    >
      <h3 className="text-4xl text-white">This Week's Best in Trail</h3>
      <Link to={`data/${trailId}`}>
        <h2 className="text-6xl text-white font-bold cursor-pointer">
          Trail Title
        </h2>
      </Link>
    </div>
  );
};

export default TrailHiglight;
