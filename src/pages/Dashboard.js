// import { useEffect, useState } from "react";
// import API from "../api/api";

// function Dashboard() {
//   const [classrooms, setClassrooms] = useState([]);

//   useEffect(() => {
//     fetchClassrooms();
//   }, []);

//   const fetchClassrooms = async () => {
//     try {
//       const res = await API.get("/classroom/get_all"); // backend e jodi get_all API thake
//       setClassrooms(res.data.classrooms || []);
//     } catch (err) {
//       console.error(err.response?.data || err);
//       alert("Failed to fetch classrooms");
//     }
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <h3>Your Classrooms</h3>
//       {classrooms.length === 0 ? (
//         <p>No classrooms available.</p>
//       ) : (
//         <ul>
//           {classrooms.map((room) => (
//             <li key={room.id}>
//               {room.name} - {room.room_key}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Dashboard;








// import { useEffect, useState } from "react";
// import API from "../api/api";
// import "../styles/Dashboard.css";

// function Dashboard() {
//   const [created, setCreated] = useState([]);
//   const [joined, setJoined] = useState([]);

//   useEffect(() => {
//     fetchClassrooms();
//   }, []);

//   const fetchClassrooms = async () => {
//     try {
//       const res = await API.get("/classroom/get_all");

//       setCreated(res.data.created || []);
//       setJoined(res.data.joined || []);
//     } catch (err) {
//       console.error(err.response?.data || err);
//       alert("Failed to fetch classrooms");
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h1>CampusHub Dashboard</h1>

//       <div className="actions">
//         <button className="btn">+ Create New Class</button>
//         <button className="btn">Join New Class</button>
//       </div>

//       <div className="grid">
//         {/* CREATED */}
//         <div className="box">
//           <h2>My Created Classes</h2>

//           {created.length === 0 ? (
//             <p>No classes</p>
//           ) : (
//             created.map((room) => (
//               <div className="card" key={room.id}>
//                 <div>
//                   <h3>{room.name}</h3>
//                   <p>{room.description}</p>
//                 </div>

//                 <div className="right">
//                   <p>Room Key</p>
//                   <h4>{room.room_key}</h4>
//                   <button>Copy</button>
//                   <button className="danger">Delete</button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* JOINED */}
//         <div className="box">
//           <h2>Joined Classes</h2>

//           {joined.length === 0 ? (
//             <p>No joined classes</p>
//           ) : (
//             joined.map((room) => (
//               <div className="card" key={room.id}>
//                 <div>
//                   <h3>{room.name}</h3>
//                   <p>{room.description}</p>
//                 </div>

//                 <div className="right">
//                   <p>Room Key</p>
//                   <h4>{room.room_key}</h4>
//                   <button>Copy</button>
//                   <button className="leave">Leave</button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


















// import UserMenu from "../components/UserMenu";
// import { useEffect, useState } from "react";

// import API from "../api/api";
// import "../styles/Dashboard.css";


// function Dashboard() {
//   const [created, setCreated] = useState([]);
//   const [joined, setJoined] = useState([]);

//   useEffect(() => {
//     fetchClassrooms();
//   }, []);

//   const fetchClassrooms = async () => {
//     try {
//       const res = await API.get("/classroom/get_all");

//       setCreated(res.data.created || []);
//       setJoined(res.data.joined || []);
//     } catch (err) {
//       console.error(err.response?.data || err);
//       alert("Failed to fetch classrooms");
//     }
//   };

//   const copyKey = (key) => {
//     navigator.clipboard.writeText(key);
//     alert("Copied!");
//   };

//   return (
//     <div className="dashboard">
//       <h1>CampusHub Dashboard</h1>

//       {/* <div className="actions">
//         <button className="btn">+ Create New Class</button>
//         <button className="btn">Join New Class</button>
//       </div> */}

//       <div className="actions">
//         <button className="btn">➕ Create New Class</button>
//         <button className="btn">➡️ Join New Class</button>
//       </div>

//       <div className="grid">
//         {/* CREATED */}
//         <div className="box">
//           <h2>My Created Classes</h2>

//           {created.length === 0 ? (
//             <p>No classes</p>
//           ) : (
//             created.map((room) => (
//               <div className="card" key={room.id}>
//                 <div>
//                   <h3>{room.name}</h3>
//                   <p>{room.description}</p>
//                 </div>

//                 <div className="right">
//                   <p>Room Key</p>
//                   <h4>{room.room_key}</h4>
//                   <button onClick={() => copyKey(room.room_key)}>
//                     Copy
//                   </button>
//                   <button className="danger">Delete</button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* JOINED */}
//         <div className="box">
//           <h2>Joined Classes</h2>

