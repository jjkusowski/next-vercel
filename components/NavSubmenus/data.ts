import { LocaleKey } from "../../common/layouts/interfaces";
import { IBaseLink, IDescribedLink, IProductCard, ISpace } from "./interfaces";

export const solutions: IBaseLink[] = [
  { nameKey: LocaleKey.ContactCenter, hrefKey: LocaleKey.ContactCenter },
  { nameKey: LocaleKey.Events, hrefKey: LocaleKey.Events },
  { nameKey: LocaleKey.RemoteSupport, hrefKey: LocaleKey.RemoteSupport },
  { nameKey: LocaleKey.Training, hrefKey: LocaleKey.Training },
  {
    nameKey: LocaleKey.HardwareService,
    hrefKey: LocaleKey.HardwareService,
  },
];

export const industries: IBaseLink[] = [
  { nameKey: LocaleKey.Education, hrefKey: LocaleKey.Education },
  { nameKey: LocaleKey.Healthcare, hrefKey: LocaleKey.Healthcare },
  {
    nameKey: LocaleKey.FinancialServices,
    hrefKey: LocaleKey.FinancialServices,
  },
  { nameKey: LocaleKey.Government, hrefKey: LocaleKey.Government },
  { nameKey: LocaleKey.Startups, hrefKey: LocaleKey.Startups },
  { nameKey: LocaleKey.Sports, hrefKey: LocaleKey.Sports },
];

export const devicesByName = {
  [LocaleKey.DeskCamera]: {
    nameKey: LocaleKey.DeskCamera,
    descriptionKey: LocaleKey.DeskCamera_Description,
    hrefKey: LocaleKey.DeskCamera,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/webex-desk-camera.svg",
  },
  [LocaleKey.BoardSeries]: {
    nameKey: LocaleKey.BoardSeries,
    descriptionKey: LocaleKey.BoardSeries_Description,
    hrefKey: LocaleKey.BoardSeries,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/board-series.svg",
  },
  [LocaleKey.Accessories]: {
    nameKey: LocaleKey.Accessories,
    descriptionKey: LocaleKey.Accessories_Description,
    hrefKey: LocaleKey.Accessories,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/accessories.svg",
  },
  [LocaleKey.Cameras]: {
    nameKey: LocaleKey.Cameras,
    descriptionKey: LocaleKey.Cameras_Description,
    hrefKey: LocaleKey.Cameras,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/accessories.svg",
  },
  [LocaleKey.DeskSeries]: {
    nameKey: LocaleKey.DeskSeries,
    descriptionKey: LocaleKey.DeskSeries_Description,
    hrefKey: LocaleKey.DeskSeries,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/desk-series.svg",
  },
  [LocaleKey.RoomSeries]: {
    nameKey: LocaleKey.RoomSeries,
    descriptionKey: LocaleKey.RoomSeries_Description,
    hrefKey: LocaleKey.RoomSeries,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/room-series.svg",
  },
  [LocaleKey.Codecs]: {
    nameKey: LocaleKey.Codecs,
    descriptionKey: LocaleKey.Codecs_Description,
    hrefKey: LocaleKey.Codecs,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/codecs.svg",
  },
  [LocaleKey.RoomNavigator]: {
    nameKey: LocaleKey.RoomNavigator,
    descriptionKey: LocaleKey.RoomNavigator_Description,
    hrefKey: LocaleKey.RoomNavigator,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/room-navigator.svg",
  },
  [LocaleKey.RoomKitSeries]: {
    nameKey: LocaleKey.RoomKitSeries,
    descriptionKey: LocaleKey.RoomKitSeries_Description,
    hrefKey: LocaleKey.RoomKitSeries,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/room-kit-series.svg",
  },
  [LocaleKey.PanoramaSeries]: {
    nameKey: LocaleKey.PanoramaSeries,
    descriptionKey: LocaleKey.PanoramaSeries_Description,
    hrefKey: LocaleKey.PanoramaSeries,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/panorama.svg",
  },
};

