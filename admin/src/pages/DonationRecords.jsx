// import React, { useEffect, useState, useRef } from 'react';
// import Sidebar from '../components/Sidebar';
// import axios from 'axios';
// import { FaDownload, FaWhatsapp } from 'react-icons/fa';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import logo from '../assets/logo.png';

// const DonationRecords = () => {
//   const [donations, setDonations] = useState([]);
//   const [selectedDonation, setSelectedDonation] = useState(null);
//   const token = localStorage.getItem('adminToken');
//   const receiptRef = useRef();

//   useEffect(() => {
//     fetchDonations();
//   }, [token]);

//   const fetchDonations = async () => {
//     try {
//       const res = await axios.get('https://thecresent-backend.onrender.com/api/donations', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setDonations(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleGeneratePDF = async () => {
//     if (!selectedDonation) return;
//     const canvas = await html2canvas(receiptRef.current);
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF();
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save(`donation_receipt_${selectedDonation.name}.pdf`);
//   };

//   const handleWhatsApp = () => {
//     if (!selectedDonation) return;
//     const text = `Hello ${selectedDonation.name},\nThank you for your donation of ₹${selectedDonation.amount} (${selectedDonation.type}).\nOrganization: Charity Org`;
//     const whatsappURL = `https://wa.me/${selectedDonation.mobile}?text=${encodeURIComponent(text)}`;
//     window.open(whatsappURL, '_blank');
//   };

//   const handleDownloadTransactionReceipt = (donation) => {
//   if (!donation.receiptUrl) return;
//   const link = document.createElement('a');
//   link.href = encodeURI(donation.receiptUrl); // encode URL
//   link.download = `transaction_receipt_${donation.name}`;
//   link.click();
// };


//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
//       <Sidebar />
//       <div className="flex-grow p-4 md:p-8">
//         <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Donation Records</h1>

