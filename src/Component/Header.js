import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utillity/constant";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utillity/useOnlineStatus";
import UserContext from "../utillity/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext); 

  return (
    <div className="flex justify-between bg-white-100 shadow-lg border-gray-300">
      <div className="relative w-36">
        <img alt="logo" className="absolute inset-0 object-cover mix-blend-multiply" src={LOGO_URL}></img>
      </div>
      <div>
        <ul className="m-4 py-6 px-4 flex items-center">
          <li className="mx-4 text-gray-700 font-medium cursor-pointer text-lg">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="mx-4 text-gray-700 font-medium cursor-pointer text-lg hover:text-orange-600"><Link to="/">Home</Link></li>
          <li className="mx-4 text-gray-700 font-medium cursor-pointer text-lg hover:text-orange-600"><Link to="/about">About Us</Link></li>
          <li className="mx-4 text-gray-700 font-medium cursor-pointer text-lg hover:text-orange-600"><Link to="/contact">Contact Us</Link></li>
          <li className="mx-4 text-gray-700 font-medium cursor-pointer text-lg hover:text-orange-600"><Link to="/cart">Cart</Link></li>
          <li className="mx-4 text-gray-700 font-medium cursor-pointer text-lg hover:text-orange-600"><Link to="/grocery">Grocery</Link></li>
          <button
            className="mx-4 text-gray-700 font-medium cursor-pointer text-lg hover:text-orange-600"
            onClick={() => {
              {
                btnName === "LogIn"
                  ? setBtnName("LogOut")
                  : setBtnName("LogIn");
              }
            }}
          >
            {btnName === "LogIn" ? "LogIn" : "LogOut"}
          </button>
          <li className="mx-4 text-orange-600 font-medium cursor-pointer text-lg">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
