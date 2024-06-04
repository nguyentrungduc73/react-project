import React, { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTERS } from 'src/constants';

interface PrivateRouteProps extends PropsWithChildren {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if(!token){
        navigate(ROUTERS.SIGN_IN);
    }
  }, [token])
  
  return <>{children}</>;
};

export default PrivateRoute;
