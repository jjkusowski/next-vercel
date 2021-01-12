import { twitterClass, twitterHref } from "../../lib/twitter";
import { TwitterUIComponent } from "./interfaces";

const TwitterUI: TwitterUIComponent = ({ children }) => {
  return (
    <a
      data-theme="dark"
      data-height="485"
      data-chrome="noheader nofooter noborders noscrollbar transparent"
      className={`${twitterClass}`}
      href={twitterHref}
    >
      {children}
      <div className="w-32 h-32 mt-8 ease-linear border-8 border-t-8 border-gray-200 rounded-full loader" />
    </a>
  );
};

export default TwitterUI;
