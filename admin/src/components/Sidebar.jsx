import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaUpload,
  FaInbox,
  FaDonate,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // For mobile toggle

  const menuItems = [
    { name: 'Dashboard', icon: <FaHome />, path: '/' },
    { name: 'Upload Project', icon: <FaUpload />, path: '/upload' },
    { name: 'Inbox', icon: <FaInbox />, path: '/inbox' },
    { name: 'Donation Record', icon: <FaDonate />, path: '/donations' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="bg-white shadow p-4 flex justify-between items-center md:hidden fixed top-0 left-0 right-0 z-50">
        <div className="text-2xl font-bold">Admin Panel</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-40 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 flex flex-col justify-between`}
      >
        <div className="overflow-y-auto flex-1">
          <div className="text-2xl font-bold p-6 border-b hidden md:block">
            Admin Panel
          </div>
          <ul className="mt-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)} // close on mobile
                  className={`flex items-center p-4 hover:bg-gray-200 ${
                    location.pathname === item.path
                      ? 'bg-gray-200 font-semibold'
                      : ''
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center p-4 m-4 bg-red-500 text-white rounded hover:bg-red-600"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
