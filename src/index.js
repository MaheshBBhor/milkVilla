import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { Header } from "./component/Header.js";
import { Body } from "./component/Body.js";
import Footer  from "./component/Footer.js";
import Error from "./component/Error.js";
import Services from "./component/Services.js";
import { Contact } from "./component/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About.js";
import reportWebVitals from "./reportWebVitals";
// import BodyCo from "./component/classComponent/BodyCo"

function App() {
  return (
    <>
      {Header()}
      <Outlet />
      {/* {Body()} */}
      {/* <Error/> */}
      {/* <BodyCo name={"Mahesh Bhor"}/> */}

      <Footer />
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
