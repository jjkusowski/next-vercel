import React from "react";
import styles from "./footer.module.css";

const FooterTerms = () => {
  return (
    <div className={`${styles["wf-legal"]} h-8 mt-8 hidden lg:inline-block`}>
      <ul
        className={`${styles["wf-legal-list"]} float-right ml-8 text-white flex relative list-none text-sm`}
      >
        <li>
          <a
            className="no-underline"
            href="https://www.cisco.com/c/en/us/about/legal/terms-conditions.html"
            target="_blank"
            rel="noreferrer"
          >
            Terms & Conditions
          </a>
        </li>
        <li>
          <a
            className="no-underline"
            href="https://www.cisco.com/c/en/us/about/legal/privacy-full.html"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Statement
          </a>
        </li>
        <li>
          <a
            className="no-underline"
            href="https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies"
            target="_blank"
            rel="noreferrer"
          >
            Cookies
          </a>
        </li>
        <li>
          <a
            className="no-underline"
            href="https://www.cisco.com/web/siteassets/legal/trademark.html"
            target="_blank"
            rel="noreferrer"
          >
            Trademarks
          </a>
        </li>
      </ul>
      <div className={`${styles.copyright} text-white float-right text-sm`}>
        &copy; <span>{new Date().getFullYear()}</span> Cisco and/or its
        affiliates. All rights reserved.
      </div>
    </div>
  );
};

export default FooterTerms;
