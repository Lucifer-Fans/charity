// import React from "react";
// import { Link } from "react-router-dom";
// import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
// import logo from "../assets/logo.png";
// import { motion } from "framer-motion";

// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const Footer = () => {
//   return (
//     <motion.footer
//       variants={fadeIn}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       className="bg-[#E6EBF1] text-black pt-10 pb-6"
//     >
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Column 1: Address */}
//         <div>
//           <h3 className="text-lg font-bold text-blue-500 mb-3">Address</h3>
//           <p className="flex items-start gap-2 text-base mb-2 text-gray-900">
//             <MapPin className="mt-1 text-blue-600 flex-shrink-0" />
//             123 Charity Street, City, Country
//           </p>
//           <p className="flex items-center gap-2 text-base mb-2 text-gray-900">
//             <Phone className="text-green-600 flex-shrink-0" />
//             <a href="tel:+918347117507" className="hover:text-blue-500">
//               +91 8347117507
//             </a>
//           </p>
//           <p className="flex items-center gap-2 text-base text-gray-900">
//             <Mail className="text-red-600 flex-shrink-0" />
//             <a
//               href="mailto:info@thecresentfoundation.org"
//               className="hover:text-blue-500"
//             >
//               info@thecresentfoundation.org
//             </a>
//           </p>
//         </div>

//         {/* Column 2: Location Map */}
//         <div>
//           <h3 className="text-lg font-bold text-blue-500 mb-3">Location</h3>
//           <div className="rounded-md overflow-hidden shadow-lg">
//             <iframe
//               className="w-full h-40"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01978516304!2d-122.41941518468144!3d37.77492927975912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817d0a1e5f3f%3A0x7ef44bba1ff9d64c!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1696329210000!5m2!1sen!2sus"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="The Cresent Foundation Location"
//             ></iframe>
//           </div>
//         </div>

//         {/* Column 3: Logo & Socials */}
//         <div className="flex flex-col items-center justify-start">
//           <img src={logo} alt="The Cresent Foundation Logo" className="w-40 mb-3" />
//           <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//             The Cresent Foundation
//           </h2>
//           <div className="flex space-x-4 text-xl text-gray-800">
//             <motion.a
//               whileHover={{ scale: 1.2, color: "#3b82f6" }}
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Facebook />
//             </motion.a>
//             <motion.a
//               whileHover={{ scale: 1.2, color: "#E4405F" }}
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Instagram />
//             </motion.a>
//             <motion.a
//               whileHover={{ scale: 1.2, color: "#1DA1F2" }}
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Twitter />
//             </motion.a>
//             <motion.a
//               whileHover={{ scale: 1.2, color: "#0077B5" }}
//               href="#"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Linkedin />
//             </motion.a>
//           </div>
//         </div>

//         {/* Column 4: Quick Links */}
//         <div>
//           <h3 className="text-lg font-bold text-blue-500 mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-base text-gray-900">
//             {[
//               { name: "Home", path: "/" },
//               { name: "About Us", path: "/about" },
//               { name: "Projects", path: "/projects" },
//               { name: "Contact Us", path: "/contact" },
//               { name: "Donate Us", path: "/donate" },
//             ].map((link, idx) => (
//               <motion.li
//                 key={idx}
//                 whileHover={{ x: 5, color: "#60a5fa" }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <Link to={link.path}>{link.name}</Link>
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="text-center text-sm text-gray-900 mt-8 border-t border-gray-400 pt-4">
//         © 2025 The Cresent Foundation. All rights reserved.
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-[#E6EBF1] text-black pt-10 pb-6 w-full mt-auto"
    >
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Address */}
        <div>
          <h3 className="text-lg font-bold text-blue-500 mb-3">Address</h3>
          <p className="flex items-start gap-2 text-base mb-2 text-gray-900">
            <MapPin className="mt-1 text-blue-600 flex-shrink-0" />
            1-4-48, Maulana Azad Nagar behind Janta Market, Nanded-431602 (INDIA)
          </p>
          <p className="flex items-center gap-2 text-base mb-2 text-gray-900">
            <Phone className="text-green-600 flex-shrink-0" />
            <a href="tel:+918347117507" className="hover:text-blue-500">
              +91 9011304885
            </a>
          </p>
          <p className="flex items-center gap-2 text-base text-gray-900">
            <Mail className="text-red-600 flex-shrink-0" />
            <a
              href="mailto:nnd.tcf@gmail.com"
              className="hover:text-blue-500 break-all"
            >
              nnd.tcf@gmail.com
            </a>
          </p>
        </div>

        {/* Column 2: Location Map */}
        <div>
          <h3 className="text-lg font-bold text-blue-500 mb-3">Location</h3>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-48 sm:h-56 md:h-40 lg:h-44"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01978516304!2d-122.41941518468144!3d37.77492927975912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817d0a1e5f3f%3A0x7ef44bba1ff9d64c!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1696329210000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Cresent Foundation Location"
            ></iframe>
          </div>
        </div>

        {/* Column 3: Logo & Socials */}
        <div className="flex flex-col items-center sm:items-start lg:items-center">
          <img
            src={logo}
            alt="The Cresent Foundation Logo"
            className="w-32 sm:w-36 md:w-40 mb-3"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center sm:text-left lg:text-center">
            The Cresent Foundation
          </h2>
          <div className="flex justify-center sm:justify-start lg:justify-center space-x-5 text-xl text-gray-800">
            <motion.a
              whileHover={{ scale: 1.2, color: "#3b82f6" }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#E4405F" }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#1DA1F2" }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#0077B5" }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </motion.a>
          </div>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-blue-500 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-base text-gray-900">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact Us", path: "/contact" },
              { name: "Donate Us", path: "/donate" },
            ].map((link, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 5, color: "#60a5fa" }}
                transition={{ duration: 0.2 }}
              >
                <Link to={link.path}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-900 mt-10 border-t border-gray-300 pt-4 px-4">
        © {new Date().getFullYear()} The Cresent Foundation. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
