import React from "react";
import { useContext } from "react";
import NewsContext from "../context/NewsContext";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-800 p-4 text-white text-2xl font-semibold">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white">News App</span>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            <Link to="/signup">Signup</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
