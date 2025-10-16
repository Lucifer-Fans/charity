//working with upload
// import React, { useState } from "react";
// import axios from "axios";
// import Contactbg from "../assets/Contactbg.png";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";

// const Donate = () => {
//   const [form, setForm] = useState({ type: "", name: "", mobile: "", amount: "" });
//   const [qr, setQr] = useState("");
//   const [showQr, setShowQr] = useState(false);
//   const [receipt, setReceipt] = useState(null);

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleGenerateQr = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/donations/temp", form);
//       setQr(res.data.qrCode);
//       setShowQr(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleReceiptUpload = (e) => {
//     setReceipt(e.target.files[0]);
//   };

//   const handleDone = async () => {
//     if (!receipt) return;

//     const formData = new FormData();
//     formData.append("name", form.name);
//     formData.append("mobile", form.mobile);
//     formData.append("amount", form.amount);
//     formData.append("type", form.type);
//     formData.append("receipt", receipt);

//     try {
//       await axios.post("http://localhost:5000/api/donations", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       Swal.fire({
//         icon: "success",
//         title: "Thank you for Donating!",
//         showConfirmButton: false,
//         timer: 2000,
//       });

//       // Reset form
//       setForm({ type: "", name: "", mobile: "", amount: "" });
//       setQr("");
//       setShowQr(false);
//       setReceipt(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const isValid = form.type && form.name && form.mobile && form.amount;

//   return (
//     <div className="pt-20 bg-gray-50 min-h-screen flex flex-col items-center">
//       {/* Hero Header */}
//       <header
//         className="relative h-64 md:h-72 bg-cover bg-center text-white flex flex-col items-center justify-center text-center py-20 px-16 mb-10 w-full overflow-hidden"
//         style={{ backgroundImage: `url(${Contactbg})` }}
//       >
//         <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
//         <motion.div
//           className="relative z-10 max-w-3xl"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-3">Make a Donation</h1>
//           <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-100">
//             Every contribution helps us bring change. Choose your donation type and proceed.
//           </p>
//         </motion.div>
//       </header>

//       {/* Donation Form Section */}
//       <div className="w-full max-w-2xl mx-auto px-6 py-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl border border-gray-200">
//         <div className="text-center mb-8">
//           <h2 className="text-2xl font-bold text-gray-800">Donate Now</h2>
//           <p className="text-gray-600 mt-2 text-sm sm:text-base">
//             Fill in the details below to generate your donation QR code.
//           </p>
//         </div>

//         {/* Donation Form */}
//         <div className="space-y-5">
//           <select
//             name="type"
//             value={form.type}
//             onChange={handleChange}
//             className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//           >
//             <option value="">Select Donation Type</option>
//             <option value="zakat">Zakat</option>
//             <option value="fitr">Fitr</option>
//             <option value="lillah">Lillah</option>
//           </select>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 if (/^[A-Za-z\s]*$/.test(value)) {
//                   setForm((prev) => ({ ...prev, name: value }));
//                 }
//               }}
//               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               type="text"
//               name="mobile"
//               placeholder="Mobile Number"
//               value={form.mobile}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 if (/^\d{0,10}$/.test(value)) {
//                   setForm((prev) => ({ ...prev, mobile: value }));
//                 }
//               }}
//               inputMode="numeric"
//               maxLength="10"
//               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <input
//             type="text"
//             name="amount"
//             placeholder="Donation Amount"
//             value={form.amount}
//             onChange={(e) => {
//               const value = e.target.value;
//               if (/^\d*$/.test(value)) {
//                 if (value === "" || Number(value) >= 1) {
//                   setForm((prev) => ({ ...prev, amount: value }));
//                 }
//               }
//             }}
//             inputMode="numeric"
//             className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             disabled={!isValid}
//             onClick={handleGenerateQr}
//             className={`w-full py-4 font-semibold rounded-lg transition duration-300 text-lg ${
//               isValid
//                 ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             }`}
//           >
//             Generate QR Code
//           </button>
//         </div>

//         {/* QR Code + Upload Section */}
//         {showQr && (
//           <div className="mt-10 flex flex-col items-center space-y-4">
//             <img
//               src={qr}
//               alt="QR Code"
//               className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl shadow-lg border border-gray-200"
//             />
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleReceiptUpload}
//               className="mt-4"
//             />
//             <button
//               onClick={handleDone}
//               disabled={!receipt}
//               className={`w-full py-3 font-semibold rounded-lg mt-2 text-lg transition duration-300 ${
//                 receipt
//                   ? "bg-green-600 text-white hover:bg-green-700 shadow-md"
//                   : "bg-gray-300 text-gray-500 cursor-not-allowed"
//               }`}
//             >
//               Done
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Donate;

// only img preview
// import React, { useState } from "react";
// import axios from "axios";
// import Contactbg from "../assets/Contactbg.png";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";

