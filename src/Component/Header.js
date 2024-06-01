import { useEffect, useState } from "react";
import { LOGO_URL } from "../utillity/constant";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utillity/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-conatiner">
        <img alt="logo" className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <button
            className="header-btn"
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
