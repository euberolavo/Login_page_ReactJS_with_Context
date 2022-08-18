import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

const HomePage = () => {
  const { logout, autenticated } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>{String(autenticated)}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
