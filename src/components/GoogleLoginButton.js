import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "../api/api";
import { useNavigate } from "react-router-dom";

function GoogleLoginButton({ text, onSuccessPath = "/dashboard" }) {
  const navigate = useNavigate();

  const handleGoogleAuth = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post("api/auth/google", {
          token: tokenResponse.access_token
        });
        localStorage.setItem("access_token", res.data.access_token);
        if (res.data.refresh_token) {
          localStorage.setItem("refresh_token", res.data.refresh_token);
        }
        alert(`${text} successful`);
        navigate(onSuccessPath);
      } catch (err) {
        alert(err.response?.data?.error || `${text} failed`);
      }
    },
    onError: () => {
      alert(`${text} failed`);
    }
  });

  return (
    <button className="google-btn" onClick={() => handleGoogleAuth()}>
      <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="google" />
      {text}
    </button>
  );
}

export default GoogleLoginButton;
