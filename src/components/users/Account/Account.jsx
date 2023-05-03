import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import { useState, useEffect } from "react";

const Account = () => {
  const { user, logout } = UserAuth();
  const [userAuth, setUserAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    user ? setUserAuth(user) : navigate("/");
  }, []);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      setUserAuth(null);
      alert("You are logged out");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    // <div>
    //   <h1>ACCOUNT</h1>
    //   <p>User Email: {userAuth && userAuth.email}</p>

    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-xs">
        <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <img
              className="w-60 h-60 rounded-full mx-auto"
              src={
                "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png"
              }
              alt="Profile-img"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 dark:text-slate-400 font-medium leading-8">
              {userAuth && userAuth.displayName}
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold"></div>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2 text-blue-400">
                    {userAuth && userAuth.email}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="text-center my-3">
              <a
                className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="block w-full rounded-lg bg-indigo-600 mt-2 px-5 py-3 text-sm font-medium text-white"
        >
          Logout
        </button>{" "}
      </div>
    </div>
  );
};

export default Account;
