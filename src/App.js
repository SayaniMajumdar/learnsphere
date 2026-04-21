// // src/App.js
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// function App() {
//   return (
//     <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />

//           {/* Private Route */}
//           <Route
//             path="/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
          
//           {/* Default route */}
//           <Route path="*" element={<Login />} />
//         </Routes>
//       </Router>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;




































import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID =
  process.env.REACT_APP_GOOGLE_CLIENT_ID ||
  "224783415243-ock862mbpci2597gup76pvq0jq0l6anv.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;