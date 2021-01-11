import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";

import countries from "../../common/locales/countries";
import data from "./data";
import styles from "./footer.module.css";
import { LocaleKey } from "../../common/layouts/interfaces";
import { FooterLinkListComponent } from "./interfaces";
import messages from "../../common/layouts/translations";
import links from "../../common/layouts/links";
import useCurrentLocale from "../../hooks/useCurrentLocale";
import ClickAwayWrapper from "../ClickAwayWrapper";
import useIsMobile from "../../hooks/useIsMobile";
import LocaleLink from "../LocaleLink";

const FooterLinkList: FooterLinkListComponent = ({ title, listItems }) => {
  const { formatMessage } = useIntl();
  const [open, setOpen] = useState(false);
  // determines if mobile width or not
  const isMobile = useIsMobile();

  // reset open state on relevant window size changes
  useEffect(() => {
    setOpen(false);
  }, [isMobile]);

  const toggleOpen = () => {
    setOpen((currentState) => !currentState);
  };

  const displayClassList = open ? "block" : "hidden";

  return (
    <>
      <div
        className={`${styles["width-footer"]} text-white ${styles["wbx-links-wrapper"]}`}
      >
        <div>
          <button
            className={`${styles["footer-category"]} text-base font-normal mb-8 uppercase w-full lg:hidden`}
            onClick={toggleOpen}
            type="button"
          >
            {title}
          </button>
          <div
            className={`${styles["footer-category"]} text-base font-normal mb-8 uppercase w-full hidden lg:block`}
          >
            {title}
          </div>
          <ul
            className={`list-none ${styles["wbx-list"]} ${displayClassList} lg:block -mt-4 mb-6 lg:mt-0 lg:mb-0`}
          >
            {listItems.map((localeKey) => (
              <li className="py-2 text-sm " key={localeKey}>
                <a
                  className="text-sm font-light no-underline hover:text-gray-600"
                  href={formatMessage(links[localeKey])}
                >
                  {formatMessage(messages[localeKey])}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

// TODO: write common picklist component and refactor this to consume it
const FooterRegionPicker = () => {
  const { locale } = useCurrentLocale();

  const [open, setOpen] = useState(false);

  const closePicklist = () => setOpen(false);

  const togglePickList = () => {
    setOpen((curr) => !curr);
  };

  const collapsedContainerClassList = open ? "" : `${styles.collapsed}`;
  const collapsedULClassList = open ? "show" : "hidden";

  const { displayName: currentLocaleDisplayName } = countries.find(
    (countryData) => countryData.dataId === locale
  );

  return (
    <ClickAwayWrapper callback={closePicklist}>
      <div className={`${styles["wbx-region"]} relative lg:h-8 lg:mt-8`}>
        <div
          className={`${styles["wbx-region-container"]} ${collapsedContainerClassList} lg:absolute right-8  lg:right-12`}
        >
          <button
            className={`${styles["wf-region-name"]} text-sm pr-5 pl-10 relative text-white cursor-pointer`}
            aria-expanded={open}
            onClick={togglePickList}
            type="button"
          >
            {currentLocaleDisplayName}
          </button>

          <ul
            className={`${styles["wf-region-list"]} ${styles["region-select-list"]} ${collapsedULClassList}`}
            aria-hidden={!open}
          >
            {countries.map((localeData) => {
              const { dataId } = localeData;
              return (
                <li data-id={dataId} key={dataId}>
                  <LocaleLink country={localeData} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </ClickAwayWrapper>
  );
};

const FooterLinksUI = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="text-center lg:text-left">
      {/* desktop logo */}
      <a
        className="lg:hidden"
        href="https://www.webex.com/"
        aria-label="Cisco Webex logo"
      >
        <span className={`${styles["wf-logo-icon"]}`} />
      </a>
      <div className="flex flex-wrap justify-between mt-8">
        <FooterLinkList
          title={formatMessage(messages[LocaleKey.Solutions])}
          listItems={data[LocaleKey.Solutions]}
        />
        <FooterLinkList
          title={formatMessage(messages[LocaleKey.Features])}
          listItems={data[LocaleKey.Features]}
        />
        <FooterLinkList
          title={formatMessage(messages[LocaleKey.WebexFor])}
          listItems={data[LocaleKey.WebexFor]}
        />
        <FooterLinkList
          title={formatMessage(messages[LocaleKey.Help])}
          listItems={data[LocaleKey.Help]}
        />
        <FooterLinkList
          title={formatMessage(messages[LocaleKey.Company])}
          listItems={data[LocaleKey.Company]}
        />
      </div>
      <FooterRegionPicker />
    </div>
  );
};

const FooterLinks = (): JSX.Element => {
  return <FooterLinksUI />;
};

export default FooterLinks;
