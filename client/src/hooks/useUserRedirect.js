import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function useUserRedirect(login) {
  const loggedIn = useSelector((state) => state.login);
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) navigate(`/user-dashboard/${userData.username}`);
  }, [loggedIn, navigate]);
}

export default useUserRedirect;
