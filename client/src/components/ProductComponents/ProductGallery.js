import React, { useEffect, useState } from 'react';

const ProductGallery = ({ gallery }) => {
  const [featuredImg, setFeaturedImg] = useState('');
  let displayImages = [];

  if (gallery) {
    const images = gallery.split('_');

    displayImages = images.map((image, i) => {
      return (
        <img
          src={` https://bandit-trail.herokuapp.com/${image}`}
          alt=""
          className="h-32 w-32  object-cover"
          key={i}
          onClick={getImg}
        />
      );
    });

    console.log(featuredImg);
  }

  useEffect(() => {
    setFeaturedImg(displayImages[displayImages.length - 1].props.src);
  }, [gallery]);

  function getImg(e) {
    console.log(e.target.src);
    setFeaturedImg(e.target.src);
  }

  return (
    <div className="mx-4 flex flex-col items-center gap-4">
      <div>
        <img
          src={`${featuredImg}`}
          alt=""
          className=" object-cover
              lg:h-[28rem]"
        />
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {displayImages && displayImages}
      </div>
    </div>
  );
};

export default ProductGallery;
