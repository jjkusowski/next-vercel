import styles from "./navbar.module.css";
import data from "./submenu.json";

const Devices = () => {
  return (
    <div
      className={`top-20 right-0 left-0 px-0 lg:fixed h-auto w-auto mt-6 text-left bg-white ${styles["animation-learn"]}`}
    >
      <div
        className={`${styles["device-banner"]} relative w-full h-48 bg-cover hidden lg:block`}
      >
        <div
          className={`${styles.overlay} w-full h-full top-0 left-0 absolute bg-cover`}
        />
        <div
          className={`lg:px-8 xl:px-32 w-full relative left-0 ${styles["border-top"]}`}
        >
          <p className="text-base text-white pt-4 mb-0">As seen at</p>
          <p>
            <img
              alt="webexone"
              src="https://www.webex.com/content/dam/wbx/us/images/hp/header/webexone.svg"
            />
          </p>
          <div className="flex flex-wrap mt-6 ml-0">
            <div>
              <img
                alt="webex devices"
                src="https://www.webex.com/content/dam/wbx/us/images/hp/header/webex-desk-camera.svg"
              />
            </div>
            <div className="text-sm pl-6 grid-cols-6">
              <a
                className="font-normal text-white text-lg py-4 -mt-4"
                data-click-id="nav_devices_text_deskpro"
                href="https://www.webex.com/desk-camera-sign-up.html"
              >
                Webex Desk Camera
              </a>
              <div className="text-xs font-light leading-8 text-white">
                {" "}
                Enjoy up to 4K Ultra HD video with the intelligent webcam
                designed with the power of the Webex platform
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:p-0 lg:px-8 xl:px-32 w-full relative left-0 ${styles["border-top"]} h-auto`}
      >
        <div className="px-0 md:py-12 list-none">
          <ul className="flex flex-wrap w-full list-none m-0 p-0 md:mb-6">
            {data.devices.map((s, index) => (
              <li
                className="font-normal text-sm leading-7 px-8 mb-0 ml-0 w-full md:w-1/3"
                key={s.id}
              >
                <div
                  className="md:mb-4 items-center flex flex-wrap -mx-12 mb-6 md:mb-0"
                  key={s.id}
                >
                  <div
                    className="pl-6 lg:pl-0 md:w-full lg:w-1/6 hidden md:block"
                    key={s.id}
                  >
                    <img alt="webex devices" key={s.id} src={s.imgsrc} />
                  </div>
                  <div className="md:w-full lg:w-5/6 pl-8 lg:mt-4" key={s.id}>
                    <a
                      className="font-light m-0 text-lg text-black leading-10"
                      key={s.id}
                      href={s.href}
                      data-click-id={s["data-id"]}
                    >
                      {s.name}
                    </a>
                    <div
                      className={`w-auto text-xs font-light h-8 whitespace-pre-line hidden md:block ${styles["devices-tablet"]} ${styles["max-width-devices"]}`}
                      key={s.id}
                    >
                      {s.desc}
                    </div>
                  </div>
                </div>
                {index === 8 && (
                  <div className="-ml-4 md:-ml-6 lg:ml-12">
                    <div className="lg:ml-36">
                      <a
                        className="text-lg font-light"
                        href="https://hardware.webex.com/devices"
                        data-click-id="nav_devices_text_see-all-devices"
                      >
                        See all devices →
                      </a>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Devices;
