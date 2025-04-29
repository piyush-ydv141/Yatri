import React, { useState } from "react";

export default function App() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen bg-black bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 rounded-xl border-2 border-cyan-400 shadow-neon">
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setIsSignup(false)}
            className={`px-4 py-2 font-semibold text-cyan-300 border-b-2 transition duration-300 ${
              !isSignup ? "border-cyan-400" : "border-transparent"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsSignup(true)}
            className={`px-4 py-2 font-semibold text-pink-300 border-b-2 transition duration-300 ${
              isSignup ? "border-pink-400" : "border-transparent"
            }`}
          >
            Signup
          </button>
        </div>

        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 bg-transparent border border-purple-500 text-white placeholder-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 neon-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 bg-transparent border border-pink-500 text-white placeholder-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 neon-input"
          />
          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              className="px-4 py-2 bg-transparent border border-blue-500 text-white placeholder-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 neon-input"
            />
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-cyan-500 text-black font-bold rounded-md hover:shadow-pulse transition-shadow duration-300"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
