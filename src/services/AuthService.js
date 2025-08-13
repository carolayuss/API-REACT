import axios from 'axios';
const API_URL = 'http://localhost:8080/api/clientes';

const login = (email, contrasena) =>
  axios.post(`${API_URL}/login`, { email, contrasena });

const logout = () => {
  // Aquí podrías limpiar estado o token en localStorage
};

export default { login, logout };
