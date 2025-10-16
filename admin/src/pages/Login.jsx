// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Redirect if already logged in
//   useEffect(() => {
//     if (localStorage.getItem("adminToken")) {
//       navigate("/", { replace: true });
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         username,
//         password,
//       });

//       // Store token
//       localStorage.setItem("adminToken", res.data.token);

//       // Set Axios default Authorization header
//       axios.defaults.headers.common[
//         "Authorization"
//       ] = `Bearer ${res.data.token}`;

//       // Redirect to dashboard
//       navigate("/", { replace: true });
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-10 rounded shadow-md w-full max-w-sm space-y-6"
//       >
//         <img src={logo} alt="Logo" className="mx-auto h-16 mb-4" />
//         <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>
//         {error && <p className="text-red-600 text-center">{error}</p>}
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full p-3 border rounded"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 border rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      // Store token
      localStorage.setItem("adminToken", res.data.token);

      // Set Axios default Authorization header
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;

      // Redirect to dashboard
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-sm sm:max-w-md space-y-6"
      >
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-16 mb-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-center">
            Admin Login
          </h1>
        </div>

        {error && (
          <p className="text-red-600 text-center font-medium">{error}</p>
        )}

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
