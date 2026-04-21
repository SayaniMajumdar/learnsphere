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
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import GoogleLoginButton from "../components/GoogleLoginButton";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^(?=(?:.*[A-Za-z]){3,})[A-Za-z_]+[0-9]*$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateUsername = (username) => {
    if (!username) return "Name must contain at least 3 letters. Digits are allowed only at the end, and underscores (_) are allowed. No spaces are permitted";
    if (username === "___") return "Name must contain at least 3 letters. Digits are allowed only at the end, and underscores (_) are allowed. No spaces are permitted";
    if (!usernameRegex.test(username)) return "Name must contain at least 3 letters. Digits are allowed only at the end, and underscores (_) are allowed. No spaces are permitted.";
    return "";
  };

  const validateEmailFormat = (email) => {
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Enter a valid email address";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (!passwordRegex.test(password)) {
      return "Password must be at least 6 characters and include a number";
    }
    return "";
  };

  const verifyEmailDeliverable = async (email) => {
    try {
      const res = await fetch(
        `https://api.eva.pingutil.com/email?email=${encodeURIComponent(email)}`
      );
      if (!res.ok) return null;
      const data = await res.json();
      const deliverable = data?.data?.deliverable;
      if (deliverable === false) return false;
      if (deliverable === true) return true;
      return null;
    } catch (err) {
      return null;
    }
  };

  const checkEmailExists = async (email) => {
    try {
      const res = await API.post("/check-email", { email });
      return res.data?.exists === true;
    } catch (err) {
      try {
        const fallbackRes = await API.post("/api/auth/check-email", { email });
        return fallbackRes.data?.exists === true;
      } catch (fallbackErr) {
        return false;
      }
    }
  };

  const validateBeforeSignup = async () => {
    const nextErrors = {
      username: validateUsername(form.username),
      email: validateEmailFormat(form.email),
      password: validatePassword(form.password)
    };

    if (nextErrors.email) {
      setErrors(nextErrors);
      return false;
    }

    const isDeliverable = await verifyEmailDeliverable(form.email);
    if (isDeliverable === false) {
      nextErrors.email = "Email is not deliverable";
    }

    if (!nextErrors.email) {
      const exists = await checkEmailExists(form.email);
      if (exists) {
        nextErrors.email = "Email already exists";
      }
    }

    setErrors(nextErrors);
    return !nextErrors.username && !nextErrors.email && !nextErrors.password;
  };

  const handleSignup = async () => {
    const isValid = await validateBeforeSignup();
    if (!isValid) return;

    try {
      const res = await API.post("/api/auth/signup", form);
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
            value={form.username}
            onChange={handleChange}
          />
        </div>
        {errors.username && (
          <p style={{ color: "#ef4444", fontSize: "12px", margin: "6px 0 10px 0" }}>
            {errors.username}
          </p>
        )}

        <div className="input-box">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && (
          <p style={{ color: "#ef4444", fontSize: "12px", margin: "6px 0 10px 0" }}>
            {errors.email}
          </p>
        )}

        <div className="input-box">
          <FaLock className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && (
          <p style={{ color: "#ef4444", fontSize: "12px", margin: "6px 0 10px 0" }}>
            {errors.password}
          </p>
        )}

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