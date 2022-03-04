import React, { useRef, useEffect, useCallback } from 'react';
import SearchModal from './SearchModal';
import ListingModal from './ListingModal';
import SwitchSubModal from './SwitchSubModal';

const Modal = (
  { listingModal, searchModal, setSubModal, switchSub, id },
  setListingModal,
  setSearchModal,
  setUpdateSub
) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      listingModal && setListingModal(false);
      searchModal && setSearchModal(false);
      switchSub && setSubModal(false);
    }
  };

  const keyClose = useCallback((e) => {
    if (e.key === 'Escape' && listingModal) {
      setListingModal(false);
      setSearchModal(false);
      setSubModal(false);
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
      {listingModal && <ListingModal id={id} />}
      {searchModal && <SearchModal />}
      {switchSub && <SwitchSubModal setSubModal={setSubModal} />}
    </div>
  );
};

export default Modal;
