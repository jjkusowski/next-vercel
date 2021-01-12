import { useEffect } from "react";
import { addScriptToDOM } from "../../lib/twitter";
import { TwitterComponent } from "./interfaces";
import TwitterUI from "./TwitterUI";

const Twitter: TwitterComponent = ({ children, show }) => {
  useEffect(() => {
    if (show) {
      addScriptToDOM();
    }
  }, [show]);

  return <TwitterUI>{children}</TwitterUI>;
};

export default Twitter;