export const devices: IProductCard[] = [
  devicesByName[LocaleKey.BoardSeries],
  devicesByName[LocaleKey.Accessories],
  devicesByName[LocaleKey.Cameras],
  devicesByName[LocaleKey.DeskSeries],
  devicesByName[LocaleKey.RoomSeries],
  devicesByName[LocaleKey.Codecs],
  devicesByName[LocaleKey.RoomNavigator],
  devicesByName[LocaleKey.RoomKitSeries],
  devicesByName[LocaleKey.PanoramaSeries],
];

export const features: IDescribedLink[] = [
  {
    nameKey: LocaleKey.WebexMeet,
    descriptionKey: LocaleKey.WebexMeet_Description,
    hrefKey: LocaleKey.WebexMeet,
  },
  {
    nameKey: LocaleKey.WebexCall,
    descriptionKey: LocaleKey.WebexCall_Description,
    hrefKey: LocaleKey.WebexCall,
  },
  {
    nameKey: LocaleKey.WebexMessage,
    descriptionKey: LocaleKey.WebexMessage_Description,
    hrefKey: LocaleKey.WebexMessage,
  },
];

export const resources: IDescribedLink[] = [
  {
    nameKey: LocaleKey.Integrations,
    hrefKey: LocaleKey.Integrations,
    descriptionKey: LocaleKey.Integrations_Description,
  },
  {
    nameKey: LocaleKey.Blog,
    hrefKey: LocaleKey.Blog,
    descriptionKey: LocaleKey.Blog_Description,
  },
  {
    nameKey: LocaleKey.Security,
    hrefKey: LocaleKey.Security,
    descriptionKey: LocaleKey.Security_Description,
  },
  {
    nameKey: LocaleKey.WebexCommunity,
    hrefKey: LocaleKey.WebexCommunity,
    descriptionKey: LocaleKey.WebexCommunity_Description,
  },
  {
    nameKey: LocaleKey.Accessibility,
    hrefKey: LocaleKey.Accessibility,
    descriptionKey: LocaleKey.Accessibility_Description,
  },
];

export const workspaces: ISpace[] = [
  {
    nameKey: LocaleKey.PersonalOffices,
    hrefKey: LocaleKey.PersonalOffices,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/personal-offices.svg",
    alt: LocaleKey.PersonalOffices_Alt,
    capacity: "1",
  },
  {
    nameKey: LocaleKey.HuddleSpaces,
    hrefKey: LocaleKey.HuddleSpaces,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/huddle-spaces.svg",
    alt: LocaleKey.HuddleSpaces_Alt,
    capacity: "1-5",
  },
  {
    nameKey: LocaleKey.CoCreationAreas,
    hrefKey: LocaleKey.CoCreationAreas,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/co-creation-areas.svg",
    alt: LocaleKey.CoCreationAreas_Alt,
    capacity: "2-12",
  },
  {
    nameKey: LocaleKey.MeetingRooms,
    hrefKey: LocaleKey.MeetingRooms,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/meeting-rooms.svg",
    alt: LocaleKey.MeetingRooms_Alt,
    capacity: "4-20",
  },
  {
    nameKey: LocaleKey.SpecialPurposeRooms,
    hrefKey: LocaleKey.SpecialPurposeRooms,
    imageSrc:
      "https://www.webex.com/content/dam/wbx/us/images/hp/header/special-purpose-rooms.svg",
    alt: LocaleKey.SpecialPurposeRooms_Alt,
    capacity: "24-150",
  },
];

export const learn: IDescribedLink[] = [
  {
    nameKey: LocaleKey.Help,
    hrefKey: LocaleKey.HelpCenter,
    descriptionKey: LocaleKey.Help_Description,
  },
  {
    nameKey: LocaleKey.WebinarsDemos,
    hrefKey: LocaleKey.WebinarsDemos,
    descriptionKey: LocaleKey.WebinarsDemos_Description,
  },
  {
    nameKey: LocaleKey.OnlineClasses,
    hrefKey: LocaleKey.OnlineClasses,
    descriptionKey: LocaleKey.OnlineClasses_Description,
  },
  {
    nameKey: LocaleKey.WebexEssentials,
    hrefKey: LocaleKey.WebexEssentials,
    descriptionKey: LocaleKey.WebexEssentials_Description,
  },
];
