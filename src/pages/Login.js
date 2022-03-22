import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import "./login.css"

const Login = () => {
  return (
    <>
    <Navbar/>
    <main>
      <div className="login-box">
            <h2>Login</h2>
            <label className="label">Email address</label>
            <input type="text" placeholder="mohit@gmail.com" className="email-input"/>
            <label className="label">Password</label>
            <input type="password" placeholder="************" className="password-input"/>
            <div className="row-1">
                <div>
                    <label><input type="checkbox"/>Remember me</label>
                </div>
                <p><a href="#">Forgot your Password?</a></p>
            </div>
            <button>Login</button>
            <div className="icon-new-account">
                <p>Create New Account</p>
                <span><svg xmlns="http://www.w3.org/2000/svg" className="newaccount-icon" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>

        </div>
        </main>
    </>
  );
};

export { Login };
