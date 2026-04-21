import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function GoogleLoginButton({ text, onSuccessPath = "/dashboard" }) {
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const idToken = credentialResponse?.credential;
      if (!idToken) {
        alert(`${text} failed`);
        return;
      }

      const res = await API.post("/api/auth/google_login", {
        token: idToken,
        id_token: idToken,
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
  };

  return (
    <div className="google-btn" style={{ padding: 0, border: "none", background: "transparent" }}>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => alert(`${text} failed`)}
      />
    </div>
  );
}

export default GoogleLoginButton;
