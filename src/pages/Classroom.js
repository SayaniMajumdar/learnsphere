import API from "../api/api";

export const createClass = (data) => API.post("/api/classroom/create", data);
export const regenerateKey = (id) => API.put(`/api/classroom/get_room_key/${id}`);