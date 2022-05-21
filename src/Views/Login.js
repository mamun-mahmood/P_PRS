import React from "react";
// import { auth, provider } from "../Components/Firebase";
// import { signInWithPopup } from "firebase/auth";
import logo from "../asset/Logo.png";
import google from "../asset/google.svg";
import facebook from "../asset/facebook.svg";
import playStore from "../asset/google-play-badge.png"
import { useAuth } from "../Components/AuthContext";
const Login = () => {
  //all sign in methods from auth context
  const { signInWithGoogle } = useAuth();
  
  const signInG = async () => {
    await signInWithGoogle();
  };
  return (
    <div
      style={{
        backgroundColor: "#009788",
        height: "98vh",
        marginTop: "1vh",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={logo} style={{ width: "100px", marginTop: "100px" }} alt="" />
      </div>
      <p style={{ textAlign: "center", marginTop: "10px", fontSize: "24px", }}>
        Word Store
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p>Sign In Using:</p>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
            <img
              onClick={signInG}
              style={{ width: "40px" }}
              src={google}
              alt=""
            />
            <img style={{ width: "40px" }} src={facebook} alt="" />
          </div>
        </div>
      </div>
      <div>
          <a href="https://play.google.com/store/apps/details?id=com.sajeeb.wordbank" target="blank">
          <img style={{width: '40%', marginLeft: '30%', marginTop: '100px', cursor: 'pointer'}} src={playStore} alt="" />
          </a>
      </div>
    </div>
  );
};

export default Login;
