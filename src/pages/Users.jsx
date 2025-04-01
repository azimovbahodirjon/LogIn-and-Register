import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

function Users() {
  const displayName = useSelector((state) => state.user.displayName);
  console.log(displayName);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        🟢 Active Users
      </h3>
      <ul className="space-y-3">
        {displayName && (
          <li
            key={displayName}
            className="flex items-center gap-3 p-3 rounded-lg shadow-md transition-transform transform hover:scale-105
             bg-gradient-to-r from-gray-100 to-gray-50"
          >
            <FaUserCircle className="text-2xl text-gray-600" />
            <span className="text-lg font-medium text-gray-800">
              {displayName}
            </span>
            <span className="ml-auto w-3 h-3 rounded-full bg-green-500"></span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Users;
