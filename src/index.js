import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import "./App.css";
import TailwindInjector from "./utils/TailwindInjector";
import { Header } from "./component/Header.js";
import { Body } from "./component/Body.js";
import Login from "./component/Login";

import Footer from "./component/Footer.js";
import Error from "./component/Error.js";
import Services from "./component/Services.js";
import { Contact } from "./component/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About.js";
import reportWebVitals from "./reportWebVitals";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <>
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
    </>
  );
  // return (
  //   <>
  //     <TailwindInjector />
  //     {Header()}
  //     <Outlet />

  //     <Footer />
  //   </>
  // );
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
