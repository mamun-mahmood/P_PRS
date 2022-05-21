import React from "react";
import { useAuth } from "./Components/AuthContext";
import Homepage from "./Views/Homepage";
import Login from "./Views/Login";

const Landing = () => {
  const { currentUser } = useAuth();
  return (
    <>{currentUser ? <Homepage /> : <Login />}</>
  );
};

export default Landing;
