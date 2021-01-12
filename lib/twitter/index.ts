export const twitterClass = "twitter-timeline";
export const twitterHref = "https://twitter.com/Webex?ref_src=twsrc%5Etfw";

export const addScriptToDOM = (): void => {
  const script = document.createElement("script");
  script.src = "https://platform.twitter.com/widgets.js";
  script.async = true;
  script.charset = "utf-8";

  const twitterAnchor = document.querySelector(".twitter-timeline");
  twitterAnchor.after(script);
};
