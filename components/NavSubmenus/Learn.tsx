/* eslint-disable jsx-a11y/tabindex-no-positive */
import Image from "next/image";
import { useIntl } from "react-intl";
import { learn, workspaces } from "./data";
import links from "../../common/layouts/links";
import { navMessages } from "../../common/layouts/translations";
import { LocaleKey } from "../../common/layouts/interfaces";
import { NavSubmenu } from "./interfaces";
import Grid from "../Grid";
import NavDropdownItem from "../NavDropdownItem";

const Learn: NavSubmenu = ({ colorClass }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="pt-6 lg:pb-16 xl:pb-6 lg:pt-12 lg:nav-container xl:w-3/4">
      <Grid
        rows={{ xs: 4, md: 3, lg: 2 }}
        cols={{ xs: 1, lg: 3 }}
        className="gap-4 lg:gap-0"
      >
        <Grid
          rows={{ xs: 0, md: 0 }}
          cols={{ xs: 1, md: 2 }}
          component="ul"
          className="col-span-1 row-span-1 gap-2 xl:gap-12 md:col-span-2 md:gap-6"
        >
          {learn.map((resource) => (
            <li key={resource.nameKey}>
              <NavDropdownItem
                hoverClass={colorClass}
                label={formatMessage(navMessages[resource.nameKey])}
                href={formatMessage(links[resource.hrefKey])}
                description={formatMessage(
                  navMessages[resource.descriptionKey]
                )}
              />
            </li>
          ))}
        </Grid>
        <div className="col-span-1 row-span-3 md:row-span-2">
          <div className="lg:border-l">
            <div className="py-2 lg:pl-8">
              <div className="text-xl whitespace-pre-line">
                {formatMessage(navMessages[LocaleKey.Workspaces])}
              </div>
              <ul>
                {workspaces.map((workspace) => (
                  <li
                    className="flex pt-4 text-base font-light"
                    key={workspace.nameKey}
                  >
                    <div className="">
                      <Image
                        className="w-28"
                        width="120"
                        height="70"
                        alt={workspace.alt}
                        src={workspace.imageSrc}
                      />
                    </div>
                    <div className="pl-4">
                      <a
                        href={formatMessage(links[workspace.hrefKey])}
                        className={`block font-normal whitespace-pre-line lg:inline hover:${colorClass}`}
                      >
                        {formatMessage(navMessages[workspace.nameKey])}
                      </a>
                      <div className="flex text-webex-gray">
                        <svg
                          className="relative mt-1"
                          width="15"
                          height="15"
                          viewBox="0 0 30 30"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            stroke="currentColor"
                            d="M24.038,23.781 L24.0022171,23.834038 C23.8501952,24.0277522 23.6228028,24.14 23.3783081,24.14 L23.3783081,24.14 L1.29719142,24.14 C1.15049462,24.14 1.00995466,24.0995908 0.888208346,24.0254861 L24.038,23.781 Z M12.3377498,0.5 C14.3645671,0.5 16.2022669,1.32338695 17.53332,2.65259811 C18.8641221,3.98155857 19.6886141,5.81633601 19.6886141,7.84 C19.6886141,11.4404907 17.0667373,14.4314058 13.645331,15.06 L13.645331,15.06 L17.514834,15.06 C18.8823635,15.06 20.1591209,15.5291629 21.1765677,16.3342707 C22.1956358,17.1406615 22.9544396,18.283819 23.2854201,19.6302187 L23.2854201,19.6302187 L24.151255,23.1380455 C24.1881576,23.2875693 24.1824496,23.4405428 24.1367658,23.5821214 L23.1684132,19.6584076 C22.8431367,18.3401387 22.0998659,17.2215597 21.1043286,16.4321434 C20.1064252,15.6408509 18.8549464,15.18 17.514834,15.18 L7.16066553,15.18 C5.82047233,15.18 4.56892589,15.6409081 3.57114105,16.4322783 C2.57218432,17.224578 1.8274736,18.3484012 1.50469019,19.6727649 L0.72,23.886 L0.673518171,23.8343385 C0.54077131,23.6649192 0.481531726,23.4542259 0.505360334,23.2433322 L0.524241252,23.1380587 L1.39019255,19.6297595 C1.72105993,18.283819 2.47986378,17.1406615 3.49893183,16.3342707 C4.51637863,15.5291629 5.79313603,15.06 7.16066553,15.06 L7.16066553,15.06 L11.0330295,15.06 C7.60893032,14.4315402 4.98688545,11.4405823 4.98688545,7.84 C4.98688545,5.8164694 5.81154686,3.98180938 7.14232385,2.65287398 C8.47352647,1.32351352 10.311324,0.5 12.3377498,0.5 Z M12.3377498,0.62 C10.3448005,0.62 8.53733288,1.42940003 7.22822359,2.73669772 C5.91905859,4.04405105 5.1084375,5.84915387 5.1084375,7.84 C5.1084375,9.83039217 5.91915783,11.635628 7.22849982,12.9431581 C8.53759075,14.2504375 10.3449484,15.06 12.3377498,15.06 C14.3310057,15.06 16.1382301,14.2505366 17.4471441,12.943434 C18.7565045,11.6358856 19.5670621,9.83053988 19.5670621,7.84 C19.5670621,5.84900611 18.7566037,4.04379353 17.4474203,2.73642189 C16.138488,1.42930093 14.3311536,0.62 12.3377498,0.62 Z"
                            transform="translate(.122 .12)"
                          />
                        </svg>
                        <span className="pl-2 text-sm font-normal">
                          {workspace.capacity}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Learn;
