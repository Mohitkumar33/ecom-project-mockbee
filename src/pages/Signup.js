import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import "./signup.css"

const Signup = () => {
  return (
    <>
    <Navbar/>
      <main>
        <div class="signup-box">
          <h2>Signup</h2>
          <label for="email-input" class="label">
            Email address
          </label>
          <input
            type="text"
            placeholder="mohit@gmail.com"
            class="email-input"
          />
          <label for="password-input" class="label">
            Password
          </label>
          <input
            type="password"
            placeholder="************"
            class="password-input"
          />

          <div class="row-1">
            <label>
              <input type="checkbox" />I accept all Terms & Conditions
            </label>
          </div>

          <button>Create New Account</button>
          <div class="icon-new-account">
            <p>Already have an account</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="newaccount-icon"
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
