import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import LoginScreen from '../auth/LoginScreen';
import SignupScreen from '../auth/SignupScreen';

const AuthenticationPage = () => {
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  const action = params.get('action');

  return action === 'login' ? <LoginScreen /> : <SignupScreen />;
};

export default AuthenticationPage;
