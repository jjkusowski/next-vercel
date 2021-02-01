/* eslint-disable prettier/prettier */
import Image from "next/image";
import { useIntl } from "react-intl";
import Link from "next/link";
import { solutions, industries, features } from "./data";
import { LocaleKey } from "../../common/layouts/interfaces";
import {navMessages} from "../../common/layouts/translations"
import links from "../../common/layouts/links";
import Grid from "../Grid";

const List = ({ title, items }: {title: string, items: { label, href }[]}) => {
  return (
    <div className="lg:border-l">
      <div className="py-2 lg:pl-8">
        <div className="text-xl whitespace-pre-line">
          {title}
        </div>
        <ul>
          {items.map((item) => (
            <li className="pt-4 text-base font-light" key={item.label}>
              <a href={item.href} className="block whitespace-pre-line lg:inline hover:text-blue">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

const Solutions = () => {
  const {formatMessage} = useIntl();

  const otherSolutions = solutions.map(({nameKey, hrefKey}) => ({
    label: formatMessage(navMessages[nameKey]),
    href: formatMessage(links[hrefKey])
  }));

  const industriesList = industries.map(({ nameKey, hrefKey }) => ({
    label: formatMessage(navMessages[nameKey]),
    href: formatMessage(links[hrefKey])
  }));

  return (
    <>
      <div className="xl:nav-container">
        <Grid cols={{xs: 0, lg: 5}} rows={{xs: 1, lg: 0}} className="gap-10 lg:grid lg:grid-cols-5 lg:w-full xl:nav-container lg:pt-6">
          <Grid cols={{xs: 1, lg: 4}} rows={{lg: 3}} className="gap-3 pt-4 lg:col-span-3 lg:gap-4 lg:pt-0">
            <div className="flex items-center justify-center lg:col-span-1 lg:pl-4 lg:self-auto">
              <Image layout="fixed" alt="solutions" src="https://www.webex.com/content/dam/wbx/us/images/hp/header/solutions.svg" height="50" width="75"/>
            </div>
            <div className="lg:col-span-3 lg:my-auto">
              <div className="text-center lg:col-span-3 lg:text-left">
                <Link href={formatMessage(links[LocaleKey.AllNewWebex])}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="block py-2 text-xl font-normal text-webex-title hover:text-blue">
                    {formatMessage(navMessages[LocaleKey.Introducing])}
                  </a>
                </Link>
                <div className="text-sm whitespace-pre-line text-webex-gray">
                  {formatMessage(navMessages[LocaleKey.EasyToUse], {
                    bold(str) { return <b>{str}</b>},
                  })}
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:row-span-2" />
            {features.map((feature) => {
              return (<div className="pt-4 whitespace-pre-line lg:col-span-1" key={feature.nameKey}>
                <div className="text-lg font-light">
                  <Link href={formatMessage(links[feature.hrefKey])}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="block hover:text-blue lg:inline">{formatMessage(navMessages[feature.nameKey])}</a>
                  </Link>
                </div>
                <div className="pt-4 text-sm leading-4 lg:pt-1 text-webex-gray">
                  {formatMessage(navMessages[feature.descriptionKey])}
                </div>
              </div>)
            })}
            <div className="flex items-center pt-2 lg:pt-0 lg:col-span-3 lg:col-start-2">
              <a href={formatMessage(links[LocaleKey.Cart])} className="block w-full px-4 py-3 text-center border rounded-3xl border-webex-title text-webex-title hover:bg-webex-title focus:text-white hover:text-white">
                {formatMessage(navMessages[LocaleKey.GetItFree])}
              </a>
            </div>
          </Grid>
          <List title={formatMessage(navMessages[LocaleKey.OtherSolutions])} items={otherSolutions} />
          <List title={formatMessage(navMessages[LocaleKey.Industries])} items={industriesList} />
        </Grid>
      </div>
    </>
  )
};

export default Solutions;
