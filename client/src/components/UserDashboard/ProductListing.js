import React, { useEffect, useRef } from 'react';
import { useGetProductsByUserId } from '../../hooks/useGetProducts';
import Popup from '../notifications/Popup';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setNotification } from '../../features/notifications';

const ProductListing = ({
  editListingHandler,
  setListingId,
  userData: { username, id },
}) => {
  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const loggedUser = useSelector((state) => state.userData);
  const notification = useSelector((state) => state.notification);

  const userListings = useGetProductsByUserId(id);
  const currentListings = useRef();

  useEffect(() => {
    currentListings.current = userListings;
  }, [userListings]);

  if (
    userListings > 0 &&
    userListings.length > currentListings.current.length
  ) {
    dispatch(setNotification(true));
    setTimeout(() => {
      dispatch(setNotification(false));
    }, 3000);
  }

  const displayListings = userListings.map((listing, i) => {
    if (!listing.sold) {
      const productDescription = listing.productDescription
        .split('')
        .splice(0, 100)
        .join('');

      const deleteListing = () => {
        axios
          .delete(` http://localhost:8000/api/products/${listing.id}`)
          .then((res) => {
            dispatch(setNotification(true));
            setTimeout(() => {
              dispatch(setNotification(false));
            }, 3000);
          });
      };

      return (
        <div
          className="flex  flex-col border-b-2 border-neutral-50 py-4 font-light "
          key={i}
        >
          <div className="mt-12 flex justify-between">
            <img
              src={` http://localhost:8000/${listing.featuredImage}`}
              alt="listed product"
              className="h-full w-36"
            />

            <p className=" ">{listing.productTitle}</p>

            <p className="hidden w-64 shrink md:block">
              {productDescription}...
            </p>

            <p className="flex">{`${listing.price} ${listing.currency}`}</p>
          </div>
          {login &&
            username &&
            loggedUser.username.toLowerCase() === username.toLowerCase() && (
              <div className="flex gap-2 place-self-end">
                <span
                  className="hover:bg-banditYellow-500 active:bg-banditYellow-800 my-4 flex cursor-pointer  justify-center gap-2 border-2 border-black py-2 px-4
             text-sm font-normal "
                  onClick={(e) => {
                    editListingHandler();
                    setListingId(listing.id);
                  }}
                >
                  <PencilAltIcon className="h-5 w-5" /> Edit Listing
                </span>
                <span
                  className=" hover:bg-banditOrange-500 active:bg-banditOrange-800 my-4 flex  cursor-pointer justify-center gap-2 border-2 border-black py-2
             px-4 text-sm font-normal hover:text-white"
                  onClick={deleteListing}
                >
                  <TrashIcon className="h-5 w-5" /> Delete Listing
                </span>
              </div>
            )}
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <>
      {notification && (
        <Popup
          type={'bg-banditOrange-500 p-8 text-center text-white transition-all'}
          message={'Listing Removed 🆇'}
        />
      )}
      <div className="flex h-[50vh] flex-col">
        <div className=" flex justify-between border-b-2 border-neutral-100 bg-neutral-50 py-4 px-8 font-light">
          <h3>Listing Image</h3>
          <h3> Listing Title</h3>
          <h3>Listing Description</h3>
          <h3>Listing Price</h3>
        </div>
        <div className="overflow-auto">{displayListings}</div>
      </div>
    </>
  );
};
export default ProductListing;
