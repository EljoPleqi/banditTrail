import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function useUserRedirect(login) {
  const loggedIn = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) navigate('/user-dashboard');
  }, [loggedIn, navigate]);
}

export default useUserRedirect;
