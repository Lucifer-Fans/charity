// import React, { useEffect, useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaEdit, FaTrash } from 'react-icons/fa';

// const Dashboard = () => {
//   const [projects, setProjects] = useState([]);
//   const navigate = useNavigate();
//   const token = localStorage.getItem('adminToken');

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/api/projects', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => setProjects(res.data))
//       .catch((err) => console.error(err));
//   }, [token]);

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this project?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/projects/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProjects((prev) => prev.filter((p) => p._id !== id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleEdit = (id) => navigate(`/upload?id=${id}`);

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar />
//       <div className="flex-grow p-8">
//         <h1 className="text-3xl font-bold mb-8">Dashboard - Projects</h1>

//         <div className="overflow-x-auto bg-white rounded shadow">
//           <table className="min-w-full">
//             <thead className="bg-gray-200 text-gray-700">
//               <tr>
//                 <th className="px-4 py-3 text-left font-semibold">Image</th>
//                 <th className="px-4 py-3 text-left font-semibold">Name</th>
//                 <th className="px-4 py-3 text-left font-semibold">Category</th>
//                 <th className="px-4 py-3 text-left font-semibold">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {projects.map((p) => (
//                 <tr key={p._id} className="border-b hover:bg-gray-50 transition">
//                   <td className="px-4 py-3">
//                     <img
//                       src={p.images[0]?.url}
//                       alt={p.name}
//                       className="h-16 w-16 object-cover rounded"
//                     />
//                   </td>
//                   <td className="px-4 py-3 font-medium text-gray-800">{p.name}</td>
//                   <td className="px-4 py-3 capitalize text-gray-700">{p.category}</td>
//                   <td className="px-4 py-3 flex space-x-3">
//                     <button
//                       onClick={() => handleEdit(p._id)}
//                       className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
//                     >
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(p._id)}
//                       className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}

//               {projects.length === 0 && (
//                 <tr>
//                   <td colSpan="4" className="text-center py-6 text-gray-500">
//                     No projects found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/projects', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, [token]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (id) => navigate(`/upload?id=${id}`);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-grow p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">
          Dashboard - Projects
        </h1>

        {/* Table for Desktop/Laptop */}
        <div className="hidden md:block overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Image</th>
                <th className="px-4 py-3 text-left font-semibold">Name</th>
                <th className="px-4 py-3 text-left font-semibold">Category</th>
                <th className="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p._id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-4 py-3">
                    <img
                      src={p.images[0]?.url}
                      alt={p.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-800">{p.name}</td>
                  <td className="px-4 py-3 capitalize text-gray-700">{p.category}</td>
                  <td className="px-4 py-3 flex space-x-3">
                    <button
                      onClick={() => handleEdit(p._id)}
                      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}

              {projects.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Card view for Mobile */}
        <div className="md:hidden grid gap-4">
          {projects.length === 0 && (
            <div className="text-center py-6 text-gray-500">No projects found.</div>
          )}
          {projects.map((p) => (
            <div
              key={p._id}
              className="bg-white p-4 rounded shadow flex flex-col space-y-2"
            >
              <img
                src={p.images[0]?.url}
                alt={p.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="font-semibold text-lg">{p.name}</h2>
              <p className="capitalize text-gray-600">{p.category}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(p._id)}
                  className="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                  <FaEdit className="inline mr-1" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="flex-1 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                >
                  <FaTrash className="inline mr-1" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
