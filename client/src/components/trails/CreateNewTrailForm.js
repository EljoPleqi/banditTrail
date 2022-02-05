import React, { useState } from 'react';
import axios from 'axios';

const CreateNewTrailForm = () => {
  const [featuredImage, setFeaturedImage] = useState();
  const [trailName, setTrailName] = useState('');
  const [trailDescription, setTrailDescription] = useState('');
  const [trailDuration, setTrailDuration] = useState(0);
  const [trailDistance, setTrailDistance] = useState(0);
  const [trailDifficulty, setTrailDifficulty] = useState('');

  //

  // const formValidation = yup.object().shape({
  //   trailName: yup.string().required(),
  //   trailDescription: yup.string().required(),
  //   trailDuration: yup.number().required(),
  //   traiDistance: yup.number().required(),
  //   trailDifficulty: yup.string().required(),
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const trail = {
      featuredImage,
      trailName,
      trailDescription,
      trailDuration,
      trailDistance,
      trailDifficulty,
    };
    console.log(trail);
    console.log(e);
    console.log(e.target);
    console.log(e.target.files);
  };

  //
  return (
    <div>
      <form
        className="flex flex-col gap-2 p-24"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <label>Enter Trail Name</label>
        <input
          type="text"
          value={trailName}
          onChange={(e) => setTrailName(e.target.value)}
        />
        <label>Enter Trail Description</label>
        <textarea
          required
          onChange={(e) => setTrailDescription(e.target.value)}
        />
        <label>Enter Trail Duration</label>
        <input
          type="number"
          required
          value={trailDuration}
          onChange={(e) => setTrailDuration(e.target.value)}
        ></input>
        <label>Enter Trail Distance</label>
        <input
          type="number"
          value={trailDistance}
          onChange={(e) => setTrailDistance(e.target.value)}
        />
        <label>Enter Trail Difficulty</label>
        <input
          type="text"
          value={trailDifficulty}
          onChange={(e) => setTrailDifficulty(e.target.value)}
        />
        <input
          type="file"
          name="featuredImage"
          onChange={(e) => {
            console.log(e.target);
            setFeaturedImage(e.target.files[0]);
          }}
        />
        <button
          type="submit"
          className="bg-[#606c38] hover:bg-[#283618] hover:px-16 hover:transition-all py-4 px-8 justify-end rounded-md text-white"
        >
          Create New Trail
        </button>
      </form>
    </div>
  );
};

export default CreateNewTrailForm;
