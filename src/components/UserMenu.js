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

function UserMenu() {
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
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
          background: "linear-gradient(135deg, #a855f7, #6366f1)",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(99, 102, 241, 0.4)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
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
          color="#2c2c2cff"
        />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "55px",
            right: "0",
            background: "rgba(15, 23, 42, 0.95)",
            borderRadius: "12px",
            padding: "8px",
            width: "200px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
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
                color: "#f1f5f9",
                fontSize: "14px",
                fontWeight: "500",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")}
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
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            backdropFilter: "blur(5px)",
          }}
        >
          <div
            style={{
              background: "rgba(15, 23, 42, 0.95)",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(12px)",
              textAlign: "center",
              width: "320px",
              color: "#f1f5f9"
            }}
          >
            <h3 style={{ margin: "0 0 12px 0", fontSize: "20px", fontWeight: "600" }}>Confirm Logout</h3>
            <p style={{ margin: "0 0 24px 0", fontSize: "14px", color: "#94a3b8" }}>
              Are you sure you want to log out of your account?
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
              <button
                onClick={() => setShowLogoutModal(false)}
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: "transparent",
                  color: "#f1f5f9",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
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