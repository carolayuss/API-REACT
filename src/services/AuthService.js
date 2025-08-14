//componente de seguridad para el login
import axios from 'axios';
const API_URL = 'http://localhost:8080/api/clientes';

const login = (email, contrasena) =>
  axios.post(`${API_URL}/login`, { email, contrasena });

const logout = () => {

};

export default { login, logout };
