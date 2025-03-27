import { MdSpaceDashboard } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import Users from "./Users";

function Home() {
  const [click, setClick] = useState("Dashboard");

  const navItems = [
    { label: "Dashboard", icon: <MdSpaceDashboard /> },
    { label: "Create", icon: <CiCirclePlus /> },
    { label: "Settings", icon: <IoMdSettings /> },
  ];

  return (
    <div className="flex h-screen w-full bg-gray-100">
      <div className="w-64 bg-blue-600 text-white flex flex-col pt-5 shadow-lg">
        <div className="flex flex-col items-center mb-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt="User"
            className="w-14 h-14 rounded-full mb-2 border-2 border-white"
          />
          <span className="text-lg font-semibold">Bahodirjon</span>
        </div>

        <nav className="flex flex-col">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 text-left transition-all ${
                click === item.label
                  ? "bg-white text-blue-700 font-semibold shadow-md"
                  : "hover:bg-blue-500"
              }`}
              onClick={() => setClick(item.label)}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1 flex justify-center items-center">
        <h2 className="text-3xl font-semibold text-gray-700">{click}</h2>
      </main>

      <div className="w-64 p-4 bg-white shadow-lg border-l">
        <Users />
      </div>
    </div>
  );
}

export default Home;
