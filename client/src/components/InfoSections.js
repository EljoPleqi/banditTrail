import React from 'react';
import imgTrails from '../img/adrien-vajas-B0Ci76Ae_MQ-unsplash.jpg';
import imgBikes from '../img/tim-foster--yhZmznsmz0-unsplash.jpg';
import imgGear from '../img/ahmad-VYHastjZd-s-unsplash.jpg';
const InfoSections = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-neutral-100 cursor-pointer">
      <div
        style={{ backgroundImage: `url(${imgBikes})` }}
        className="bg-cover h-[44rem] w-50"
      ></div>
      <div
        style={{ backgroundImage: `url(${imgGear})` }}
        className="bg-cover h-[44rem] w-50"
      ></div>
      <div
        style={{ backgroundImage: `url(${imgTrails})` }}
        className="bg-cover h-[44rem] w-50"
      ></div>
    </div>
  );
};

export default InfoSections;
