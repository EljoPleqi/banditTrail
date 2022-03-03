import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoute';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import ProductListingPage from './pages/ProductListingPage';
import UserPublicProfile from './pages/UserPublicProfile';
import UserDashboard from './pages/UserDashboard';
import AboutUs from './pages/AboutUs';
import AllProducts from './pages/AllProducts';
import TrailPage from './pages/TrailPage';

import PreHeader from './components/PreHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal/Modal';

import { SubContext } from './components/UserDashboard/SubContext';

function App() {
  const [listingModal, setListingModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  return (
    <>
      <Router>
        <PreHeader />
        <Header setSearchModal={setSearchModal} searchModal={searchModal} />
        {searchModal && (
          <Modal
            setListingModal={setListingModal}
            listingModal={listingModal}
            searchModal={searchModal}
            setSearchModal={setSearchModal}
          />
        )}

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="products/all-products" element={<AllProducts />} />
          <Route path="/users/:username" element={<UserPublicProfile />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>

        <SubContext.Provider value={'sub context'}>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route
                path="/user-dashboard/:username"
                element={
                  <UserDashboard
                    setListingModal={setListingModal}
                    listingModal={listingModal}
                    setSearchModal={setSearchModal}
                  />
                }
              />
              <Route
                path="/list-product/forSale"
                element={<ProductListingPage />}
              />
            </Route>
          </Routes>
        </SubContext.Provider>

        <Routes>
          <Route path="/featured-trail" element={<TrailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
