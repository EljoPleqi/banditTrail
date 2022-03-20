import React from 'react';
import img1 from '../img/lorenzo-cerato-1Mdth1sVDbg-unsplash.webp';
import img2 from '../img/jaime-dantas-B2_T58LhG24-unsplash.webp';
const TrailPage = () => {
  return (
    <div>
      <div>
        <iframe
          src="https://www.youtube.com/embed/l6DPb0szIXM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className=" w-full lg:h-screen"
        ></iframe>
      </div>
      <div className="mb-24 flex flex-col items-center gap-8 px-8 pt-12 lg:px-24">
        <h1 className="text-4xl font-bold">
          Blue Velvet // Whistler Mountain Bike Park
        </h1>

        <p className="text-lg lg:w-[75%]">
          Have you ever ridden Whistler Mountain Bike Park in BC? If so, you
          know what a gem of a place it is. There are endless trails that snake
          through the mountains and forests, each one of them with its own
          personality. Some are technical and challenging while others are
          easier, more wide-open trails through the forest. Blue Velvet is one
          of those easier trails. It's not a beginners trail by any means but
          it's not too technical for intermediate riders to handle.
        </p>

        <img src={img1} alt="" className="object-cover lg:w-[75%]" />
        <p className="text-lg lg:w-[75%]">
          Pharetra diam sit amet nisl suscipit adipiscing. Dolor purus non enim
          praesent. Posuere lorem ipsum dolor sit. Ultrices dui sapien eget mi.
          Facilisis sed odio morbi quis commodo odio aenean. Adipiscing
          tristique risus nec feugiat in fermentum. At consectetur lorem donec
          massa. Turpis egestas integer eget aliquet. Porttitor rhoncus dolor
          purus non enim praesent elementum facilisis leo. Commodo viverra
          maecenas accumsan lacus vel facilisis volutpat est velit. Mauris in
          aliquam sem fringilla ut. Id diam vel quam elementum pulvinar. Vitae
          elementum curabitur vitae nunc sed velit dignissim sodales ut. Vitae
          ultricies leo integer malesuada nunc vel risus. Rhoncus aenean vel
          elit scelerisque mauris. Dictum at tempor commodo ullamcorper a lacus
          vestibulum sed arcu. Porttitor eget dolor morbi non arcu risus quis
          varius quam. Faucibus nisl tincidunt eget nullam. Egestas sed sed
          risus pretium.
        </p>
        <q className="max-lg:w-[75%] text-3xl font-bold">
          Felis imperdiet proin fermentum leo.
        </q>
        <p className="text-lg lg:w-[75%]">
          Platea dictumst quisque sagittis purus sit amet. Habitasse platea
          dictumst quisque sagittis purus sit amet volutpat. Nisl purus in
          mollis nunc sed id semper. Vitae suscipit tellus mauris a diam
          maecenas sed. Viverra tellus in hac habitasse platea. Etiam erat velit
          scelerisque in dictum non consectetur a. Non arcu risus quis varius.
          Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.
          Arcu non odio euismod lacinia at. At consectetur lorem donec massa
          sapien faucibus. At erat pellentesque adipiscing commodo elit. Sed
          felis eget velit aliquet sagittis id consectetur. Convallis aenean et
          tortor at risus viverra adipiscing. Felis eget velit aliquet sagittis
          id. Et malesuada fames ac turpis. Ut consequat semper viverra nam
          libero justo. Dolor morbi non arcu risus. Nunc faucibus a pellentesque
          sit. Sed euismod nisi porta lorem.
        </p>

        <img src={img2} alt="" className="object-cover lg:w-[75%]" />

        <p className="text-lg lg:w-[75%]">
          Pharetra diam sit amet nisl suscipit adipiscing. Dolor purus non enim
          praesent. Posuere lorem ipsum dolor sit. Ultrices dui sapien eget mi.
          Facilisis sed odio morbi quis commodo odio aenean. Adipiscing
          tristique risus nec feugiat in fermentum. At consectetur lorem donec
          massa. Turpis egestas integer eget aliquet. Porttitor rhoncus dolor
          purus non enim praesent elementum facilisis leo. Commodo viverra
          maecenas accumsan lacus vel facilisis volutpat est velit. Mauris in
          aliquam sem fringilla ut. Id diam vel quam elementum pulvinar. Vitae
          elementum curabitur vitae nunc sed velit dignissim sodales ut. Vitae
          ultricies leo integer malesuada nunc vel risus. Rhoncus aenean vel
          elit scelerisque mauris. Dictum at tempor commodo ullamcorper a lacus
          vestibulum sed arcu. Porttitor eget dolor morbi non arcu risus quis
          varius quam. Faucibus nisl tincidunt eget nullam. Egestas sed sed
          risus pretium.
        </p>
        <q className="max-lg:w-[75%] text-3xl font-bold">
          Cursus turpis massa tincidunt dui ut. Turpis cursus in hac habitasse
          platea dictumst quisque sagittis purus. Magna ac placerat vestibulum
          lectus mauris.
        </q>
        <p className="text-lg lg:w-[75%]">
          Platea dictumst quisque sagittis purus sit amet. Habitasse platea
          dictumst quisque sagittis purus sit amet volutpat. Nisl purus in
          mollis nunc sed id semper. Vitae suscipit tellus mauris a diam
          maecenas sed. Viverra tellus in hac habitasse platea. Etiam erat velit
          scelerisque in dictum non consectetur a. Non arcu risus quis varius.
          Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi.
          Arcu non odio euismod lacinia at. At consectetur lorem donec massa
          sapien faucibus. At erat pellentesque adipiscing commodo elit. Sed
          felis eget velit aliquet sagittis id consectetur. Convallis aenean et
          tortor at risus viverra adipiscing. Felis eget velit aliquet sagittis
          id. Et malesuada fames ac turpis. Ut consequat semper viverra nam
          libero justo. Dolor morbi non arcu risus. Nunc faucibus a pellentesque
          sit. Sed euismod nisi porta lorem.
        </p>
      </div>
    </div>
  );
};

export default TrailPage;
