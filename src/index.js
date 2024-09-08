import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider  } from "react-redux";
import TailwindInjector from "./utils/TailwindInjector";
import { Header } from "./component/Header.js";
import { Body } from "./component/Body.js";
import { Cart } from "./component/Cart.js";
import Login from "./component/Login";
import { UserContext } from "./utils/userContext";
import Footer from "./component/Footer.js";
import Error from "./component/Error.js";
import Services from "./component/Services.js";
import { Contact } from "./component/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About.js";
import reportWebVitals from "./reportWebVitals";
import store from "./utils/store.js";

function App() {
  const [user, setUser] = useState({
    name:"",
    email:""
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <>
    <Provider store={store}>
     <UserContext.Provider value={{ user, setUser }}> 
      <TailwindInjector />
      {loggedIn ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
      </UserContext.Provider>
      </Provider>
    </>
    

  );

}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/milkVilla",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

reportWebVitals();
