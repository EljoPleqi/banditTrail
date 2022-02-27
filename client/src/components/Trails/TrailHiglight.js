import React from 'react';
import highLightImg from '../../img/jaime-dantas-B2_T58LhG24-unsplash.jpg';
import { Link } from 'react-router-dom';

const TrailHiglight = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-6 bg-neutral-700 bg-cover bg-center py-40 bg-blend-overlay lg:h-screen lg:gap-24"
      style={{ backgroundImage: `url(${highLightImg})` }}
    >
      <h3 className="text-white md:text-3xl">This Week's Best in Trail</h3>
      <div className="flex flex-col items-center md:gap-2">
        <h2 className="text-4xl font-bold text-white md:text-6xl">
          Blue Velvet
        </h2>
        <p className=" tracking-wider text-white md:text-lg">
          Whistler Mountain Bike Park
        </p>
      </div>
      <Link to={'/featured-trail'}>
        <span className=" cursor-pointer rounded-md bg-green-500 px-8  py-4 text-white hover:bg-green-400 active:bg-green-800 md:px-12">
          Read More
        </span>
      </Link>
    </div>
  );
};

export default TrailHiglight;
