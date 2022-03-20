import React from 'react';
import highLightImg from '../../img/jaime-dantas-B2_T58LhG24-unsplash.webp';
import { Link } from 'react-router-dom';

const TrailHiglight = () => {
  return (
    <div className="lg:flex">
      <div className="bg-banditYellow-500 flex py-24 pl-8 pr-16  lg:max-w-[50%] ">
        <div className="flex flex-col text-black  md:gap-4">
          <h3 className="mb-8">This Week's Best in Trail</h3>
          <h2 className="text-4xl font-bold ">
            Blue Velvet - Whistler Mountain Bike Park
          </h2>
          <p className="">
            Have you ever ridden Whistler Mountain Bike Park in BC? If so, you
            know what a gem of a place it is. There are endless trails that
            snake through the mountains and forests, each one of them with its
            own personality. Some are technical and challenging while others are
            easier, more wide-open trails through the forest. Blue Velvet is one
            of those easier trails. It's not a beginners trail by any means but
            it's not too technical for intermediate riders to handle.
          </p>
          <Link to={'/featured-trail'} className="mt-8 ">
            <span className="  cursor-pointer   rounded-md border-2 border-solid border-black px-8 py-3 hover:bg-white ">
              Read More
            </span>
          </Link>
        </div>
      </div>
      <div className="hidden lg:inline-block">
        <img src={highLightImg} alt="" className="h-full object-cover" />
      </div>
    </div>
  );
};

export default TrailHiglight;
