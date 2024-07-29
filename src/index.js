import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { Header } from "./component/Header.js";
import { Body } from "./component/Body.js";
import { Footer } from "./component/Footer.js";
import Error from "./component/Error.js";
import { Contact } from "./component/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About.js";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <>
      {Header()}
      <Outlet />
      {/* {Body()} */}
      {/* <Error/> */}
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
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
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
