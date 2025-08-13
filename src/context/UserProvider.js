import React, { useState } from 'react';
import { UserContext } from './UserContext';
import { useEffect } from 'react';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
  const registrado = localStorage.getItem('user');
  if (registrado) setUser(JSON.parse(registrado));
}, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};



