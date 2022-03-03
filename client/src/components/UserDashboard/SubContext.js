import { createContext } from 'react';

export const SubContext = createContext({
  title: 'Green',
  price: 0,
  description: 'Lorem ipsum dolor sit amet',
  freeListings: 10,
  pricePerListing: 2.99,
});
