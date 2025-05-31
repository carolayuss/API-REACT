import api from './api';

const getAll = () => api.get("/producto");
const get = (id) => api.get(`/producto/${id}`);
const create = (data) => api.post("/producto", data);
const update = (id, data) => api.put(`/producto/${id}`, data);
const remove = (id) => api.delete(`/producto/${id}`);

export default { getAll, get, create, update, remove };
