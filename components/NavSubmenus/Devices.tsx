import Image from "next/image";
import styles from "./navbar.module.css";
import data from "./submenu.json";

const DeviceImage = ({ src, alt }) => (
  <Image src={src} alt={alt} width="80" height="55" />
);

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
          <p className="pt-4 mb-0 text-base text-white">As seen at</p>
          <DeviceImage
            alt="webexone"
            src="https://www.webex.com/content/dam/wbx/us/images/hp/header/webexone.svg"
          />
          <div className="flex flex-wrap mt-6 ml-0">
            <div>
              <DeviceImage
                alt="webex devices"
                src="https://www.webex.com/content/dam/wbx/us/images/hp/header/webex-desk-camera.svg"
              />
            </div>
            <div className="grid-cols-6 pl-6 text-sm">
              <a
                className="py-4 -mt-4 text-lg font-normal text-white"
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
        <div className="px-0 list-none md:py-12">
          <ul className="flex flex-wrap w-full p-0 m-0 list-none md:mb-6">
            {data.devices.map((s, index) => (
              <li
                className="w-full px-8 mb-0 ml-0 text-sm font-normal leading-7 md:w-1/3"
                key={s.id}
              >
                <div className="flex flex-wrap items-center mb-6 -mx-12 md:mb-4 md:mb-0">
                  <div className="hidden pl-6 lg:pl-0 md:w-full lg:w-1/6 md:block">
                    <DeviceImage alt="webex devices" src={s.imgsrc} />
                  </div>
                  <div className="pl-8 md:w-full lg:w-5/6 lg:mt-4">
                    <a
                      className="m-0 text-lg font-light leading-10 text-black"
                      href={s.href}
                      data-click-id={s["data-id"]}
                    >
                      {s.name}
                    </a>
                    <div
                      className={`w-auto text-xs font-light h-8 whitespace-pre-line hidden md:block ${styles["devices-tablet"]} ${styles["max-width-devices"]}`}
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
