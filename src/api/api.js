

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:5000/api",  // backend URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add access token to headers
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access_token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default API;








import axios from "axios";

const API = axios.create({
  // baseURL: "http://127.0.0.1:5000/api",  
  baseURL: "https://learnsphere-08mn.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});


// Attach token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;












































// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:5000",
// });

// // 🔥 AUTO ADD TOKEN IN EVERY REQUEST
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("access_token");

//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }

//   return req;
// });

// export default API;




// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:5000",
// });

// // Attach JWT token automatically
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("access_token");

//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }

//   return req;
// });

// export default API;
















// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://127.0.0.1:5000/api"
// });

// export default instance;