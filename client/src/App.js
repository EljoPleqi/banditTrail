import React from 'react';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import F404 from './components/F404';
import LogIn from './pages/LogIn';
import ProductPage from './pages/ProductPage';
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/product-overview" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={F404} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
