/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { useIntl } from "react-intl";
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
    <div className="top-0 right-0 lg:mt-20 lg:mr-10 lg:absolute">
      <div className="pt-8 bg-white lg:p-8 lg:signin-container">
        <h3 className="text-xl font-normal">
          {formatMessage(navMessages[LocaleKey.SignIn])}
        </h3>
        <p className="mt-4 text-base font-light">
          {formatMessage(navMessages[LocaleKey.SignInToWebex])}
        </p>
        <form className="mt-6" onSubmit={validateEmail}>
          <label className="p-0 m-0 text-sm lg:font-medium">
            {formatMessage(navMessages[LocaleKey.UserName])}
          </label>
          <input
            id="email"
            type="email"
            className="block w-full h-8 px-3 py-5 mt-2 text-base text-black transition-all duration-150 ease-in-out bg-white border rounded font bg-clip-padding focus:outline-none focus:shadow-outline"
            placeholder={formatMessage(
              navMessages[LocaleKey.Email_Placeholder]
            )}
          />
          <p className="mt-8 font-light font-base">
            <button
              type="submit"
              className="block w-full py-2 mt-8 mb-8 text-base font-normal text-center text-white align-middle transition-all duration-150 rounded-3xl bg-webex-dark-blue focus:shadow-outline focus:outline-none"
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
    </div>
  );
};

export default SignIn;
