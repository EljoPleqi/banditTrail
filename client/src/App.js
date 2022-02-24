import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import LogIn from './pages/LogIn';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import PreHeader from './components/PreHeader';
import Footer from './components/Footer';
import ProductListingPage from './pages/ProductListingPage';
import Modal from './components/Modal/Modal';
import UserPublicProfile from './pages/UserPublicProfile';
import UserDashboard from './pages/UserDashboard';
import CreateNewTrail from './pages/CreateNewTrail';
import ProtectedRoutes from './ProtectedRoute';
import AboutUs from './pages/AboutUs';
import AllProducts from './pages/AllProducts';

function App() {
  const [listingModal, setListingModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  return (
    <>
      <Router>
        <PreHeader />
        <Header setSearchModal={setSearchModal} />
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
              path="/my-trails/add-new-trail"
              element={<CreateNewTrail />}
            />
            <Route
              path="/list-product/forSale"
              element={<ProductListingPage />}
            />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
