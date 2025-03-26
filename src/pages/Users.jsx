import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function Users() {
  const [users] = useState([
    { name: "Bahodirjon", online: true },
    { name: "Jasur", online: true },
    { name: "Doniyor", online: true },
    { name: "Jahongir", online: true },
    { name: "Sarvar", online: false },
    { name: "Shahzod", online: false },
    { name: "Alisher", online: false },
    { name: "Doston", online: false },
    { name: "Umid", online: false },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        🟢 Active Users
      </h3>
      <ul className="space-y-3">
        {users.map((user) => (
          <li
            key={user.name}
            className="flex items-center gap-3 p-3 rounded-lg shadow-md transition-transform transform hover:scale-105
             bg-gradient-to-r from-gray-100 to-gray-50"
          >
            <FaUserCircle className="text-2xl text-gray-600" />
            <span className="text-lg font-medium text-gray-800">
              {user.name}
            </span>
            <span
              className={`ml-auto w-3 h-3 rounded-full ${
                user.online ? "bg-green-500" : "bg-gray-400"
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
