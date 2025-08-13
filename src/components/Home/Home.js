import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div>
      <h2>Bienvenida, {user.nombre}!</h2>
      <button onClick={logout}>Cerrar sesión</button>
      {/* Aquí luego vendrá el carrito, etc. */}
    </div>
  );
}

export default Home;

