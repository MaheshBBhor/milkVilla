import final3 from "./images/final3.png";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { calculator1 } from "../utils/calculator1";
import { UserContext } from "../utils/userContext";

const loggedInUser = () => {
  return true;
};

export function Header() {
  const isOnline = useOnline();
  console.log(calculator1("+ 3 4"));
  const { user } = useContext(UserContext);
  console.log(user, "user");

  const [isloggedIn, setIsLoggedIn] = useState(true);
  const [title, setTitle] = useState("RDN");
  return (
    <>
      <div className="flex  bg-pink-100 p-4 shadow-xl   items-center">
        <a href="/about">
          <img src={final3} alt="logo of company" className="h-32 " />
        </a>
        <h1 className="  text-black text-lg font-semibold ml-20">{title}</h1>

        <div className="ml-auto content-end">
          <ul className="flex">
            <li
              href="#home"
              className="px-2 text-blue-950 hover:text-purple-400 underline transition-colors duration-300"
            >
              {" "}
              <Link to="/milkVilla">Home</Link>
            </li>
            <li className="px-2 text-blue-950 hover:text-purple-400 underline  transition-colors duration-300">
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li className="px-2 text-blue-950 hover:text-purple-400 underline transition-colors duration-300">
              {" "}
              <Link to="/contact"> Contact</Link>
            </li>
            <li className="px-2 text-blue-950 hover:text-purple-400 underline  transition-colors duration-300">
              {" "}
              <Link to="/services"> Services</Link>
            </li>
          </ul>
        </div>
        <h1 className="ml-12 mr-12 text-blue-950 hover:text-blue-500  transition-colors duration-300">
          {isOnline ? "🟢Online🟢 " : "🔴Offline🔴"}
        </h1>
        <div>
          <div className="  mr-4 ">
            {
              // javascript expression work here only and statement not work
              isloggedIn ? (
                <div>
                  <button
                    className=" bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700"
                    onClick={() => {
                      setIsLoggedIn(false);
                    }}
                  >
                    Logout
                  </button> 
                  <div>
                <h1>Hello <p>{user.name}</p>  </h1>
                <h1>Welcome to React application</h1>
              </div>
                </div>
              ) : (
                <div>
                <button
                  className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 "
                  onClick={() => {
                    setIsLoggedIn(true);
                  }}
                >
                  Login
                </button>
                <h1>Hello <p className="font-bold">{user.name}</p> </h1>
                <h1>Please click on a login button</h1>
                </div>
              )
            }
            {/* {isloggedIn ? (
              <div>
                <h1>Hello {user.name} </h1>
                <h1>Welcome to React application</h1>
              </div>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
