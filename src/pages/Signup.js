import React from "react";
import "./signup.css"

const Signup = () => {
  return (
    <>
      <main>
        <div className="signup-box">
          <h2>Signup</h2>
          <label htmlFor="email-input" className="label">
            Email address
          </label>
          <input
            type="text"
            placeholder="mohit@gmail.com"
            className="email-input"
          />
          <label htmlFor="password-input" className="label">
            Password
          </label>
          <input
            type="password"
            placeholder="************"
            className="password-input"
          />

          <div className="row-1">
            <label>
              <input type="checkbox" />I accept all Terms & Conditions
            </label>
          </div>

          <button>Create New Account</button>
          <div className="icon-new-account">
            <p>Already have an account</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="newaccount-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export { Signup };
