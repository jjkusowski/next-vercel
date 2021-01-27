import Image from "next/image";
import { useIntl } from "react-intl";
import { LocaleKey } from "../../common/layouts/interfaces";
import links from "../../common/layouts/links";
import { navMessages } from "../../common/layouts/translations";
import { devices, devicesByName } from "./data";
import styles from "./navbar.module.css";

const DeviceImage = ({ src, alt }) => (
  <Image src={src} alt={alt} width="80" height="55" />
);

const Devices = () => {
  const { formatMessage } = useIntl();
  const featuredDevice = devicesByName[LocaleKey.DeskCamera];

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
          <p className="pt-4 mb-0 text-base text-white">
            {formatMessage(navMessages[LocaleKey.AsSeen])}
          </p>
          <Image
            alt="webexone"
            src="https://www.webex.com/content/dam/wbx/us/images/hp/header/webexone.svg"
            height="24"
            width="156"
          />
          <div className="flex flex-wrap mt-6 ml-0">
            <div>
              <DeviceImage alt="webex devices" src={featuredDevice.imageSrc} />
            </div>
            <div className="grid-cols-6 pl-6 text-sm">
              <a
                className="py-4 -mt-4 text-lg font-normal text-white"
                data-click-id="nav_devices_text_deskpro"
                href={formatMessage(links[featuredDevice.hrefKey])}
              >
                {formatMessage(navMessages[featuredDevice.nameKey])}
              </a>
              <div className="text-xs font-light leading-8 text-white">
                {formatMessage(navMessages[featuredDevice.descriptionKey])}
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
            {devices.map((device, index) => (
              <li
                className="w-full px-8 mb-0 ml-0 text-sm font-normal leading-7 md:w-1/3"
                key={device.nameKey}
              >
                <div className="flex flex-wrap items-center mb-6 -mx-12 md:mb-4 md:mb-0">
                  <div className="hidden pl-6 lg:pl-0 md:w-full lg:w-1/6 md:block">
                    <DeviceImage alt="webex devices" src={device.imageSrc} />
                  </div>
                  <div className="pl-8 md:w-full lg:w-5/6 lg:mt-4">
                    <a
                      className="m-0 text-lg font-light leading-10 text-black"
                      href={formatMessage(links[device.hrefKey])}
                    >
                      {formatMessage(navMessages[device.nameKey])}
                    </a>
                    <div
                      className={`w-auto text-xs font-light h-8 whitespace-pre-line hidden md:block ${styles["devices-tablet"]} ${styles["max-width-devices"]}`}
                    >
                      {formatMessage(navMessages[device.descriptionKey])}
                    </div>
                  </div>
                </div>
                {index === 8 && (
                  <div className="-ml-4 md:-ml-6 lg:ml-12">
                    <div className="lg:ml-36">
                      <a
                        className="text-lg font-light"
                        href={formatMessage(links[LocaleKey.DevicesRooms])}
                        data-click-id="nav_devices_text_see-all-devices"
                      >
                        {formatMessage(navMessages[LocaleKey.SeeAllDevices])}
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
