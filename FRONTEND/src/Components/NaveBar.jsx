// Components/NaveBar.jsx
import React from 'react';
import { Link } from '@tanstack/react-router';

const NaveBar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center border-b-1">
      {/* Logo / Brand */}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600 hover:text-blue-800"
      >
        URL Shortener
      </Link>

      {/* Right side buttons */}
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Dashboard
            </Link>
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/auth"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NaveBar;
