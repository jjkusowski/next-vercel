/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import styles from "./navbar.module.css";
import { checkUser } from "../../public/static/Signin";

class SignIn extends React.Component {
  validateEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const email = document.getElementById("email").textContent;
    checkUser(email);
  };

  render() {
    return (
      <div
        className={`lg:bg-white text-black absolute lg:fixed top-20 lg:right-64 lg:px-8 ${styles["right-signin"]} mt-6 pr-8`}
      >
        <h3 className="mt-8 text-xl font-normal">Sign in</h3>
        <p className="mt-4 text-base font-light">
          Sign in to your Webex account.{" "}
        </p>
        <form className="mt-2" onSubmit={this.validateEmail}>
          <label className="p-0 m-0 font-medium">Username</label>
          <input
            id="email"
            type="email"
            className={`rounded	block w-full py-1.5 px-3 font-normal text-base text-black bg-white bg-clip-padding mt-2 ${styles["border-signin"]} h-8 `}
            placeholder="Email Address"
          />
          <p className="mt-8 font-light font-base">
            <button
              type="submit"
              className={`rounded-3xl	mt-8 ${styles["signin-bg"]} block w-full text-white font-normal text-center align-middle	mb-8`}
            >
              Sign In
            </button>
          </p>
        </form>
        <p className="mt-8 mb-8 text-sm font-light text-center">
          Need help signing in?
          <a
            data-click-id="global_primary_nav_button_signin"
            href="https://help.webex.com/en-us/n5q6x5j/Sign-In-Issues-with-Webex"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm text-blue text-normal"
          >
            Contact Support
          </a>
        </p>
      </div>
    );
  }
}

export default SignIn;
