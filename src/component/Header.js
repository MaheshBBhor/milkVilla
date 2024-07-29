import logo from "./images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const loggedInUser = () => {
  return true;
};
export function Header() {
  const [isloggedIn, setIsLoggedIn] = useState(true);
  const [title, setTitle] = useState("shopping App");
  return (
    <>
      <div className="header">
        <a href="/">
          <img src={logo} alt="logo of company" />
        </a>
        <h1>{title}</h1>
        <button onClick={() => setTitle("Shopping start")}>
          {" "}
          Change title
        </button>
        <div className="nav-items">
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </div>
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