//           {joined.length === 0 ? (
//             <p>No joined classes</p>
//           ) : (
//             joined.map((room) => (
//               <div className="card" key={room.id}>
//                 <div>
//                   <h3>{room.name}</h3>
//                   <p>{room.description}</p>
//                 </div>

//                 <div className="right">
//                   <p>Room Key</p>
//                   <h4>{room.room_key}</h4>
//                   <button onClick={() => copyKey(room.room_key)}>
//                     Copy
//                   </button>
//                   <button className="leave">Leave</button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;












// import UserMenu from "../components/UserMenu";
// import { useEffect, useState } from "react";

// import API from "../api/api";
// import "../styles/Dashboard.css";


// function Dashboard() {
//   const [created, setCreated] = useState([]);
//   const [joined, setJoined] = useState([]);

//   // Modals state
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [newClassName, setNewClassName] = useState("");
//   const [newClassDesc, setNewClassDesc] = useState("");

//   const [showJoinModal, setShowJoinModal] = useState(false);
//   const [joinRoomKey, setJoinRoomKey] = useState("");

//   useEffect(() => {
//     fetchClassrooms();
//   }, []);

//   const fetchClassrooms = async () => {
//     try {
//       const res = await API.post("api/classroom/create");
      
//       setCreated(res.data.created || []);
//       setJoined(res.data.joined || []);
//     } catch (err) {
//       console.error(err.response?.data || err);
//       alert("Failed to fetch classrooms");
//     }
//   };

//   const copyKey = (key) => {
//     navigator.clipboard.writeText(key);
//     alert("Copied!");
//   };

//   const handleCreate = async () => {
//     try {
//       await API.post("/classroom/create", { name: newClassName, description: newClassDesc });
//       setShowCreateModal(false);
//       setNewClassName("");
//       setNewClassDesc("");
//       fetchClassrooms();
//     } catch (err) {
//       alert(err.response?.data?.error || "Failed to create class");
//     }
//   };

//   const handleJoin = async () => {
//     try {
//       await API.post("/classroom/join", { room_key: joinRoomKey });
//       setShowJoinModal(false);
//       setJoinRoomKey("");
//       fetchClassrooms();
//     } catch (err) {
//       alert(err.response?.data?.error || "Failed to join class");
//     }
//   };

//   return (
//     <div className="dashboard">
//       <div className="topbar">
//         <h1 className="title">CampusHub</h1>

//         <div className="actions">
//           <button className="btn primary" onClick={() => setShowCreateModal(true)}>Create</button>
//           <button className="btn secondary" onClick={() => setShowJoinModal(true)}>Join</button>
//           <UserMenu />
//         </div>
//       </div>

//       <div className="grid">
//         <div className="box">
//           <h2>My Created Classes</h2>

//           {created.length === 0 ? (
//             <p className="empty">No classes yet</p>
//           ) : (
//             created.map((room) => (
//               <div className="card" key={room.id}>
//                 <div>
//                   <h3>{room.name}</h3>
//                   <p>{room.description}</p>
//                 </div>

//                 <div className="right">
//                   <span className="label">Room Key</span>
//                   <h4>{room.room_key}</h4>
//                   <button onClick={() => copyKey(room.room_key)}>Copy</button>
//                   <button className="danger">Delete</button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="box">
//           <h2>Joined Classes</h2>

//           {joined.length === 0 ? (
//             <p className="empty">No joined classes</p>
//           ) : (
//             joined.map((room) => (
//               <div className="card" key={room.id}>
//                 <div>
//                   <h3>{room.name}</h3>
//                   <p>{room.description}</p>
//                 </div>

//                 <div className="right">
//                   <span className="label">Room Key</span>
//                   <h4>{room.room_key}</h4>
//                   <button onClick={() => copyKey(room.room_key)}>Copy</button>
//                   <button className="leave">Leave</button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* CREATE MODAL */}
//       {showCreateModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>Create New Class</h2>
//             <input 
//               type="text" 
//               placeholder="Class Name" 
//               value={newClassName} 
//               onChange={(e) => setNewClassName(e.target.value)} 
//             />
//             <input 
//               type="text" 
//               placeholder="Class Description" 
//               value={newClassDesc} 
//               onChange={(e) => setNewClassDesc(e.target.value)} 
//             />
//             <div className="modal-buttons">
//               <button className="btn secondary" onClick={() => setShowCreateModal(false)}>Cancel</button>
//               <button className="btn primary" onClick={handleCreate}>Create</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* JOIN MODAL */}
//       {showJoinModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>Join a Class</h2>
//             <input 
//               type="text" 
//               placeholder="Room Key" 
//               value={joinRoomKey} 
//               onChange={(e) => setJoinRoomKey(e.target.value)} 
//             />
//             <div className="modal-buttons">
//               <button className="btn secondary" onClick={() => setShowJoinModal(false)}>Cancel</button>
//               <button className="btn primary" onClick={handleJoin}>Join</button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default Dashboard;



































