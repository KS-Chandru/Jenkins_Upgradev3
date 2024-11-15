"use client";
import React, { useState } from "react";
import "./Login.css";
import Image from "next/image";

const Login = () => {
  const [visiblity, setVisiblity] = useState(true);
  return (
    <>
      <div className="outerbox">
        <img src="next.svg" alt="" />
        <h1>Login Page</h1>
        <div className="contentbox">
          <label htmlFor="">Enter UserName</label>
          <input type="text" />
          <label htmlFor="">Enter Password</label>
          <div className="passvis">
            <input type="text" />
            <img src="/visible.svg" alt="" />
          </div>
        </div>
        <div className="btns">
          <button className="logn">Login</button>
          <button className="sign">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Login;
