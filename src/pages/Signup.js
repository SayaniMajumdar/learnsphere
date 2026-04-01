// import { useState } from "react";
// import axios from "../api/api";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async () => {
//     try {
//       const res = await axios.post("/auth/signup", form);
//       alert(res.data.message);
//       navigate("/login");
//     } catch (err) {
//       alert(err.response?.data?.error || "Signup failed");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h1>Sign Up</h1>
//         <p>Create Your Account</p>

//         <input
//           className="input"
//           type="text"
//           name="username"
//           placeholder="Name"
//           onChange={handleChange}
//         />

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

//         <button className="btn" onClick={handleSignup}>
//           Sign Up
//         </button>

//         <p>
//           Already have an account?{" "}
//           <span className="link" onClick={() => navigate("/login")}>
//             Log In
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;














////////////////////////////////////////////////////////////





// import { useState } from "react";
// import axios from "../api/api";
// import { useNavigate } from "react-router-dom";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

// function Signup() {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const navigate = useNavigate();

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async () => {
//     try {
//       const res = await axios.post("/auth/signup", form);
//       alert(res.data.message);
//       navigate("/login");
//     } catch (err) {
//       alert(err.response?.data?.error || "Signup failed");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h1>Sign Up</h1>
//         <p>Create Your Account</p>

//         <div className="input-box">
//           <FaUser className="icon" />
//           <input type="text" name="username" placeholder="Name" onChange={handleChange} />
//         </div>

//         <div className="input-box">
//           <FaEnvelope className="icon" />
//           <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//         </div>

//         <div className="input-box">
//           <FaLock className="icon" />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//         </div>

//         <button className="btn" onClick={handleSignup}>Sign Up</button>

//         <div className="divider">or</div>

//         <button className="google-btn">
//           <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" />
//           Sign up with Google
//         </button>

//         <p>
//           Already have an account?{" "}
//           <span className="link" onClick={() => navigate("/login")}>
//             Log In
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;











import { useState } from "react";
import axios from "../api/api";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import GoogleLoginButton from "../components/GoogleLoginButton";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  // ✅ Regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  // ✅ Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Signup function with validation
  const handleSignup = async () => {
    // 🔴 Empty field check
    if (!form.username || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    // 🔴 Email validation
    if (!emailRegex.test(form.email)) {
      alert("Enter a valid email");
      return;
    }

    // 🔴 Password validation
    if (!passwordRegex.test(form.password)) {
      alert("Password must be at least 6 characters and include a number");
      return;
    }

    try {
      const res = await axios.post("api/auth/signup", form);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Sign Up</h1>
        <p>Create Your Account</p>

        <div className="input-box">
          <FaUser className="icon" />
          <input
            type="text"
            name="username"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <FaLock className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <button className="btn" onClick={handleSignup}>
          Sign Up
        </button>

        <div className="divider">or</div>

        <GoogleLoginButton text="Sign up with Google" />

        <p>
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;