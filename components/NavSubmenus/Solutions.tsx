/* eslint-disable prettier/prettier */
import React from "react";
import data from "./submenu.json";
import styles from "./navbar.module.css";

const Solutions = () => {
  return (
    <div className={`top-20 right-0 left-0 px-0 lg:fixed h-auto w-auto mt-6 text-left bg-white ${styles["animation-learn"]} md:pl-12 lg:pl-0`}>
       <div className={`pl-8 lg:px-32 py-8 flex w-full relative left-0 ${styles["border-top"]}`}>
         <div className="flex flex-wrap -mx-8">
           <div className="md:grid md:grid-cols-12">
           <div className="md:col-span-12 lg:col-span-7">
           <div className="flex flex-wrap lg:-ml-8">
             <div className="col-span-12 w-full lg:w-auto lg:col-span-1">
             <img className="mx-auto md:mx-0" alt="solutions" src="https://www.webex.com/content/dam/wbx/us/images/hp/header/solutions.svg"/>
             </div>
             <div className={`col-span-12 lg:col-span-11 lg:-mt-12  mr-8 ${styles["solutions-padding"]} mt-4 mb-8 lg:mb-0 w-full md:w-auto text-center md:text-justify`}>
             <a href="/all-new-webex.html" data-click-id="" className={`leading-normal	lg:py-4 font-normal text-lg ${styles["webex-title"]} md:py-12`}>
                                    Introducing the all new Webex
                                </a>
             <p className="text-xs font-light leading-normal mt-4 lg:mt-0">
                                  <b>Webex</b> is your one easy-to-use and secure app to call, message, meet and get work done.
                                </p>
              <div className="flex flex-wrap  grid grid-cols-12 mt-8 mr-4 text-left">
              {data.products.map(s => (
                <div className="col-span-12 md:col-span-4" key={s.id}>
                <div className="product-sub" key={s.id}>
                                      <a href={s.href} data-click-id={s["data-id"]} key={s.id}>
                                        {s.name}
                                      </a>
                                      <div className={`text-xs font-light leading-normal whitespace-pre-line ${styles["solutions-tablet"]}`} key={s.id}>
                                        {s.desc}
                                      </div>
                </div>
                </div>
              ))}
                </div>
                <div className="flex flex-wrap mt-8 mr-4">
                <a target="_blank" rel="noreferrer" href="https://cart.webex.com/sign-up-webex" className={`${styles["start-for-free"]} text-sm font-normal leading-normal hover:bg-purple-600 focus:text-white`} data-click-id="global_primary_nav_button_start-free">Get it now, for free</a>
                </div>
             </div>
           </div>
           </div>
           <div className={`md:col-span-6 lg:col-span-3 ${styles["border-left"]} relative lg:pl-8 mb-8 md:mb-0`}>
             <div className="text-black leading-normal pb-4 mb-0 font-normal text-lg">Other Solutions</div>
              <ul className="m-0 p-0 font-normal antialiased">
              {data.solutions.map(s => (
                <li className="h-10 list-none pl-0 ml-0" key={s.id}>
                <a className="text-base font-light antialiased" key={s.id} href={s.href} data-click-id={s["data-id"]}>
                                  {s.name}
                                </a>
                </li>
              ))}
              </ul>
             
           </div>
           <div className={`md:col-span-6 lg:col-span-2 ${styles["border-left"]} relative lg:pl-8`}>
           <div className="text-black leading-normal pb-4 mb-0 font-normal text-lg">Webex for industries</div>
              <ul className="m-0 p-0 font-normal antialiased">
              {data.industries.map(s => (
                <li className="h-10 list-none pl-0 ml-0" key={s.id}>
                <a className="text-base font-light antialiased" key={s.id} href={s.href} data-click-id={s["data-id"]}>
                                  {s.name}
                                </a>
                </li>
              ))}
              </ul>
           </div>
           </div>
         </div>
         </div>
      </div>
  );
};

export default Solutions;