//         {/* Desktop Table */}
//         <div className="hidden md:block overflow-x-auto">
//           <table className="min-w-full bg-white rounded shadow">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="px-4 py-2 text-left">Name</th>
//                 <th className="px-4 py-2 text-left">Mobile</th>
//                 <th className="px-4 py-2 text-left">Amount</th>
//                 <th className="px-4 py-2 text-left">Type</th>
//                 <th className="px-4 py-2 text-left">Date</th>
//                 <th className="px-4 py-2 text-left">Transaction Receipt</th>
//                 <th className="px-4 py-2 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {donations.map((d) => (
//                 <tr key={d._id} className="border-b hover:bg-gray-50 transition">
//                   <td className="px-4 py-2">{d.name}</td>
//                   <td className="px-4 py-2">{d.mobile}</td>
//                   <td className="px-4 py-2">₹{d.amount}</td>
//                   <td className="px-4 py-2">{d.type}</td>
//                   <td className="px-4 py-2">{new Date(d.createdAt).toLocaleString()}</td>
//                   <td className="px-4 py-2">
//                     {d.receiptUrl ? (
//                       <button
//                         onClick={() => handleDownloadTransactionReceipt(d)}
//                         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                       >
//                         Download
//                       </button>
//                     ) : (
//                       <span className="text-gray-500">Not uploaded</span>
//                     )}
//                   </td>
//                   <td className="px-4 py-2">
//                     <button
//                       onClick={() => setSelectedDonation(d)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-1"
//                     >
//                       <FaDownload /> View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {donations.length === 0 && (
//                 <tr>
//                   <td colSpan="7" className="text-center py-6 text-gray-500">
//                     No donations found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Mobile Cards */}
//         <div className="md:hidden grid gap-4">
//           {donations.map((d) => (
//             <div key={d._id} className="bg-white p-4 rounded shadow flex flex-col space-y-2">
//               <p><strong>Name:</strong> {d.name}</p>
//               <p><strong>Mobile:</strong> {d.mobile}</p>
//               <p><strong>Amount:</strong> ₹{d.amount}</p>
//               <p><strong>Type:</strong> {d.type}</p>
//               <p><strong>Date:</strong> {new Date(d.createdAt).toLocaleString()}</p>
//               {d.receiptUrl ? (
//                 <button
//                   onClick={() => handleDownloadTransactionReceipt(d)}
//                   className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mt-2"
//                 >
//                   Download Transaction Receipt
//                 </button>
//               ) : (
//                 <p className="text-gray-500 mt-2">No transaction receipt uploaded</p>
//               )}
//               <button
//                 onClick={() => setSelectedDonation(d)}
//                 className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-1 mt-2"
//               >
//                 <FaDownload /> View Donation Receipt
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         {selectedDonation && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg md:max-w-2xl relative">
//               <button
//                 onClick={() => setSelectedDonation(null)}
//                 className="absolute top-2 right-2 bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500"
//               >
//                 X
//               </button>

//               <div ref={receiptRef} className="p-4">
//                 <img src={logo} alt="Logo" className="h-16 mx-auto mb-4" />
//                 <h2 className="text-2xl font-bold text-center mb-4">Donation Receipt</h2>
//                 <p><strong>Name:</strong> {selectedDonation.name}</p>
//                 <p><strong>Mobile:</strong> {selectedDonation.mobile}</p>
//                 <p><strong>Amount:</strong> ₹{selectedDonation.amount}</p>
//                 <p><strong>Type:</strong> {selectedDonation.type}</p>
//                 <p><strong>Date:</strong> {new Date(selectedDonation.createdAt).toLocaleString()}</p>
//                 <p><strong>Address:</strong> 123 Charity Street, City, Country</p>
//                 <p><strong>Contact:</strong> +1234567890</p>
//               </div>

//               <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
//                 <button
//                   onClick={handleGeneratePDF}
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2 w-full md:w-auto"
//                 >
//                   <FaDownload /> Download Donation PDF
//                 </button>
//                 <button
//                   onClick={handleWhatsApp}
//                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center gap-2 w-full md:w-auto"
//                 >
//                   <FaWhatsapp /> Send WhatsApp
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default DonationRecords;

import React, { useEffect, useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { FaDownload, FaWhatsapp } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../assets/logo.png";

const DonationRecords = () => {
  const [donations, setDonations] = useState([]);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const token = localStorage.getItem("adminToken");
  const receiptRef = useRef();

  const API_BASE = import.meta.env.REACT_API_URL || "https://thecresent-backend.onrender.com/api";

  useEffect(() => {
    fetchDonations();
  }, [token]);

  const fetchDonations = async () => {
    try {
      const res = await axios.get(`${API_BASE}/donations`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDonations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGeneratePDF = async () => {
    if (!selectedDonation) return;
    const canvas = await html2canvas(receiptRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`donation_receipt_${selectedDonation.name}.pdf`);
  };

  const handleWhatsApp = () => {
    if (!selectedDonation) return;
    const text = `Hello ${selectedDonation.name},\nThank you for your donation of ₹${selectedDonation.amount} (${selectedDonation.type}).\nOrganization: Charity Org`;
    const whatsappURL = `https://wa.me/${selectedDonation.mobile}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const handleDownloadTransactionReceipt = (donation) => {
    if (!donation.receiptUrl) return;
    const url = donation.receiptUrl.startsWith("http")
      ? donation.receiptUrl
      : `${API_BASE.replace("/api", "")}${donation.receiptUrl}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.download = `transaction_receipt_${donation.name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-grow p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          Donation Records
        </h1>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Mobile</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Transaction Receipt</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d) => (
                <tr key={d._id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{d.name}</td>
                  <td className="px-4 py-2">{d.mobile}</td>
                  <td className="px-4 py-2">₹{d.amount}</td>
                  <td className="px-4 py-2">{d.type}</td>
                  <td className="px-4 py-2">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-2">
                    {d.receiptUrl ? (
                      <button
                        onClick={() => handleDownloadTransactionReceipt(d)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Download
                      </button>
                    ) : (
                      <span className="text-gray-500">Not uploaded</span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => setSelectedDonation(d)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-1"
                    >
                      <FaDownload /> View
                    </button>
                  </td>
                </tr>
              ))}
              {donations.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500">
                    No donations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden grid gap-4">
          {donations.map((d) => (
            <div key={d._id} className="bg-white p-4 rounded shadow flex flex-col space-y-2">
              <p><strong>Name:</strong> {d.name}</p>
              <p><strong>Mobile:</strong> {d.mobile}</p>
              <p><strong>Amount:</strong> ₹{d.amount}</p>
              <p><strong>Type:</strong> {d.type}</p>
              <p><strong>Date:</strong> {new Date(d.createdAt).toLocaleString()}</p>
              {d.receiptUrl ? (
                <button
                  onClick={() => handleDownloadTransactionReceipt(d)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mt-2"
                >
                  Download Transaction Receipt
                </button>
              ) : (
                <p className="text-gray-500 mt-2">No transaction receipt uploaded</p>
              )}
              <button
                onClick={() => setSelectedDonation(d)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center gap-1 mt-2"
              >
                <FaDownload /> View Donation Receipt
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedDonation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg md:max-w-2xl relative">
              <button
                onClick={() => setSelectedDonation(null)}
                className="absolute top-2 right-2 bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500"
              >
                X
              </button>

              <div ref={receiptRef} className="p-4">
                <img src={logo} alt="Logo" className="h-16 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-center mb-4">Donation Receipt</h2>
                <p><strong>Name:</strong> {selectedDonation.name}</p>
                <p><strong>Mobile:</strong> {selectedDonation.mobile}</p>
                <p><strong>Amount:</strong> ₹{selectedDonation.amount}</p>
                <p><strong>Type:</strong> {selectedDonation.type}</p>
                <p><strong>Date:</strong> {new Date(selectedDonation.createdAt).toLocaleString()}</p>
                <p><strong>Address:</strong> 123 Charity Street, City, Country</p>
                <p><strong>Contact:</strong> +1234567890</p>
              </div>

              <div className="mt-4 flex flex-col md:flex-row justify-center gap-4">
                <button
                  onClick={handleGeneratePDF}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2 w-full md:w-auto"
                >
                  <FaDownload /> Download Donation PDF
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center gap-2 w-full md:w-auto"
                >
                  <FaWhatsapp /> Send WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationRecords;
