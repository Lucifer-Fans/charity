import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Folder, Phone, Heart, Menu, X, BookImage } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const menuItems = [
    { name: "Home", to: "/", icon: <Home size={20} /> },
    { name: "About Us", to: "/about", icon: <Info size={20} /> },
    { name: "Projects", to: "/projects", icon: <Folder size={20} /> },
    { name: "Gallery", to: "/gallery", icon: <BookImage size={20} /> },
    { name: "Contact Us", to: "/contact", icon: <Phone size={20} /> },
    { name: "Donate Us", to: "/donate", icon: <Heart size={20} />, donate: true },
  ];

  const menuVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 20 },
    },
    exit: { opacity: 0, y: -10, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/100 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            className="text-xl font-bold text-gray-800 hover:text-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The Cresent Foundation
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition text-sm font-medium ${
                item.donate
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : pathname === item.to
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-50">
          <motion.button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: open ? 0.95 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="bg-blue-500 p-3 rounded-full text-white shadow-lg focus:outline-none"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </motion.button>

          {/* Backdrop Overlay */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black z-40"
              />
            )}
          </AnimatePresence>

          {/* Bubble Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute top-full right-0 mt-3 flex flex-col items-end gap-4 z-50 p-3"
              >
                {menuItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-center gap-3 w-[160px] sm:w-auto px-6 py-3 rounded-full shadow-lg text-sm font-medium transition ${
                        item.donate
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : pathname === item.to
                          ? "bg-blue-100 text-blue-600 font-semibold"
                          : "bg-white text-gray-800 hover:bg-blue-100"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
