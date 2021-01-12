import React from "react";
import FooterLinks from "./FooterLinks";
import FooterLegal from "./FooterLegal";
import FooterTwitter from "./FooterTwitter";
import FooterTerms from "./FooterTerms";
import styles from "./footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-brand-footer">
      <div
        className={`${styles["wbx-container"]} mx-auto flex flex-wrap px-10`}
      >
        <div className={`${styles["wbx-left"]} flex flex-col justify-between`}>
          <a
            className={`${styles["wf-logo"]} hidden lg:inline-block`}
            href="https://www.webex.com/"
            aria-label="Cisco Webex logo"
          >
            <span
              className={`${styles["wf-logo-icon"]} h-12 w-48 inline-block bg-center`}
            />
          </a>
          <FooterTwitter />
          <FooterLegal />
        </div>
        <div className="pt-16 lg:w-9/12 lg:pl-40 lg:pl-8">
          <FooterLinks />
          <FooterTerms />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
