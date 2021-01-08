import React from "react";
import { useIntl } from "react-intl";
import styles from "./footer.module.css";
import { LocaleKey } from "../../common/layouts/interfaces";
import messages from "../../common/layouts/translations";

const linkData = [
  {
    href: "https://www.cisco.com/c/en/us/about/legal/terms-conditions.html",
    id: "terms",
  },
  {
    href: "https://www.cisco.com/c/en/us/about/legal/privacy-full.html",
    id: "privacy",
  },
  {
    href: "https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies",
    id: "cookies",
  },
  {
    href: "https://www.cisco.com/web/siteassets/legal/trademark.html",
    id: "trademarks",
  },
];

const FooterTerms = () => {
  const { formatMessage } = useIntl();

  const links = linkData.map((link) => {
    const { href, id } = link;
    return (
      <li key={id}>
        <a
          className="no-underline hover:text-gray-500"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {formatMessage(messages[id])}
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
