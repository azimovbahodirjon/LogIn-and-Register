import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../app/features/userSlice";
import { Link } from "react-router-dom";

function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (displayName && email && password) {
      dispatch(login({ email }));
      navigate("/");
    }
  };

  return (
    <div
      className="grid h-screen w-full place-items-center bg-cover bg-center bg-no-repeat px-4 md:px-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("./signup-bg.jpg")`,
      }}
    >
      <div className="p-8 rounded-2xl max-w-md w-full bg-transparent backdrop-blur-md shadow-lg">
        <img src="./logo.svg" className="mx-auto w-16 mb-4" alt="Logo" />

        <h2 className="text-4xl text-center mb-5 font-bold text-white">
          Register
        </h2>
        <div className="flex flex-col gap-4 items-center w-full">
          <label className="text-white w-full max-w-xs">
            Display Name
            <input
              type="text"
              required
              placeholder="Type here"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </label>
          <label className="text-white w-full max-w-xs">
            Email
            <input
              type="email"
              required
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </label>
          <label className="text-white w-full max-w-xs">
            Password
            <input
              type="password"
              required
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </label>

          <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
            <button
              onClick={handleRegister}
              className="bg-blue-600 text-white py-3 rounded-lg w-full transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
            >
              Register
            </button>
            <button className="bg-gray-500 text-white py-3 rounded-lg w-full transition-all duration-300 ease-in-out hover:bg-gray-600 hover:scale-105">
              Register with Google
            </button>
          </div>
        </div>

        <div className="text-center text-white mt-4">
          <p>
            If you have an account,{" "}
            <Link
              className="text-yellow-400 underline hover:text-yellow-500 transition-all duration-300"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
