import { MdSpaceDashboard } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";

function Home() {
  const [click, setClick] = useState("Dashboard");

  const navItems = [
    { label: "Dashboard", icon: <MdSpaceDashboard />, padding: "pr-20" },
    { label: "Create", icon: <CiCirclePlus />, padding: "pr-24" },
    { label: "Settings", icon: <IoMdSettings />, padding: "pr-20" },
  ];

  return (
    <div className="flex h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-500 to-blue-700 text-white flex flex-col pt-5 shadow-lg">
        <div className="flex flex-col items-center mb-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt="User"
            className="w-14 h-14 rounded-full mb-2 border-2 border-white"
          />
          <span className="text-lg font-semibold">Bahodirjon</span>
        </div>

        <nav>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`p-3 flex items-center gap-3 cursor-pointer rounded-l-lg transition-all duration-300 ${
                  click === item.label
                    ? "bg-white text-blue-700 font-semibold shadow-md"
                    : "hover:bg-blue-600 hover:text-white"
                }`}
                onClick={() => setClick(item.label)}
              >
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1 flex justify-center items-center">
        <h2 className="text-3xl font-semibold text-gray-700">{click}</h2>
      </main>
    </div>
  );
}

export default Home;
