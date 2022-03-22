import React, { useEffect, useState } from 'react';

const ProductGallery = ({ gallery }) => {
  const [featuredImg, setFeaturedImg] = useState('');
  let displayImages = [];

  if (gallery) {
    const images = gallery.split('_');

    displayImages = images.map((image, i) => {
      return (
        <img
          src={` http://localhost:8000/${image}`}
          alt=""
          className="h-32 w-32  object-cover"
          key={i}
          onClick={getImg}
        />
      );
    });
  }

  useEffect(() => {
    if (gallery) {
      const images = gallery.split('_');
      console.log(images);
      setFeaturedImg(`http://localhost:8000/${images[images.length - 1]}`);
    }
  }, [gallery]);

  function getImg(e) {
    const img = e.target.src;

    console.log(e.target.src.length);
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
