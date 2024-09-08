import final3 from "./images/final3.png";
import { useState, useContext } from "react";
import { Link ,useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { calculator1 } from "../utils/calculator1";
import { UserContext } from "../utils/userContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  return true;
};

export function Header() {
  const isOnline = useOnline();
  console.log(calculator1("+ 3 4"));
  const { user } = useContext(UserContext);

  const cartItems=useSelector((store)=>store.cart.items)

  const [isloggedIn, setIsLoggedIn] = useState(true);
  const [title, setTitle] = useState("RDN");
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggedIn(false); // Update the state
    window.location.reload(); 
    // Clear any additional user data or context if needed
    // navigate("/milkVilla/");
  };
  return (
    <>
      <div className="flex flex-wrap bg-pink-100 p-4 shadow-xl items-center justify-center">
        {/* <a href="/milkVilla"> */}
          <img src={final3} alt="logo of company" className="h-16 md:h-32" />
        {/* </a> */}
        <h1 className="text-black text-lg font-semibold ml-4 md:ml-20 mt-2 md:mt-0">{title}</h1>

        <div className="ml-auto mt-2 md:mt-0">
          <ul className="flex flex-wrap justify-center">
            <li className="px-2 text-blue-950 hover:text-purple-400 underline transition-colors duration-300">
              <Link to="/milkVilla">Home</Link>
            </li>
            <li className="px-2 text-blue-950 hover:text-purple-400 underline transition-colors duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2 text-blue-950 hover:text-purple-400 underline transition-colors duration-300">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2 text-blue-950 hover:text-purple-400 underline transition-colors duration-300">
              <Link to="/services">Services</Link>
            </li>
            <li className="px-2 text-blue-950 hover:text-purple-400 underline transition-colors duration-300">
              <Link to="/cart">Cart-{cartItems.length}</Link>
            </li>
          </ul>
        </div>

        <h1 className="ml-4 md:ml-12 mr-4 md:mr-12 text-blue-950 hover:text-blue-500 transition-colors duration-300">
          {isOnline ? "🟢Online🟢" : "🔴Offline🔴"}
        </h1>

        <div className="mr-4 mt-2 md:mt-0">
          {isloggedIn ? (
            <div className="text-center">
              <button
                className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700"
                // onClick={() => setIsLoggedIn(false)}
                onClick={handleLogout} 
              >
                Logout
              </button>
              <div className="bg-indigo-600 text-white font-semibold mt-1 py-2 px-4 rounded-lg hover:bg-indigo-700">
                <h1>
                  Hello <p>{user.name.toUpperCase()}</p>
                </h1>
                <h1>Welcome to React application</h1>
              </div>
            </div>
          ) : ""
          // (
          //   <div className="text-center">
          //     <button
          //       className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700"
          //       onClick={() => setIsLoggedIn(true)}
          //     >
          //       Login
          //     </button>
          //     <h1>
          //       Hello <p className="font-bold">{user.name}</p>
          //     </h1>
          //     <h1>Please click on the login button</h1>
          //   </div>
          // )
          }
        </div>
      </div>
    </>
  );
}
