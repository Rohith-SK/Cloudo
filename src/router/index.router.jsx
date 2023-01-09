import React from "react";

import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header.components";
import Home from "../pages/Home.pages";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import PrivateRoutes from "./privateRoutes";

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
      // {
      //   path: "/home",
      //   element: <Home />, //home page
      // },
      {
        path: "/signin",
        element: <SignIn />, //signin
      },
      {
        path: "/signup",
        element: <SignUp />, //signup
      },
      {
        path: "/home",
        element: (
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routers;