// const Donate = () => {
//   const [form, setForm] = useState({ type: "", name: "", mobile: "", amount: "" });
//   const [qr, setQr] = useState("");
//   const [showQr, setShowQr] = useState(false);
//   const [receipt, setReceipt] = useState(null);
//   const [receiptPreview, setReceiptPreview] = useState(null); // <-- Preview

//   const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleGenerateQr = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/donations/temp", form);
//       setQr(res.data.qrCode);
//       setShowQr(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleReceiptUpload = (e) => {
//     const file = e.target.files[0];
//     setReceipt(file);

//     // Generate preview
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setReceiptPreview(reader.result);
//       reader.readAsDataURL(file);
//     } else {
//       setReceiptPreview(null);
//     }
//   };

//   const handleDone = async () => {
//     if (!receipt) return;
//     const formData = new FormData();
//     formData.append("name", form.name);
//     formData.append("mobile", form.mobile);
//     formData.append("amount", form.amount);
//     formData.append("type", form.type);
//     formData.append("receipt", receipt);

//     try {
//       await axios.post("http://localhost:5000/api/donations", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       Swal.fire({
//         icon: "success",
//         title: "Thank you for Donating!",
//         showConfirmButton: false,
//         timer: 2000,
//       });

//       // Reset form
//       setForm({ type: "", name: "", mobile: "", amount: "" });
//       setQr("");
//       setShowQr(false);
//       setReceipt(null);
//       setReceiptPreview(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const isValid = form.type && form.name && form.mobile && form.amount;

//   return (
//     <div className="pt-20 bg-gray-50 min-h-screen flex flex-col items-center">
//       {/* Hero Header */}
//       <header
//         className="relative h-64 md:h-72 bg-cover bg-center text-white flex flex-col items-center justify-center text-center py-20 px-16 mb-10 w-full overflow-hidden"
//         style={{ backgroundImage: `url(${Contactbg})` }}
//       >
//         <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
//         <motion.div
//           className="relative z-10 max-w-3xl"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-3">Make a Donation</h1>
//           <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-100">
//             Every contribution helps us bring change. Choose your donation type and proceed.
//           </p>
//         </motion.div>
//       </header>

//       {/* Donation Form Section */}
//       <div className="w-full max-w-2xl mx-auto px-6 py-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl border border-gray-200">
//         <div className="text-center mb-8">
//           <h2 className="text-2xl font-bold text-gray-800">Donate Now</h2>
//           <p className="text-gray-600 mt-2 text-sm sm:text-base">
//             Fill in the details below to generate your donation QR code.
//           </p>
//         </div>

//         <div className="space-y-5">
//           <select
//             name="type"
//             value={form.type}
//             onChange={handleChange}
//             className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//           >
//             <option value="">Select Donation Type</option>
//             <option value="zakat">Zakat</option>
//             <option value="fitr">Fitr</option>
//             <option value="lillah">Lillah</option>
//           </select>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 if (/^[A-Za-z\s]*$/.test(value)) {
//                   setForm((prev) => ({ ...prev, name: value }));
//                 }
//               }}
//               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               name="mobile"
//               placeholder="Mobile Number"
//               value={form.mobile}
//               onChange={(e) => {
//                 const value = e.target.value;
//                 if (/^\d{0,10}$/.test(value)) {
//                   setForm((prev) => ({ ...prev, mobile: value }));
//                 }
//               }}
//               inputMode="numeric"
//               maxLength="10"
//               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <input
//             type="text"
//             name="amount"
//             placeholder="Donation Amount"
//             value={form.amount}
//             onChange={(e) => {
//               const value = e.target.value;
//               if (/^\d*$/.test(value)) {
//                 if (value === "" || Number(value) >= 1) {
//                   setForm((prev) => ({ ...prev, amount: value }));
//                 }
//               }
//             }}
//             inputMode="numeric"
//             className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             disabled={!isValid}
//             onClick={handleGenerateQr}
//             className={`w-full py-4 font-semibold rounded-lg transition duration-300 text-lg ${
//               isValid
//                 ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             }`}
//           >
//             Generate QR Code
//           </button>
//         </div>

//         {/* QR Code + Upload Section */}
//         {showQr && (
//           <div className="mt-10 flex flex-col items-center space-y-4">
//             <img
//               src={qr}
//               alt="QR Code"
//               className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl shadow-lg border border-gray-200"
//             />

//             <input
//               type="file"
//               accept="image/*,application/pdf"
//               onChange={handleReceiptUpload}
//               className="mt-4"
//             />

