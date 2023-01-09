import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const [jwt, setJwt] = useState("");
  return jwt ? children : <Navigate to="/signin" />;
};

export default PrivateRoutes;
