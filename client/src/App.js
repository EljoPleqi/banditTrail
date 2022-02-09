import React from 'react';
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
import UserPublicProfile from './pages/UserPublicProfile';
import UserDashboard from './pages/UserDashboard';
import CreateNewTrail from './pages/CreateNewTrail';
import ProtectedRoutes from './ProtectedRoute';

function App() {
  return (
    <>
      <Router>
        <PreHeader />
        <Header></Header>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/username" element={<UserPublicProfile />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/user-dashboard" element={<UserDashboard />} />
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
