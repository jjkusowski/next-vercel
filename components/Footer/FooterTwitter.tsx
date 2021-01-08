import React from "react";
import { useIntl } from "react-intl";
import styles from "./footer.module.css";
import { LocaleKey } from "../../common/layouts/interfaces";
import messages from "../../common/layouts/translations";

const FooterTwitter = () => {
  const { formatMessage } = useIntl();
  return (
    <div className={`${styles["wf-twitters"]} mt-12`}>
      <a
        data-theme="dark"
        data-height="485"
        data-chrome="noheader nofooter noborders noscrollbar transparent"
        className="twitter-timeline"
        href="https://twitter.com/Webex?ref_src=twsrc%5Etfw"
      >
        {formatMessage(messages[LocaleKey.Twitter])}
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      />
    </div>
  );
};

export default FooterTwitter;
