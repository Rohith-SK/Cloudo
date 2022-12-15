import React from "react";

import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "../components/Footer.components";
import Header from "../components/Header.components";
import Home from "../pages/Home.pages";
import SignIn from "../pages/SignIn.pages";

const AddonElements = () => (
  <>
    <Header />

    <Outlet />
    {/* <Footer /> */}
  </>
);

//footers

const routers = createBrowserRouter([
  {
    path: "/",
    element: <AddonElements />, //addon elements
    children: [
      {
        path: "/home",
        element: <Home />, //home page
      },
      {
        path: "/signin",
        element: <SignIn />, //signin
      },
      {
        path: "/signup",
        element: "", //signup
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routers;
