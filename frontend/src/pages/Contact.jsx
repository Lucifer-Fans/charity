import React, { useState } from "react";
import axios from "axios";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Contactbg from "../assets/Contactbg.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://thecresent-backend.onrender.com/api/contacts", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", number: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  const isValid =
    formData.name && formData.email && formData.number && formData.message;

  return (
    <div className="overflow-hidden w-full bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Header Section */}
      <header
        className="relative w-screen h-56 sm:h-64 md:h-72 bg-cover bg-center text-white flex flex-col items-center justify-center text-center mb-12"
        style={{ backgroundImage: `url(${Contactbg})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <motion.div
          className="relative z-10 max-w-3xl px-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            We're here to help! Reach out for any queries, support, or collaboration.
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 items-start justify-center">
        {/* Left Info Section */}
        <div className="w-full lg:w-1/2 bg-white/70 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
            Get In <span className="text-blue-700">Touch</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We’re always happy to hear from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-start sm:items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600 text-lg flex-shrink-0 mt-1 sm:mt-0" />
              <span className="text-sm sm:text-base">
                <strong>Head Office:</strong> 123 Charity Street, City, Country
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhone className="text-green-600 text-lg flex-shrink-0" />
              <a
                href="tel:+1234567890"
                className="hover:text-blue-500 text-sm sm:text-base"
              >
                +1234567890
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-red-600 text-lg flex-shrink-0" />
              <span className="text-sm sm:text-base">info@charity.org</span>
            </div>
          </div>

          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01978516304!2d-122.41941518468144!3d37.77492927975912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817d0a1e5f3f%3A0x7ef44bba1ff9d64c!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1696329210000!5m2!1sen!2sus"
            className="w-full h-56 sm:h-64 md:h-72 rounded-lg border border-gray-300 mt-4"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 text-center">
            Send Us a Message
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {submitted && (
              <p className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center animate-pulse text-sm sm:text-base">
                Thank you for contacting us. Our team will reach you soon.
              </p>
            )}

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => {
                  const regex = /^[a-zA-Z\s]*$/;
                  if (regex.test(e.target.value)) handleChange(e);
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                Mobile Number
              </label>
              <input
                type="text"
                name="number"
                placeholder="Your Mobile Number"
                value={formData.number}
                onChange={(e) => {
                  const regex = /^[0-9\b]*$/;
                  if (regex.test(e.target.value) && e.target.value.length <= 10)
                    handleChange(e);
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                required
                maxLength={10}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-3 font-semibold rounded-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base ${
                isValid
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