//             {/* Preview */}
//             {receiptPreview && (
//               <div className="mt-4 w-full">
//                 <p className="text-gray-700 mb-2">Receipt Preview:</p>
//                 {receipt.type.startsWith("image") ? (
//                   <img
//                     src={receiptPreview}
//                     alt="Receipt Preview"
//                     className="border rounded w-full max-h-80 object-contain"
//                   />
//                 ) : (
//                   <p className="text-gray-500 border p-2 rounded">PDF uploaded: {receipt.name}</p>
//                 )}
//               </div>
//             )}

//             <button
//               onClick={handleDone}
//               disabled={!receipt}
//               className={`w-full py-3 font-semibold rounded-lg mt-2 text-lg transition duration-300 ${
//                 receipt
//                   ? "bg-green-600 text-white hover:bg-green-700 shadow-md"
//                   : "bg-gray-300 text-gray-500 cursor-not-allowed"
//               }`}
//             >
//               Done
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Donate;

// both img and pdf preview
import React, { useState } from "react";
import axios from "axios";
import Contactbg from "../assets/Contactbg.png";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Donate = () => {
  const [form, setForm] = useState({ type: "", name: "", mobile: "", amount: "" });
  const [qr, setQr] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [receiptPreview, setReceiptPreview] = useState(null); // new state for preview

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleGenerateQr = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/donations/temp", form);
      setQr(res.data.qrCode);
      setShowQr(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReceiptUpload = (e) => {
    const file = e.target.files[0];
    setReceipt(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setReceiptPreview(reader.result);
      reader.readAsDataURL(file); // Works for both images and PDFs
    } else {
      setReceiptPreview(null);
    }
  };

  const handleDone = async () => {
    if (!receipt) return;

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("mobile", form.mobile);
    formData.append("amount", form.amount);
    formData.append("type", form.type);
    formData.append("receipt", receipt);

    try {
      await axios.post("http://localhost:5000/api/donations", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire({
        icon: "success",
        title: "Thank you for Donating!",
        showConfirmButton: false,
        timer: 2000,
      });

      // Reset form
      setForm({ type: "", name: "", mobile: "", amount: "" });
      setQr("");
      setShowQr(false);
      setReceipt(null);
      setReceiptPreview(null);
    } catch (error) {
      console.error(error);
    }
  };

  const isValid = form.type && form.name && form.mobile && form.amount;

  return (
    <div className="pt-20 pb-20 bg-gray-50 flex flex-col items-center">
      {/* Hero Header */}
      <header
        className="relative h-64 md:h-72 bg-cover bg-center text-white flex flex-col items-center justify-center text-center py-20 px-16 mb-5 -mt-6 w-full"
        style={{ backgroundImage: `url(${Contactbg})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Make a Donation</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-100">
            Every contribution helps us bring change. Choose your donation type and proceed.
          </p>
        </motion.div>
      </header>

      {/* Donation Form Section */}
      <div className="w-full max-w-2xl mx-auto px-6 py-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Donate Now</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Fill in the details below to generate your donation QR code.
          </p>
        </div>

        {/* Donation Form */}
        <div className="space-y-5">
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Select Donation Type</option>
            <option value="zakat">Zakat</option>
            <option value="fitr">Fitr</option>
            <option value="lillah">Lillah</option>
          </select>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  setForm((prev) => ({ ...prev, name: value }));
                }
              }}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  setForm((prev) => ({ ...prev, mobile: value }));
                }
              }}
              inputMode="numeric"
              maxLength="10"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="text"
            name="amount"
            placeholder="Donation Amount"
            value={form.amount}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                if (value === "" || Number(value) >= 1) {
                  setForm((prev) => ({ ...prev, amount: value }));
                }
              }
            }}
            inputMode="numeric"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            disabled={!isValid}
            onClick={handleGenerateQr}
            className={`w-full py-4 font-semibold rounded-lg transition duration-300 text-lg ${
              isValid
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Generate QR Code
          </button>
        </div>

        {/* QR Code + Upload Section */}
        {showQr && (
          <div className="mt-10 flex flex-col items-center space-y-4">
            <img
              src={qr}
              alt="QR Code"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl shadow-lg border border-gray-200"
            />

            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleReceiptUpload}
              className="mt-4"
            />

            {/* Preview */}
            {receiptPreview && (
              <div className="w-full mt-4 border rounded p-2 flex justify-center">
                {receipt.type === "application/pdf" ? (
                  <iframe
                    src={receiptPreview}
                    title="PDF Preview"
                    className="w-full h-64"
                  />
                ) : (
                  <img
                    src={receiptPreview}
                    alt="Receipt Preview"
                    className="max-h-64 object-contain"
                  />
                )}
              </div>
            )}

            <button
              onClick={handleDone}
              disabled={!receipt}
              className={`w-full py-3 font-semibold rounded-lg mt-2 text-lg transition duration-300 ${
                receipt
                  ? "bg-green-600 text-white hover:bg-green-700 shadow-md"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;
