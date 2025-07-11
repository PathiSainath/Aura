import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import Aura from '../Assets/Aura.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#0f1422] text-white px-6 py-1 flex justify-between items-center relative shadow-md">
      <div>
        <Link to="/">
          <img src={Aura} alt="Logo" className="h-24 w-auto cursor-pointer" />
        </Link>
      </div>

      {/* Center Nav Links */}
      <div className="flex space-x-10 font-semibold text-base">
        {[
          { label: 'Home', path: '/' },
          { label: 'Pricing', path: '/pricing' },
          // { label: 'Contact', path: '' }
        ].map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="relative group text-gray-300 hover:text-white transition duration-300"
          >
            {item.label}
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 
                   origin-left transition-transform duration-300"
            />
          </Link>
        ))}
      </div>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="p-2 border border-gray-600 rounded-md hover:border-white transition duration-200"
        >
          <FiUser size={22} />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-3 bg-[#0f1422] text-white rounded-2xl shadow-2xl w-60 py-4 z-50">
            <a
              href="/login"
              className="block px-6 py-3 font-semibold hover:bg-[#1a2236] hover:text-white transition duration-300 rounded-t-2xl"
            >
              Login
            </a>
            <a
              href="/signup"
              className="block px-6 py-3 font-semibold hover:bg-[#1a2236] hover:text-white transition duration-300 rounded-b-2xl"
            >
              Sign up
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
