import React, { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useIntl } from "react-intl";
import styles from "./footer.module.css";
import { LocaleKey } from "../../common/layouts/interfaces";
import messages from "../../common/layouts/translations";
import Twitter from "../Twitter";

const FooterTwitter = (): JSX.Element => {
  const { formatMessage } = useIntl();
  const [showTwitter, setShowTwitter] = useState(false);

  const onViz = (isViz) => {
    if (isViz) {
      setShowTwitter(true);
    }
  };

  return (
    <div className={`${styles["wf-twitters"]} flex justify-center`}>
      <ReactVisibilitySensor onChange={onViz}>
        <Twitter show={showTwitter}>
          {formatMessage(messages[LocaleKey.Twitter])}
        </Twitter>
      </ReactVisibilitySensor>
    </div>
  );
};

export default FooterTwitter;
