// import React, { useEffect, useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import axios from 'axios';
// import { FaEye, FaTrash, FaReply } from 'react-icons/fa';

// const Inbox = () => {
//   const [messages, setMessages] = useState([]);
//   const [selectedMessage, setSelectedMessage] = useState(null);
//   const token = localStorage.getItem('adminToken');

//   useEffect(() => {
//     fetchMessages();
//   }, [token]);

//   const fetchMessages = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/contacts', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setMessages(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this message?')) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/contacts/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setMessages(messages.filter(msg => msg._id !== id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleReply = (email) => {
//     window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, '_blank');
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-grow p-6">
//         <h1 className="text-3xl font-bold mb-6">Inbox</h1>

//         {/* Messages List */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded shadow">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Date & Time</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {messages.map(msg => (
//                 <tr key={msg._id} className="border-b">
//                   <td className="px-4 py-2">{msg.name}</td>
//                   <td className="px-4 py-2">{msg.email}</td>
//                   <td className="px-4 py-2">{new Date(msg.createdAt).toLocaleString()}</td>
//                   <td className="px-4 py-2 flex space-x-2">
//                     <button
//                       onClick={() => setSelectedMessage(msg)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                     >
//                       <FaEye />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(msg._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     >
//                       <FaTrash />
//                     </button>
//                     <button
//                       onClick={() => handleReply(msg.email)}
//                       className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                     >
//                       <FaReply />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Selected Message Modal */}
//         {selectedMessage && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded w-96 shadow-lg">
//               <h2 className="text-xl font-bold mb-2">{selectedMessage.name}</h2>
//               <p className="mb-2"><strong>Email:</strong> {selectedMessage.email}</p>
//               <p className="mb-2"><strong>Mobile:</strong> {selectedMessage.number}</p>
//               <p className="mb-4"><strong>Message:</strong> {selectedMessage.message}</p>
//               <button
//                 onClick={() => setSelectedMessage(null)}
//                 className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Inbox;

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { FaEye, FaTrash, FaReply } from 'react-icons/fa';

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    fetchMessages();
  }, [token]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contacts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(messages.filter(msg => msg._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleReply = (email) => {
    window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, '_blank');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-grow p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Inbox</h1>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Date & Time</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map(msg => (
                <tr key={msg._id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{msg.name}</td>
                  <td className="px-4 py-2">{msg.email}</td>
                  <td className="px-4 py-2">{new Date(msg.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => setSelectedMessage(msg)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleDelete(msg._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleReply(msg.email)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      <FaReply />
                    </button>
                  </td>
                </tr>
              ))}
              {messages.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden grid gap-4">
          {messages.length === 0 && (
            <div className="text-center py-6 text-gray-500">No messages found.</div>
          )}
          {messages.map(msg => (
            <div key={msg._id} className="bg-white p-4 rounded shadow flex flex-col space-y-2">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Date:</strong> {new Date(msg.createdAt).toLocaleString()}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => setSelectedMessage(msg)}
                  className="flex-1 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center justify-center"
                >
                  <FaEye /> View
                </button>
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="flex-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center justify-center"
                >
                  <FaTrash /> Delete
                </button>
                <button
                  onClick={() => handleReply(msg.email)}
                  className="flex-1 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 flex items-center justify-center"
                >
                  <FaReply /> Reply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Message Modal */}
        {selectedMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
              <button
                onClick={() => setSelectedMessage(null)}
                className="absolute top-2 right-2 bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500"
              >
                X
              </button>
              <h2 className="text-xl font-bold mb-2">{selectedMessage.name}</h2>
              <p className="mb-2"><strong>Email:</strong> {selectedMessage.email}</p>
              <p className="mb-2"><strong>Mobile:</strong> {selectedMessage.number}</p>
              <p className="mb-4"><strong>Message:</strong> {selectedMessage.message}</p>
              <button
                onClick={() => setSelectedMessage(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
