// import { useState } from "react";
// import axios from "../api/api";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("/auth/login", form);

//       localStorage.setItem("access_token", res.data.access_token);
//       localStorage.setItem("refresh_token", res.data.refresh_token);

//       alert("Login successful");
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h1>Login</h1>
//         <p>Welcome Back!</p>

//         <input
//           className="input"
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />

//         <input
//           className="input"
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />

//         <button className="btn" onClick={handleLogin}>
//           Log In
//         </button>

//         <p>
//           Don't have an account?{" "}
//           <span className="link" onClick={() => navigate("/signup")}>
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;





















// import { useState } from "react";
// import axios from "../api/api";
// import { useNavigate } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";

// function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("/auth/login", form);

//       localStorage.setItem("access_token", res.data.access_token);
//       localStorage.setItem("refresh_token", res.data.refresh_token);

//       alert("Login successful");
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h1>Login</h1>
//         <p>Welcome Back!</p>

//         <div className="input-box">
//           <FaEnvelope className="icon" />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//         </div>

//         <div className="input-box">
//           <FaLock className="icon" />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//         </div>

//         <p style={{ fontSize: "12px" }}>Forgot Password?</p>

//         <button className="btn" onClick={handleLogin}>Log In</button>

//         <div className="divider">or</div>

//         <button className="google-btn">
//           <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" />
//           Continue with Google
//         </button>

//         <p>
//           Don't have an account?{" "}
//           <span className="link" onClick={() => navigate("/signup")}>
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;




import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import GoogleLoginButton from "../components/GoogleLoginButton";
import "../App.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/api/auth/login", form);
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>
        <p>Welcome Back!</p>

        <div className="input-box">
          <FaEnvelope className="icon" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        </div>

        <div className="input-box">
          <FaLock className="icon" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        </div>

        <p className="forgot-pass">Forgot Password?</p>

        <button className="btn" onClick={handleLogin}>Log In</button>

        <div className="divider">or</div>

        <GoogleLoginButton text="Continue with Google" />

        <p>
          Don't have an account?{" "}
          <span className="link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;