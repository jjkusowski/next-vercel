/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { useIntl } from "react-intl";
import styles from "./navbar.module.css";
import { checkUser } from "../../public/static/Signin";
import { LocaleKey } from "../../common/layouts/interfaces";
import { navMessages } from "../../common/layouts/translations";

const SignIn = () => {
  const { formatMessage } = useIntl();

  const validateEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const email = document.getElementById("email").textContent;
    checkUser(email);
  };
  return (
    <div
      className={`lg:bg-white text-black absolute lg:fixed top-20 lg:right-64 lg:px-8 ${styles["right-signin"]} mt-6 pr-8`}
    >
      <h3 className="mt-8 text-xl font-normal">
        {formatMessage(navMessages[LocaleKey.SignIn])}
      </h3>
      <p className="mt-4 text-base font-light">
        {formatMessage(navMessages[LocaleKey.SignInToWebex])}
      </p>
      <form className="mt-2" onSubmit={validateEmail}>
        <label className="p-0 m-0 font-medium">
          {formatMessage(navMessages[LocaleKey.UserName])}
        </label>
        <input
          id="email"
          type="email"
          className={`rounded	block w-full py-1.5 px-3 font-normal text-base text-black bg-white bg-clip-padding mt-2 ${styles["border-signin"]} h-8 `}
          placeholder={formatMessage(navMessages[LocaleKey.Email_Placeholder])}
        />
        <p className="mt-8 font-light font-base">
          <button
            type="submit"
            className={`rounded-3xl	mt-8 ${styles["signin-bg"]} block w-full text-white font-normal text-center align-middle	mb-8`}
          >
            {formatMessage(navMessages[LocaleKey.SignIn])}
          </button>
        </p>
      </form>
      <p className="mt-8 mb-8 text-sm font-light text-center">
        {formatMessage(navMessages[LocaleKey.SignInHelp])}{" "}
        <a
          data-click-id="global_primary_nav_button_signin"
          href="https://help.webex.com/en-us/n5q6x5j/Sign-In-Issues-with-Webex"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-sm text-blue text-normal"
        >
          {formatMessage(navMessages[LocaleKey.ContactSupport])}
        </a>
      </p>
    </div>
  );
};

export default SignIn;
