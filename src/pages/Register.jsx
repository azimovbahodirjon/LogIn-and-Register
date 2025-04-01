import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../app/features/userSlice";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    let hasError = false;

    if (!email.includes("@gmail.com")) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (password.length < 6) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      hasError = true;
    } else {
      setConfirmPasswordError(false);
    }

    if (hasError) return;

    dispatch(login({ email }));
    navigate("/");
  };

  return (
    <div
      className="grid h-screen w-full place-items-center bg-cover bg-center bg-no-repeat px-4 md:px-0 overflow-auto"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://picsum.photos/1920/1080")`,
      }}
    >
      <div className="p-8 rounded-2xl max-w-md w-full bg-transparent backdrop-blur-md shadow-lg overflow-auto">
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
              className={`w-full mt-1 p-3 rounded-lg border ${
                emailError ? "border-red-500" : "border-gray-300"
              } bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">
                Email must contain @gmail.com
              </p>
            )}
          </label>
          <label className="text-white w-full max-w-xs relative">
            Password
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Type here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full mt-1 p-3 rounded-lg border ${
                passwordError ? "border-red-500" : "border-gray-300"
              } bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none`}
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </label>
          <label className="text-white w-full max-w-xs relative">
            Confirm Password
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              placeholder="Retype your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full mt-1 p-3 rounded-lg border ${
                confirmPasswordError ? "border-red-500" : "border-gray-300"
              } bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none`}
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-600"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </span>
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1">
                Passwords do not match
              </p>
            )}
          </label>
          <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
            <button
              onClick={handleRegister}
              className="bg-blue-600 text-white py-3 rounded-lg w-full transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
            >
              Register
            </button>
            <button className="bg-pink-600 text-white py-3 rounded-lg w-full transition-all duration-300 ease-in-out hover:bg-pink-700 hover:scale-105">
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
