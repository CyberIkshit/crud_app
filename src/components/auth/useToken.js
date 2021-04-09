import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    if(tokenString!=null)
    return tokenString
  };
//   const getStatus = () => {
//     const LogInStatus = sessionStorage.getItem('isLoggedIn');
//     if(LogInStatus!=null)
//     return LogInStatus
//   };

  const [token, setToken] = useState(getToken());
//   const [isLoggedIn, statusUpdate] = useState(getStatus());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    sessionStorage.setItem('isLoggedIn', true);
    setToken(userToken);
    // statusUpdate(true);
  };
  return {
    setToken: saveToken,
    token,
    // statusUpdate: isLoggedIn,
  }
}