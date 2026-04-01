import axios from "./axios";

export const createClass = (data) => axios.post("api/classroom/create", data);
export const regenerateKey = (id) => axios.put(`/classroom/get_room_key/${id}`);