import React from "react";
import { useEffect } from "react";

import "./_loginScreen.scss";
import ytlogo from "../../../src/images/youtube-logo-hd-8.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={ytlogo} alt="NA" />
        <button onClick={handleLogin}>Login with google</button>
        <p>This project is made using Youtube DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
