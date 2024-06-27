import React from "react";
import "./_loginScreen.scss";
import ytlogo from "../../../images/youtube-logo-hd-8.png";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img src={ytlogo} alt="NA" />
        <button>Login with google</button>
        <p>This project is made using Youtube DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
