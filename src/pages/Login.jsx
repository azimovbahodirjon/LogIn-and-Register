import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../app/features/userSlice";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      dispatch(login({ email }));
      navigate("/");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("./login-bg.jpg")`,
      }}
      className="h-screen flex items-center justify-center w-full bg-cover bg-center px-4"
    >
      <div className="p-8 rounded-2xl max-w-md w-full bg-transparent backdrop-blur-md shadow-lg">
        <img className="w-16 mx-auto mb-4" src="./logo.svg" alt="Logo" />
        <h2 className="text-3xl text-center mb-4 font-bold text-white">
          Login
        </h2>
        <div className="flex flex-col gap-4 items-center">
          <label className="text-white w-full">
            Email
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </label>
          <label className="text-white w-full">
            Password
            <input
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </label>
          <div className="flex flex-col gap-3 mt-4 w-full">
            <button
              onClick={handleLogin}
              className="bg-purple-700 text-white py-3 rounded-lg w-full transition-all duration-300 ease-in-out hover:bg-purple-800 hover:scale-105"
            >
              Login
            </button>
            <button className="bg-pink-600 text-white py-3 rounded-lg w-full transition-all duration-300 ease-in-out hover:bg-pink-700 hover:scale-105">
              Login with Google
            </button>
          </div>
          <div className="text-center text-white mt-4">
            <p>
              Don't have an account?{" "}
              <Link
                className="text-blue-400 underline hover:text-blue-600 transition-all duration-300"
                to="/register"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
