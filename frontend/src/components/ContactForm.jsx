
// import React, { useState } from 'react';
// import axios from 'axios';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = e => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/contacts', formData);
//       setSubmitted(true);
//       setFormData({ name: '', email: '', number: '', message: '' });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const isValid = formData.name && formData.email && formData.number && formData.message;

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-full bg-white/70 backdrop-blur-md rounded-xl shadow-xl p-8 md:p-10 space-y-6"
//     >
//       {submitted && (
//         <p className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center animate-pulse">
//           Thank you for contacting us. Our team will reach you very soon.
//         </p>
//       )}

//       <div>
//         <label className="block text-gray-700 font-medium mb-1">Name</label>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) => {
//             const regex = /^[a-zA-Z\s]*$/; // only letters and spaces
//             if (regex.test(e.target.value)) {
//               handleChange(e);
//             }
//           }}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 font-medium mb-1">Email</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
//         <input
//           type="text"
//           name="number"
//           placeholder="Mobile Number"
//           value={formData.number}
//           onChange={(e) => {
//             const regex = /^[0-9\b]*$/; // only numbers
//             if (regex.test(e.target.value) && e.target.value.length <= 10) {
//               handleChange(e);
//             }
//           }}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//           maxLength={10} // optional safeguard
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 font-medium mb-1">Message</label>
//         <textarea
//           name="message"
//           placeholder="Message"
//           value={formData.message}
//           onChange={handleChange}
//           rows={5}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           required
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         disabled={!isValid}
//         className={`w-full py-3 font-semibold rounded-lg transition duration-300 transform hover:scale-105 ${isValid
//           ? "bg-blue-600 hover:bg-blue-700 text-white"
//           : "bg-gray-400 text-gray-200 cursor-not-allowed"
//           }`}
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
