
import final3 from "./images/final3.png";


import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import {calculator1} from "../utils/calculator1";


const loggedInUser = () => {
  return true;
};

export function Header() {
  const isOnline = useOnline();
  console.log(calculator1("+ 3 4"))

  const [isloggedIn, setIsLoggedIn] = useState(true);
  const [title, setTitle] = useState("RDN");
  return (
    <>
      <div className="flex justify-between bg-pink-100 p-4 shadow-xl container mx-auto  items-center">
        <a href="/">
          <img src={final3} alt="logo of company" className="h-44 pt-3 p-2" />
        </a>
        <h1 className=" p-20 text-black text-lg font-semibold">{title}</h1>
        {/* <button onClick={() => setTitle("Develop React Kingdom")}>
          {" "}
          Get Full Form
        </button> */}
        <div className="nav-items">
          <ul className="flex py-20">
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
        <h1 className="p-20  text-blue-950 hover:text-blue-500  transition-colors duration-300">
          {isOnline ? "🟢Online🟢 " : "🔴Offline🔴"}
        </h1>
        <div className=" p-20 mr-4 ">
          {
            // javascript expression work here only and statement not work
            isloggedIn ? (
              <button
                className=" bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700"
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 "
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                Login
              </button>
            )
          }
        </div>
      </div>
    </>
  );
}
