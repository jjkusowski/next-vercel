import React from "react";
import styles from "./footer.module.css";

const FooterTwitter = () => {

    return (
        <div className={`${styles["wf-twitters"]} mt-12`}>
            <a
              data-theme="dark"
              data-height="485"
              data-chrome="noheader nofooter noborders noscrollbar transparent"
              className="twitter-timeline"
                    href="https://twitter.com/Webex?ref_src=twsrc%5Etfw">Tweets by Webex</a>
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            </div>
    );
};

export default FooterTwitter;