import React, { useRef, useEffect, useCallback } from 'react';
import SearchModal from './SearchModal';
import ListingModal from './ListingModal';

const Modal = ({ setListingModal, listingModal, setSearchModal, id }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setListingModal(false);
      setSearchModal(false);
    }
  };

  const keyClose = useCallback((e) => {
    if (e.key === 'Escape' && listingModal) {
      setListingModal(false);
      setSearchModal(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', keyClose);
    return () => document.removeEventListener('keydown', keyClose);
  }, [keyClose]);

  return (
    <div
      className="absolute flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-900 bg-opacity-40 shadow-lg backdrop-blur"
      ref={modalRef}
      onClick={closeModal}
    >
      {listingModal ? <ListingModal id={id} /> : <SearchModal />}
    </div>
  );
};

export default Modal;
