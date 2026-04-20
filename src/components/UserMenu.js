// import { useState } from "react";

// function UserMenu() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div style={{ position: "relative" }}>
//       {/* USER ICON */}
//       <div
//         onClick={() => setOpen(!open)}
//         style={{
//           width: "40px",
//           height: "40px",
//           borderRadius: "50%",
//           background: "white",
//           cursor: "pointer",
//         }}
//       ></div>

//       {/* DROPDOWN */}
//       {open && (
//         <div
//           style={{
//             position: "absolute",
//             top: "50px",
//             right: "0",
//             background: "#2c2c54",
//             borderRadius: "10px",
//             padding: "10px",
//             width: "180px",
//           }}
//         >
//           <p>👤 User Info</p>
//           <p>🔑 Change Password</p>
//           <p>🚪 Logout</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UserMenu;




import { useState } from "react";
import { MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function UserMenu() {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await API.post("/api/auth/logout");
    } catch (err) {
      console.error("Logout API failed:", err.response?.data || err);
    } finally {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      navigate("/login");
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {/* USER ICON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #3b82f6, #2563eb)",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(37, 99, 235, 0.35)",
          border: "2px solid #dbeafe",
          transition: "transform 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <MdPerson
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: " 50%"
          }}
          color="#eff6ff"
        />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "55px",
            right: "0",
            background: "rgba(255, 255, 255, 0.98)",
            borderRadius: "12px",
            padding: "8px",
            width: "200px",
            border: "1px solid #dbeafe",
            boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.18)",
            backdropFilter: "blur(12px)",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {["👤 User Info", "🔑 Change Password", "🚪 Logout"].map((text) => (
            <div
              key={text}
              onClick={() => {
                if (text === "🚪 Logout") {
                  setShowLogoutModal(true);
                  setOpen(false);
                } else {
                  setOpen(false);
                }
              }}
              style={{
                padding: "10px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                color: "#1e3a8a",
                fontSize: "14px",
                fontWeight: "500",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#eff6ff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {text}
            </div>
          ))}
        </div>
      )}

      {/* LOGOUT CONFIRMATION MODAL */}
      {showLogoutModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(15, 23, 42, 0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            backdropFilter: "blur(5px)",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.98)",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid #dbeafe",
              boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.18)",
              backdropFilter: "blur(12px)",
              textAlign: "center",
              width: "320px",
              color: "#0f172a"
            }}
          >
            <h3 style={{ margin: "0 0 12px 0", fontSize: "20px", fontWeight: "600" }}>Confirm Logout</h3>
            <p style={{ margin: "0 0 24px 0", fontSize: "14px", color: "#64748b" }}>
              Are you sure you want to log out of your account?
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
              <button
                onClick={() => setShowLogoutModal(false)}
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid #bfdbfe",
                  background: "#ffffff",
                  color: "#1e3a8a",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#eff6ff")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#ffffff")}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowLogoutModal(false);
                  handleLogout();
                }}
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "none",
                  background: "linear-gradient(135deg, #ef4444, #dc2626)",
                  boxShadow: "0 4px 10px rgba(239, 68, 68, 0.3)",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "transform 0.2s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;