import UserMenu from "../components/UserMenu";
import { useEffect, useState } from "react";

import API from "../api/api";
import "../styles/Dashboard.css";

function Dashboard() {
  const [created, setCreated] = useState([]);
  const [joined, setJoined] = useState([]);

  // Modals state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newClassName, setNewClassName] = useState("");
  const [newClassDesc, setNewClassDesc] = useState("");

  const [showJoinModal, setShowJoinModal] = useState(false);
  const [joinRoomKey, setJoinRoomKey] = useState("");

  useEffect(() => {
    fetchClassrooms();
  }, []);

  // ✅ FIXED FETCH
  const fetchClassrooms = async () => {
    try {
      const res = await API.get("/api/classroom/my_classrooms");

      setCreated(res.data.created_classrooms || []);
      setJoined(res.data.joined_classrooms || []);
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Failed to fetch classrooms");
    }
  };

  const copyKey = (key) => {
    navigator.clipboard.writeText(key);
    alert("Copied!");
  };

  // ✅ CREATE CLASS
  const handleCreate = async () => {
    try {
      await API.post("/api/classroom/create", {
        name: newClassName,
        description: newClassDesc,
      });

      setShowCreateModal(false);
      setNewClassName("");
      setNewClassDesc("");
      fetchClassrooms();
    } catch (err) {
      alert(err.response?.data?.msg || err.response?.data?.error || "Failed to create class");
    }
  };

  // ✅ JOIN CLASS
  const handleJoin = async () => {
    try {
      await API.post("/api/classroom/join", {
        room_key: joinRoomKey,
      });

      setShowJoinModal(false);
      setJoinRoomKey("");
      fetchClassrooms();
    } catch (err) {
      alert(err.response?.data?.msg || err.response?.data?.error || "Failed to join class");
    }
  };

  // ✅ DELETE CLASS
  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/classroom/delete/${id}`);
      fetchClassrooms();
    } catch (err) {
      alert(err.response?.data?.msg || "Delete failed");
    }
  };

  // ✅ LEAVE CLASS
  const handleLeave = async (id) => {
    try {
      await API.delete(`/api/classroom/leave/${id}`);
      fetchClassrooms();
    } catch (err) {
      alert(err.response?.data?.msg || "Leave failed");
    }
  };

  return (
    <div className="dashboard">
      <div className="topbar">
        <h1 className="title">CampusHub</h1>

        <div className="actions">
          <button className="btn primary" onClick={() => setShowCreateModal(true)}>
            Create
          </button>
          <button className="btn secondary" onClick={() => setShowJoinModal(true)}>
            Join
          </button>
          <UserMenu />
        </div>
      </div>

      <div className="grid">
        {/* CREATED */}
        <div className="box">
          <h2>My Created Classes</h2>

          {created.length === 0 ? (
            <p className="empty">No classes yet</p>
          ) : (
            created.map((room) => (
              <div className="card" key={room.id}>
                <div>
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>
                </div>

                <div className="right">
                  <span className="label">Room Key</span>
                  <h4>{room.room_key}</h4>

                  <div className="b-actions">
                    <button onClick={() => copyKey(room.room_key)}>Copy</button>
                    <button
                      className="danger"
                      onClick={() => handleDelete(room.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* JOINED */}
        <div className="box">
          <h2>Joined Classes</h2>

          {joined.length === 0 ? (
            <p className="empty">No joined classes</p>
          ) : (
            joined.map((room) => (
              <div className="card" key={room.id}>
                <div>
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>
                </div>

                <div className="right">
                  <span className="label">Room Key</span>
                  <h4>{room.room_key}</h4>

                  <div className="b-actions">
                    <button onClick={() => copyKey(room.room_key)}>Copy</button>
                    <button
                      className="leave"
                      onClick={() => handleLeave(room.id)}
                    >
                      Leave
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* CREATE MODAL */}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Create New Class</h2>
            <input
              type="text"
              placeholder="Class Name"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Class Description"
              value={newClassDesc}
              onChange={(e) => setNewClassDesc(e.target.value)}
            />
            <div className="modal-buttons">
              <button
                className="btn secondary"
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </button>
              <button className="btn primary" onClick={handleCreate}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* JOIN MODAL */}
      {showJoinModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Join a Class</h2>
            <input
              type="text"
              placeholder="Room Key"
              value={joinRoomKey}
              onChange={(e) => setJoinRoomKey(e.target.value)}
            />
            <div className="modal-buttons">
              <button
                className="btn secondary"
                onClick={() => setShowJoinModal(false)}
              >
                Cancel
              </button>
              <button className="btn primary" onClick={handleJoin}>
                Join
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;