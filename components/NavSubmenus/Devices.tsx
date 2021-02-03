import Image from "next/image";
import { useIntl } from "react-intl";
import { LocaleKey } from "../../common/layouts/interfaces";
import links from "../../common/layouts/links";
import { navMessages } from "../../common/layouts/translations";
import Grid from "../Grid";
import { devices, devicesByName } from "./data";
import { NavSubmenu } from "./interfaces";

interface IDevice {
  href: string;
  name: string;
  description?: string;
}
interface IBaseDeviceProps {
  device: IDevice;
  colorClass: string;
}

interface ILargeDeviceProps extends IBaseDeviceProps {
  image?: { src: string; alt: string };
}

const DeviceImage = ({ src, alt }) => (
  <Image src={src} alt={alt} width="80" height="55" />
);

const DeviceLink = ({ href, label, hoverColor }) => {
  return (
    <a
      className={`block text-base font-light md:text-xl hover:${hoverColor} md:inline`}
      href={href}
    >
      {label}
    </a>
  );
};

const DeviceLarge = ({ image, device, colorClass }: ILargeDeviceProps) => {
  const { src, alt } = image;
  const { href, name, description } = device;

  return (
    <Grid
      rows={{ md: 2, lg: 1 }}
      cols={{ md: 1, lg: 12 }}
      className="hidden md:grid"
    >
      <div className="flex lg:col-span-2">
        <div className="flex items-center">
          <DeviceImage src={src} alt={alt} />
        </div>
      </div>
      <div className="md:pt-2 lg:pt-0 lg:col-span-9 lg:col-start-4">
        <div className="whitespace-pre-line">
          <DeviceLink href={href} label={name} hoverColor={colorClass} />
          <div className="text-xs text-webex-gray">{description}</div>
        </div>
      </div>
    </Grid>
  );
};

const DeviceSmall = ({ device, colorClass }: IBaseDeviceProps) => {
  const { href, name } = device;

  return (
    <li className="lg:hidden">
      <DeviceLink href={href} label={name} hoverColor={colorClass} />
    </li>
  );
};

const Devices: NavSubmenu = ({ colorClass }) => {
  const { formatMessage } = useIntl();
  const featuredDevice = devicesByName[LocaleKey.DeskCamera];

  const devicesListLarge = devices.map((device) => (
    <DeviceLarge
      colorClass={colorClass}
      key={device.nameKey}
      image={{
        src: device.imageSrc,
        alt: "webex devices",
      }}
      device={{
        name: formatMessage(navMessages[device.nameKey]),
        href: formatMessage(links[device.hrefKey]),
        description: formatMessage(navMessages[device.descriptionKey]),
      }}
    />
  ));

  const devicesListSmall = devices.map((device) => (
    <DeviceSmall
      colorClass={colorClass}
      key={device.nameKey}
      device={{
        name: formatMessage(navMessages[device.nameKey]),
        href: formatMessage(links[device.hrefKey]),
      }}
    />
  ));

  return (
    <div>
      <div className="relative hidden w-full h-48 bg-cover lg:block bg-devices-banner">
        <div className="w-full h-48 bg-cover lg:absolute bg-devices-banner-overlay" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 mx-auto text-white xl:px-0 xl:w-10/12">
          <div className="text-base">
            {formatMessage(navMessages[LocaleKey.AsSeen])}
          </div>
          <div className="mt-1">
            <Image
              alt="webexone"
              src="https://www.webex.com/content/dam/wbx/us/images/hp/header/webexone.svg"
              height="24"
              width="156"
            />
          </div>
          <div className="flex flex-wrap mt-4 ml-0">
            <div>
              <DeviceImage alt="webex devices" src={featuredDevice.imageSrc} />
            </div>
            <div className="pl-6">
              <a
                className="text-xl text-white"
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
      {/* dt device grid -- hidden md- */}
      <Grid
        cols={{ xs: 1, md: 3 }}
        rows={{ xs: 0, md: 0 }}
        className="hidden gap-8 pt-8 pb-16 mx-auto md:grid lg:px-8 xl:px-0 xl:w-10/12"
      >
        {devicesListLarge}
        <Grid cols={12} rows={1} className="col-start-3">
          <div className="lg:col-start-4 lg:pl-2">
            <DeviceLink
              hoverColor={colorClass}
              href={formatMessage(links[LocaleKey.DevicesRooms])}
              label={formatMessage(navMessages[LocaleKey.SeeAllDevices])}
            />
          </div>
        </Grid>
      </Grid>
      {/* mobile device list -- hidden md+ */}
      <ul className="grid gap-4 py-4 md:hidden">
        {devicesListSmall}
        <li>
          <DeviceLink
            hoverColor={colorClass}
            href={formatMessage(links[LocaleKey.DevicesRooms])}
            label={formatMessage(navMessages[LocaleKey.SeeAllDevices])}
          />
        </li>
      </ul>
    </div>
  );
};

export default Devices;
