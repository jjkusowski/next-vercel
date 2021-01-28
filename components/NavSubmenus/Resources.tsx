import { useIntl } from "react-intl";
import styles from "./navbar.module.css";
import { resources } from "./data";
import links from "../../common/layouts/links";
import { navMessages } from "../../common/layouts/translations";

const Resources = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="left-0 right-0 w-auto h-auto pt-0 pl-0 mt-6 text-left bg-white lg:fixed top-20">
      <div
        className={`px-8 lg:px-32 w-full ${styles["border-top"]} relative left-0 mx-auto`}
      >
        <div className="flex flex-wrap px-0 py-8 -mx-12 list-none md:py-12 md:-mx-8">
          <ul className="flex flex-wrap w-full p-0 m-0 antialiased font-normal list-none">
            {resources.map((resource) => (
              <li
                className="w-full px-4 py-2 mb-0 text-sm font-normal md:w-1/2 lg:w-1/3 md:h-40 md:py-0"
                key={resource.nameKey}
              >
                <a
                  className="text-base font-light leading-loose text-black lg:text-lg"
                  target="_blank"
                  rel="noreferrer"
                  href={formatMessage(links[resource.hrefKey])}
                >
                  {formatMessage(navMessages[resource.nameKey])}
                </a>
                <div
                  className={`w-auto font-light max-w-xs	whitespace-pre-line hidden md:block ${styles["devices-tablet"]} ${styles["max-width-devices"]}`}
                >
                  {formatMessage(navMessages[resource.descriptionKey])}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
