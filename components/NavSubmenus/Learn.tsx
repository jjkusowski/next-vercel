import React from "react";
import data from "./submenu.json";
import styles from "./navbar.module.css";

const Learn = () => {
  return (
  <div className={`top-20 right-0 left-0 px-0 lg:fixed h-auto w-auto mt-6 text-left bg-white ${styles["animation-learn"]}`}>
    <div className={`px-4 lg:px-8 xl:px-12 py-12 flex ${styles["flex-wrapper"]} w-full relative left-0 ${styles["border-top"]}`}>
      <div className="px-0 flex flex-wrap -mx-4 lg:w-9/12">
        <ul className="w-full lg:flex flex-wrap list-none m-0 p-0 h-16">
        <div className="lg:grid lg:grid-cols-12 md:flex md:flex-wrap">
        {data.learnLeft.map(s => (
          
          <li className="text-sm font-normal py-2 lg:py-0 lg:h-32 w-full max-w-lg md:col-span-6 lg:px-10 md:px-8 xl:px-16 md:w-1/2 lg:w-full" key={s.id}>
          <a className="text-lg font-light text-black" tabindex="13" href={s.href} target="_blank" data-click-id={s["data-id"]} key={s.id}>
                                  {s.name}
                                </a>
                                <div className={`w-auto text-xs font-light max-size xl:max-w-xs whitespace-pre-line ${styles["desc-color"]} hidden md:block`} key={s.id}>
                                  {s.description}
                                </div>
          </li>
          
        ))}
        </div>
        </ul>
      </div>
      <div className={`lg:w-4/12 list-none -mx-8 pl-12 ${styles["border-style"]} ${styles["webex-workspaces"]}`}>
      <div className="text-lg  mb-6 -ml-8">Webex workspaces</div>
          {data.learnRight.map(s=> (
      <div className="mb-4 flex flex-wrap -mx-8" key={s.id}>
      <div className="col-xs-2" key={s.id}>
                                <img className="w-28" width="120" alt="personal" src={s.imageSrc} key={s.id}/>
                              </div>
                              <div className="col-xs-10" key={s.id}>
                                <a href={s.href} className="wbx-workspace-link" data-click-id={s["data-id"]} key={s.id}>
                                  <div className={`${styles["wbx-header-product-eyebrow"]} ${styles["wh-item-title"]}`} key={s.id}>
                                    <span key={s.id}>{s.name}</span>
                                    <p className="text-xs text-gray-600 flex" key={s.id}>
                                      <svg className="relative" width="15" key={s.id} height="15" viewBox="0 0 30 30"><path fill="currentColor" fill-rule="evenodd" stroke="currentColor" d="M24.038,23.781 L24.0022171,23.834038 C23.8501952,24.0277522 23.6228028,24.14 23.3783081,24.14 L23.3783081,24.14 L1.29719142,24.14 C1.15049462,24.14 1.00995466,24.0995908 0.888208346,24.0254861 L24.038,23.781 Z M12.3377498,0.5 C14.3645671,0.5 16.2022669,1.32338695 17.53332,2.65259811 C18.8641221,3.98155857 19.6886141,5.81633601 19.6886141,7.84 C19.6886141,11.4404907 17.0667373,14.4314058 13.645331,15.06 L13.645331,15.06 L17.514834,15.06 C18.8823635,15.06 20.1591209,15.5291629 21.1765677,16.3342707 C22.1956358,17.1406615 22.9544396,18.283819 23.2854201,19.6302187 L23.2854201,19.6302187 L24.151255,23.1380455 C24.1881576,23.2875693 24.1824496,23.4405428 24.1367658,23.5821214 L23.1684132,19.6584076 C22.8431367,18.3401387 22.0998659,17.2215597 21.1043286,16.4321434 C20.1064252,15.6408509 18.8549464,15.18 17.514834,15.18 L7.16066553,15.18 C5.82047233,15.18 4.56892589,15.6409081 3.57114105,16.4322783 C2.57218432,17.224578 1.8274736,18.3484012 1.50469019,19.6727649 L0.72,23.886 L0.673518171,23.8343385 C0.54077131,23.6649192 0.481531726,23.4542259 0.505360334,23.2433322 L0.524241252,23.1380587 L1.39019255,19.6297595 C1.72105993,18.283819 2.47986378,17.1406615 3.49893183,16.3342707 C4.51637863,15.5291629 5.79313603,15.06 7.16066553,15.06 L7.16066553,15.06 L11.0330295,15.06 C7.60893032,14.4315402 4.98688545,11.4405823 4.98688545,7.84 C4.98688545,5.8164694 5.81154686,3.98180938 7.14232385,2.65287398 C8.47352647,1.32351352 10.311324,0.5 12.3377498,0.5 Z M12.3377498,0.62 C10.3448005,0.62 8.53733288,1.42940003 7.22822359,2.73669772 C5.91905859,4.04405105 5.1084375,5.84915387 5.1084375,7.84 C5.1084375,9.83039217 5.91915783,11.635628 7.22849982,12.9431581 C8.53759075,14.2504375 10.3449484,15.06 12.3377498,15.06 C14.3310057,15.06 16.1382301,14.2505366 17.4471441,12.943434 C18.7565045,11.6358856 19.5670621,9.83053988 19.5670621,7.84 C19.5670621,5.84900611 18.7566037,4.04379353 17.4474203,2.73642189 C16.138488,1.42930093 14.3311536,0.62 12.3377498,0.62 Z" transform="translate(.122 .12)"></path></svg>
                                      {s.capacity}
                                    </p>
                                  </div>
                                </a>
                              </div>
      </div>
      ))}
      </div>
    </div>
  </div>
  
  );
};

export default Learn;
