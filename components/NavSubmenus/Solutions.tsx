/* eslint-disable prettier/prettier */
import Image from "next/image";
import { useIntl } from "react-intl";
import { solutions, industries, features } from "./data";
import styles from "./navbar.module.css";
import { LocaleKey } from "../../common/layouts/interfaces";
import {navMessages} from "../../common/layouts/translations"
import navLinks from "../../common/layouts/links";

const Solutions = () => {
  const {formatMessage} = useIntl();

  const featuresList = features.map((feature) => (
    <div className="col-span-12 md:col-span-4" key={feature.nameKey}>
      <div className="product-sub">
        <a href={formatMessage(navLinks[feature.hrefKey])}>
          {formatMessage(navMessages[feature.nameKey])}
        </a>
        <div className={`text-xs font-light leading-normal whitespace-pre-line ${styles["solutions-tablet"]}`}>
          {formatMessage(navMessages[feature.descriptionKey])}
        </div>
      </div>
    </div>
  ));

  const solutionsList = solutions.map((solution) => (
    <li className="h-10 pl-0 ml-0 list-none" key={solution.nameKey}>
      <a className="text-base antialiased font-light" href={formatMessage(navLinks[solution.hrefKey])}>
        {formatMessage(navMessages[solution.nameKey])}
      </a>
    </li>
  ));

  const industriesList = industries.map((industry) => (
    <li className="h-10 pl-0 ml-0 list-none" key={industry.nameKey}>
      <a className="text-base antialiased font-light" href={formatMessage(navLinks[industry.hrefKey])}>
      {formatMessage(navMessages[industry.nameKey])}
      </a>
    </li>
  ));
  
  return (
    <div className={`top-20 right-0 left-0 px-0 lg:fixed h-auto w-auto mt-6 text-left bg-white ${styles["animation-learn"]} md:pl-12 lg:pl-0`}>
       <div className={`pl-8 lg:px-32 py-8 flex w-full relative left-0 ${styles["border-top"]}`}>
         <div className="flex flex-wrap -mx-8">
           <div className="md:grid md:grid-cols-12">
           <div className="md:col-span-12 lg:col-span-7">
           <div className="flex flex-wrap lg:-ml-8">
             <div className="w-full col-span-12 lg:w-auto lg:col-span-1">
             <Image className="mx-auto md:mx-0" alt="solutions" src="https://www.webex.com/content/dam/wbx/us/images/hp/header/solutions.svg" height="50" width="75"/>
             </div>
             <div className={`col-span-12 lg:col-span-11 lg:-mt-12  mr-8 ${styles["solutions-padding"]} mt-4 mb-8 lg:mb-0 w-full md:w-auto text-center md:text-justify`}>
             <a href="/all-new-webex.html" data-click-id="" className={`leading-normal	lg:py-4 font-normal text-lg ${styles["webex-title"]} md:py-12`}>
                                    {formatMessage(navMessages[LocaleKey.Introducing])}
                                </a>
             <p className="mt-4 text-xs font-light leading-normal lg:mt-0">
                                  {formatMessage(navMessages[LocaleKey.EasyToUse], {
                                    bold(str) { return <b>{str}</b>},
                                  })}
                                </p>
              <div className="flex grid flex-wrap grid-cols-12 mt-8 mr-4 text-left">
                {featuresList}
              </div>
                <div className="flex flex-wrap mt-8 mr-4">
                <a target="_blank" rel="noreferrer" href="https://cart.webex.com/sign-up-webex" className={`${styles["start-for-free"]} text-sm font-normal leading-normal hover:bg-purple-600 focus:text-white`} data-click-id="global_primary_nav_button_start-free">Get it now, for free</a>
                </div>
             </div>
           </div>
           </div>
           <div className={`md:col-span-6 lg:col-span-3 ${styles["border-left"]} relative lg:pl-8 mb-8 md:mb-0`}>
             <div className="pb-4 mb-0 text-lg font-normal leading-normal text-black">{formatMessage(navMessages[LocaleKey.OtherSolutions])}</div>
              <ul className="p-0 m-0 antialiased font-normal">
                {solutionsList}
              </ul>
           </div>
           <div className={`md:col-span-6 lg:col-span-2 ${styles["border-left"]} relative lg:pl-8`}>
           <div className="pb-4 mb-0 text-lg font-normal leading-normal text-black">{formatMessage(navMessages[LocaleKey.Industries])}</div>
              <ul className="p-0 m-0 antialiased font-normal">
              {industriesList}
              </ul>
           </div>
           </div>
         </div>
         </div>
      </div>
  );
};

export default Solutions;
