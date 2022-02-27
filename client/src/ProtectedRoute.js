import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoutes = () => {
  const location = useLocation('/user-dashboard');
  const loggedIn = useSelector((state) => state.login);
  return (
    <>
      {loggedIn ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      )}
    </>
  );
};

export default ProtectedRoutes;
