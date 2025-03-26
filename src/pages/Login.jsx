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
      className="h-screen grid place-items-center w-full bg-cover bg-center"
    >
      <div className="p-8 rounded-lg max-w-md w-full">
        <img className="w-14   mx-auto mb-2" src="./logo.svg" alt="Logo" />
        <h2 className="text-4xl text-center mb-2 font-bold text-white">
          Login
        </h2>
        <div className="flex flex-col gap-4 items-center">
          <label className="text-white w-80">
            Email
            <input
              type="email"
              required
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full mt-1 p-4 rounded-xl border border-gray-300 bg-white text-gray-600"
            />
          </label>
          <label className="text-white w-80">
            Password
            <input
              type="password"
              required
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full mt-1 p-4 rounded-xl border border-gray-300 bg-white text-gray-600"
            />
          </label>

          {/* Tugmalarni input uzunligiga moslashtirish */}
          <div className="flex flex-col gap-3 mt-4 w-80">
            <button
              onClick={handleLogin}
              className="btn bg-purple-700 text-white py-3 rounded-xl w-full transition-all duration-300 ease-in-out hover:bg-purple-800 hover:scale-105"
            >
              Login
            </button>
            <button className="btn bg-pink-600 text-white py-3 rounded-xl w-full transition-all duration-300 ease-in-out hover:bg-pink-700 hover:scale-105">
              Google
            </button>
          </div>

          <div className="text-center text-white mt-4">
            <p>
              If you don't have an account, please{" "}
              <Link
                className="text-blue-400 underline hover:text-blue-600 transition-all duration-300"
                to="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
