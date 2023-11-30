import React, { useState } from "react";
import { useContext } from "react";
import NewsContext from "../context/NewsContext";
import { Link } from "react-router-dom";

function Signup() {
  const { email, setEmail, password, setPassword, createUser } =
    useContext(NewsContext);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input
        className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter email here"
        required
      />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input
        className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Password here"
        required
      />
      <button
        onClick={() => createUser(email, password)}
        className="w-full bg-blue-500 text-white p-3 mb-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Sign Up
      </button>
      <Link to="/login">
        <p className="flex justify-center cursor-pointer hover:underline">
          Already have an account.
        </p>
      </Link>
    </div>
  );
}

export default Signup;
