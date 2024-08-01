import logo from "./images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
  return true;
};
export function Header() {
  const isOnline=useOnline()

  const [isloggedIn, setIsLoggedIn] = useState(true);
  const [title, setTitle] = useState("DRK");
  return (
    <>
      <div className="header">
        <a href="/">
          <img src={logo} alt="logo of company" />
        </a>
        <h1>{title}</h1>
        {/* <button onClick={() => setTitle("Develop React Kingdom")}>
          {" "}
          Get Full Form
        </button> */}
        <div className="nav-items">
          <ul>
            <li>
              {" "}
              <Link to="/milkVilla">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact"> Contact</Link>
            </li>
            <li>
              {" "}
              <Link to="/services"> Services</Link>
            </li>
           
          </ul>
        </div>
        <h1>{isOnline? "🟢Online🟢 ":"🔴Offline🔴"}</h1>
        {
          // javascript expression work here only and statement not work
          isloggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Login
            </button>
          )
        }
      </div>
    </>
  );
}
