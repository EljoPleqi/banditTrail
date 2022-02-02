import React, { useState, useEffect } from 'react';
import CustomerReviewCard from '../CustomerReviewCard';
import axios from 'axios';
import {
  UserCircleIcon,
  MailIcon,
  DeviceMobileIcon,
} from '@heroicons/react/outline';
const SellerProfile = ({ setSeller, seller }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const getSeller = async () => {
      try {
        await axios.get('https://randomuser.me/api/').then((res) => {
          setSeller(res.data.results[0]);
          setHasLoaded(!hasLoaded);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getSeller();
  }, []);

  return (
    <div className="grid grid-cols-cart gap-8 mt-24 pb-20 ">
      <div>
        <CustomerReviewCard seller={seller} />
      </div>
      <div>
        {hasLoaded ? (
          <div className="flex gap-4 ">
            <img
              src={seller.picture.large}
              alt=""
              className="rounded-full h-24 w-24"
            />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col ">
                {' '}
                <a href="/" className="cursor-pointer">
                  <p className="flex gap-2">
                    <UserCircleIcon className="h-6 w-6" />
                    {seller.login.username}
                  </p>
                </a>
                <a href={`mailto:${seller.email}`} className="cursor-pointer">
                  <p className="flex gap-2">
                    <MailIcon className="h-6 w-6" />
                    {seller.email}
                  </p>
                </a>
                <a href={`tel:${seller.cell}`} className="cursor-pointer">
                  <p className="flex gap-2">
                    <DeviceMobileIcon className="h-6 w-6" />
                    {seller.cell}
                  </p>
                </a>
              </div>
              <p className="max-w-sm">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Tellus
                donec eleifend fermentum nisi, vivamus class porta lacinia. Urna
                inceptos conubia ante montes sed non.
              </p>
            </div>
          </div>
        ) : (
          'LOADING....'
        )}
      </div>
    </div>
  );
};
export default SellerProfile;
