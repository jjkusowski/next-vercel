import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import styles from "./footer.module.css";
import { LocaleKey } from "../../common/layouts/interfaces";
import messages from "../../common/layouts/translations";

const FooterTwitter = (): JSX.Element => {
  const { formatMessage } = useIntl();

  useEffect(() => {
    const setOnLoad = () => {
      window.onload = () => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";

        const twitterAnchor = document.querySelector(".twitter-timeline");
        twitterAnchor.after(script);
      };
    };

    setOnLoad();
  }, []);

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
    </div>
  );
};

export default FooterTwitter;
