/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import { useRouter } from "next/router";
import { LocaleLink } from "./interfaces";

/**
 * NOTE: due to messiness with Next/Link component accepting a fnc component as a child,
 * <a> has been intentionally repeated. Do not abstract into shared fnc component unless you know
 * what you're doing!!
 */

// change styles here to ensure links are styled identically
const classesList =
  "text-sm font-normal leading-8 lg:text-black hover:text-gray-500";

const CMSLocaleLink: LocaleLink = ({ country, path }) => {
  const { displayName, dataId } = country;
  return (
    <Link href={path} locale={dataId}>
      <a className={classesList}>{displayName}</a>
    </Link>
  );
};

const LegacyLocaleLink: LocaleLink = ({ country }) => {
  const { href, displayName, dataId } = country;
  return (
    <a className={classesList} href={href} key={dataId}>
      {displayName}
    </a>
  );
};

// automagically uses Next/Link component to change locale when a cms-driven version of the page is available
const LocaleLinkUI: LocaleLink = ({ country }) => {
  const { pathname } = useRouter();

  const { cmsEnabled } = country;

  if (cmsEnabled) {
    return <CMSLocaleLink country={country} path={pathname} />;
  }

  return <LegacyLocaleLink country={country} />;
};

export default LocaleLinkUI;
