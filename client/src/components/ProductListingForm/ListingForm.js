import { useState } from 'react';
import ApparelListingForm from './ApparelListingForm';
import BikeListingForm from './BikeListingForm';
import PartsListingForm from './PartsListingForm';
import { ArrowRightIcon } from '@heroicons/react/outline';

const ListingForm = () => {
  const [type, setType] = useState('');
  const [displayForm, setDisplayForm] = useState('');

  //

  return (
    <div className="flex flex-col items-center justify-center gap-16 lg:w-[50%]">
      {displayForm === '' && (
        <div className="flex flex-col gap-4">
          <label>What do you want to sell?</label>
          <select
            className="cursor-pointer"
            onChange={(e) => {
              console.log(e.target.value);
              setType(e.target.value);
            }}
          >
            <option value="" key="Select">
              Select
            </option>
            <option value="Bike" key="bike">
              Bike
            </option>
            <option value="Part" key="parts">
              Parts
            </option>
            <option value="Apparel" key="apparel">
              Apparel
            </option>
          </select>

          <button
            onClick={() => {
              setDisplayForm(type);
            }}
            className="box-border flex items-center justify-start gap-2 
               py-2  transition-all duration-500 hover:gap-4 hover:border-none hover:bg-neutral-700 hover:text-white active:translate-y-1"
          >
            Continue <ArrowRightIcon className="h-6 w-6" />
          </button>
        </div>
      )}
      {displayForm === 'Apparel' && (
        <ApparelListingForm setType={setType} type={type} />
      )}
      {displayForm === 'Bike' && (
        <BikeListingForm setType={setType} type={type} />
      )}
      {displayForm === 'Part' && (
        <PartsListingForm setType={setType} type={type} />
      )}
    </div>
  );
};

export default ListingForm;
