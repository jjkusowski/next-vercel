import React from "react";
import { useIntl } from "react-intl";
import styles from "./footer.module.css";
import { LocaleKey } from "../../common/layouts/interfaces";
import { footerMessages as messages } from "../../common/layouts/translations";
import commonLinks from "../../common/layouts/links";

const linkData = [
  LocaleKey.Terms,
  LocaleKey.Privacy,
  LocaleKey.Cookies,
  LocaleKey.Trademarks,
];

const FooterTerms = (): JSX.Element => {
  const { formatMessage } = useIntl();

  const links = linkData.map((linkKey) => {
    return (
      <li key={linkKey}>
        <a
          className="no-underline hover:text-gray-500"
          href={formatMessage(commonLinks[linkKey])}
          target="_blank"
          rel="noreferrer"
        >
          {formatMessage(messages[linkKey])}
        </a>
      </li>
    );
  });

  return (
    <div className={`${styles["wf-legal"]} h-8 mt-8 hidden lg:inline-block`}>
      <ul
        className={`${styles["wf-legal-list"]} float-right ml-8 text-white flex relative list-none text-sm`}
      >
        {links}
      </ul>
      <div className={`${styles.copyright} text-white float-right text-sm`}>
        {formatMessage(messages[LocaleKey.Affiliates], {
          date: new Date().getFullYear(),
        })}{" "}
        {formatMessage(messages[LocaleKey.Rights])}
      </div>
    </div>
  );
};

export default FooterTerms;
