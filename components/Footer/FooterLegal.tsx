import { useIntl } from "react-intl";
import styles from "./footer.module.css";
import { LocaleKey } from "../../common/layouts/interfaces";
import { footerMessages as messages } from "../../common/layouts/translations";

const FooterLegal = (): JSX.Element => {
  const { formatMessage } = useIntl();
  return (
    <div className={`${styles["wf-legal"]}`}>
      <ul className={`${styles["wf-legal-list"]} lg:hidden`}>
        <li className="mb-2">
          <a
            href="https://www.cisco.com/c/en/us/about/legal/terms-conditions.html"
            target="_blank"
            rel="noreferrer"
          >
            {formatMessage(messages[LocaleKey.Terms])}
          </a>
        </li>
        <li className="mb-2">
          <a
            href="https://www.cisco.com/c/en/us/about/legal/privacy-full.html"
            target="_blank"
            rel="noreferrer"
          >
            {formatMessage(messages[LocaleKey.Privacy])}
          </a>
        </li>
        <li className="mb-2">
          <a
            href="https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies"
            target="_blank"
            rel="noreferrer"
          >
            {formatMessage(messages[LocaleKey.Cookies])}
          </a>
        </li>
        <li className="mb-2">
          <a
            href="https://www.cisco.com/web/siteassets/legal/trademark.html"
            target="_blank"
            rel="noreferrer"
          >
            {formatMessage(messages[LocaleKey.Trademarks])}
          </a>
        </li>
      </ul>

      <div className={`${styles["wf-social"]} flex justify-around`}>
        <a
          href="https://twitter.com/webex"
          target="_blank"
          rel="noreferrer"
          aria-label="Cisco Webex on twitter"
          title="Cisco Webex on Twitter"
        >
          <svg
            className="inline-block w-4 align-middle fa-w-16"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/webex"
          target="_blank"
          rel="noreferrer"
          aria-label="Cisco Webex on LinkedIn"
          title="Cisco Webex on LinkedIn"
        >
          <svg
            className="inline-block w-4 align-middle fa-w-14"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/webex"
          target="_blank"
          rel="noreferrer"
          aria-label="Cisco Webex on Facebook"
          title="Cisco Webex on Facebook"
        >
          <svg
            className="inline-block w-4 align-middle fa-w-14"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
            />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/c/webex"
          target="_blank"
          rel="noreferrer"
          aria-label="Cisco Webex on YouTube"
          title="Cisco Webex on YouTube"
        >
          <svg
            className="inline-block w-4 align-middle fa-w-18"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            />
          </svg>
        </a>
        <a
          href="https://blog.webex.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Cisco Webex Blog"
          title="Cisco Webex Blog"
        >
          <svg
            className="inline-block w-4 align-middle fa-w-14"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/webex/"
          target="_blank"
          rel="noreferrer"
          aria-label="Cisco Webex on Instagram"
          title="Cisco Webex on Instagram"
        >
          <svg
            className="inline-block w-4 align-middle fa-w-14"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </a>
      </div>
      <div className={`${styles.copyright} lg:hidden`}>
        {formatMessage(messages[LocaleKey.Affiliates], {
          date: new Date().getFullYear(),
        })}
        <br className="visible-xs" />{" "}
        {formatMessage(messages[LocaleKey.Rights])}
      </div>
    </div>
  );
};

export default FooterLegal;
