import { defineMessages } from "react-intl";
import { LocaleKey as Keys } from "./interfaces";

const getId = (id) => {
  return `Nav.${id}`;
};

export default defineMessages({
  [Keys.Introducing]: {
    id: getId(Keys.Introducing),
    defaultMessage: "Introducing the all new Webex",
  },
  [Keys.EasyToUse]: {
    id: getId(Keys.EasyToUse),
    defaultMessage:
      "<bold>Webex</bold> is your one easy-to-use and secure app to call, message, meet and get work done.",
  },
  [Keys.OtherSolutions]: {
    id: getId(Keys.OtherSolutions),
    defaultMessage: "Other Solutions",
  },
  [Keys.Industries]: {
    id: getId(Keys.Industries),
    defaultMessage: "Webex for Industries",
  },
  [Keys.Help]: {
    id: getId(Keys.Help),
    defaultMessage: "Product help",
  },
  [Keys.Help_Description]: {
    id: getId(Keys.Help_Description),
    defaultMessage:
      "Get quick answers to your questions with help articles, video tutorials, and training.",
  },
  [Keys.WebinarsDemos]: {
    id: getId(Keys.WebinarsDemos),
    defaultMessage: "Webinars & daily demos",
  },
  [Keys.WebinarsDemos_Description]: {
    id: getId(Keys.WebinarsDemos_Description),
    defaultMessage:
      "Join live and on-demand events featuring industry insights, product walk-throughs and special guest speakers.",
  },
  [Keys.OnlineClasses]: {
    id: getId(Keys.OnlineClasses),
    defaultMessage: "Online classes",
  },
  [Keys.OnlineClasses_Description]: {
    id: getId(Keys.OnlineClasses_Description),
    defaultMessage:
      "Learn all about Webex with free online training led by our experts.",
  },
  [Keys.WebexEssentials]: {
    id: getId(Keys.WebexEssentials),
    defaultMessage: "Webex essentials",
  },
  [Keys.WebexEssentials_Description]: {
    id: getId(Keys.WebexEssentials_Description),
    defaultMessage:
      "Resources to help you get the most out of Webex -- for every role, industy, and team.",
  },
  [Keys.PersonalOffices]: {
    id: getId(Keys.PersonalOffices),
    defaultMessage: "Personal offices",
  },
  [Keys.PersonalOffices]: {
    id: getId(Keys.PersonalOffices),
    defaultMessage: "Personal offices",
  },
  [Keys.PersonalOffices_Alt]: {
    id: getId(Keys.PersonalOffices_Alt),
    defaultMessage: "personal",
  },
  [Keys.HuddleSpaces]: {
    id: getId(Keys.HuddleSpaces),
    defaultMessage: "Huddle spaces",
  },
  [Keys.HuddleSpaces_Alt]: {
    id: getId(Keys.HuddleSpaces_Alt),
    defaultMessage: "huddle spaces",
  },
  [Keys.CoCreationAreas]: {
    id: getId(Keys.CoCreationAreas),
    defaultMessage: "Co-creation areas",
  },
  [Keys.CoCreationAreas_Alt]: {
    id: getId(Keys.CoCreationAreas_Alt),
    defaultMessage: "co-creation areas",
  },
  [Keys.MeetingRooms]: {
    id: getId(Keys.MeetingRooms),
    defaultMessage: "Meeting rooms",
  },
  [Keys.MeetingRooms_Alt]: {
    id: getId(Keys.MeetingRooms_Alt),
    defaultMessage: "meeting rooms",
  },
  [Keys.SpecialPurposeRooms]: {
    id: getId(Keys.SpecialPurposeRooms),
    defaultMessage: "Special purpose rooms",
  },
  [Keys.SpecialPurposeRooms_Alt]: {
    id: getId(Keys.SpecialPurposeRooms_Alt),
    defaultMessage: "special purpose rooms",
  },
  [Keys.Integrations]: {
    id: getId(Keys.Integrations),
    defaultMessage: "Integrations",
  },
  [Keys.Integrations_Description]: {
    id: getId(Keys.Integrations_Description),
    defaultMessage:
      "Integrate with the apps you love to use every day, so your work stays connected.",
  },
  [Keys.Blog]: {
    id: getId(Keys.Blog),
    defaultMessage: "Webex Blog",
  },
  [Keys.Blog_Description]: {
    id: getId(Keys.Blog_Description),
    defaultMessage:
      "Visit the Webex Blog to read about what’s new in Webex, current video conferencing tips and tricks, and more!",
  },
  [Keys.Security]: {
    id: getId(Keys.Security),
    defaultMessage: "Security difference",
  },
  [Keys.Security_Description]: {
    id: getId(Keys.Security_Description),
    defaultMessage:
      "Learn more about how we deliver uncompromised privacy and security you can trust.",
  },
  [Keys.WebexCommunity]: {
    id: getId(Keys.WebexCommunity),
    defaultMessage: "Webex Community",
  },
  [Keys.WebexCommunity_Description]: {
    id: getId(Keys.WebexCommunity_Description),
    defaultMessage:
      "Connect with users like you on our Cisco Webex Community forum. Ask questions, share feedback, join an event, or help others!",
  },
  [Keys.Accessibility]: {
    id: getId(Keys.Accessibility),
    defaultMessage: "Accessibility",
  },
  [Keys.Accessibility_Description]: {
    id: getId(Keys.Accessibility_Description),
    defaultMessage:
      "Access Webex resources for deaf or hard of hearing users, and sign language interpreters",
  },
  [Keys.ContactCenter]: {
    id: getId(Keys.ContactCenter),
    defaultMessage: "Contact Center",
  },
  [Keys.Events]: {
    id: getId(Keys.Events),
    defaultMessage: "Online Event Management",
  },
  [Keys.RemoteSupport]: {
    id: getId(Keys.RemoteSupport),
    defaultMessage: "Report Support Management",
  },
  [Keys.Training]: {
    id: getId(Keys.Training),
    defaultMessage: "Online Training Management",
  },
  [Keys.HardwareService]: {
    id: getId(Keys.HardwareService),
    defaultMessage: "Hardware as a service",
  },
  [Keys.Education]: {
    id: getId(Keys.Education),
    defaultMessage: "Education",
  },
  [Keys.Healthcare]: {
    id: getId(Keys.Healthcare),
    defaultMessage: "Healthcare",
  },
  [Keys.FinancialServices]: {
    id: getId(Keys.FinancialServices),
    defaultMessage: "Financial Services",
  },
  [Keys.Government]: {
    id: getId(Keys.Government),
    defaultMessage: "Government",
  },
  [Keys.Startups]: {
    id: getId(Keys.Startups),
    defaultMessage: "Start-Ups",
  },
  [Keys.Sports]: {
    id: getId(Keys.Sports),
    defaultMessage: "Sports & Entertainment",
  },
  [Keys.WebexMeet]: {
    id: getId(Keys.WebexMeet),
    defaultMessage: "Meet",
  },
  [Keys.WebexMeet_Description]: {
    id: getId(Keys.WebexMeet_Description),
    defaultMessage:
      "Host video conferences with HD video, audio and screen sharing.",
  },
  [Keys.WebexCall]: {
    id: getId(Keys.WebexCall),
    defaultMessage: "Call",
  },
  [Keys.WebexCall_Description]: {
    id: getId(Keys.WebexCall_Description),
    defaultMessage:
      "Get a phone number and business calling system so you can make and receive calls on any device.",
  },
  [Keys.WebexMessage]: {
    id: getId(Keys.WebexMessage),
    defaultMessage: "Message",
  },
  [Keys.WebexMessage_Description]: {
    id: getId(Keys.WebexMessage_Description),
    defaultMessage:
      "Connect instantly with team messaging, secure file-sharing and whiteboarding.",
  },
  [Keys.DeskCamera]: {
    id: getId(Keys.DeskCamera),
    defaultMessage: "Webex Desk Camera",
  },
  [Keys.DeskCamera_Description]: {
    id: getId(Keys.DeskCamera_Description),
    defaultMessage:
      "Enjoy up to 4K Ultra HD video with the intelligent webcam designed with the power of the Webex platform",
  },
  [Keys.BoardSeries]: {
    id: getId(Keys.BoardSeries),
    defaultMessage: "Board Series",
  },
  [Keys.BoardSeries_Description]: {
    id: getId(Keys.BoardSeries_Description),
    defaultMessage:
      "All-in-one collaboration device for wireless presenting, digital whiteboarding, and video conferencing.",
  },
  [Keys.Accessories]: {
    id: getId(Keys.Accessories),
    defaultMessage: "Accessories",
  },
  [Keys.Accessories_Description]: {
    id: getId(Keys.Accessories_Description),
    defaultMessage: "All the peripherals to enhance your Cisco Webex setup.",
  },
  [Keys.Cameras]: {
    id: getId(Keys.Cameras),
    defaultMessage: "Cameras",
  },
  [Keys.Cameras_Description]: {
    id: getId(Keys.Cameras_Description),
    defaultMessage:
      "The Cisco camera portfolio is designed to work in any meeting space with optimized video experience.",
  },
  [Keys.DeskSeries]: {
    id: getId(Keys.DeskSeries),
    defaultMessage: "Desk Series",
  },
  [Keys.DeskSeries_Description]: {
    id: getId(Keys.DeskSeries_Description),
    defaultMessage:
      "Keep your colleagues close when working remotely with high-quality, face-to-face collaboration.",
  },
  [Keys.RoomSeries]: {
    id: getId(Keys.RoomSeries),
    defaultMessage: "Room Series",
  },
  [Keys.RoomSeries_Description]: {
    id: getId(Keys.RoomSeries_Description),
    defaultMessage:
      "Everything you need is in one unit: screens, speakers, codec, camera, touch user interface, micriphones, and mounting.",
  },
  [Keys.Codecs]: {
    id: getId(Keys.Codecs),
    defaultMessage: "Codecs",
  },
  [Keys.Codecs_Description]: {
    id: getId(Keys.Codecs_Description),
    defaultMessage:
      "Set up your own custom solution for large to extra large rooms.",
  },
  [Keys.RoomNavigator]: {
    id: getId(Keys.RoomNavigator),
    defaultMessage: "Room Navigator",
  },
  [Keys.RoomNavigator_Description]: {
    id: getId(Keys.RoomNavigator_Description),
    defaultMessage: "Easily find and book a room with this smart touch panel.",
  },
  [Keys.RoomKitSeries]: {
    id: getId(Keys.RoomKitSeries),
    defaultMessage: "Room Kit Series",
  },
  [Keys.RoomKitSeries_Description]: {
    id: getId(Keys.RoomKitSeries_Description),
    defaultMessage:
      "The Webex Room Kits enable high-quality video conferencing from the smallest to the largest meeting rooms.",
  },
  [Keys.PanoramaSeries]: {
    id: getId(Keys.PanoramaSeries),
    defaultMessage: "Panorama Series",
  },
  [Keys.PanoramaSeries_Description]: {
    id: getId(Keys.PanoramaSeries_Description),
    defaultMessage:
      "Immersive panoramic video collaboration with rich content expeirence, without losing local in-room communication.",
  },
  [Keys.AsSeen]: {
    id: getId(Keys.AsSeen),
    defaultMessage: "As seen at",
  },
  [Keys.SeeAllDevices]: {
    id: getId(Keys.SeeAllDevices),
    defaultMessage: "See all devices →",
  },
  [Keys.Workspaces]: {
    id: getId(Keys.Workspaces),
    defaultMessage: "Webex workspaces",
  },
  [Keys.SignIn]: {
    id: getId(Keys.SignIn),
    defaultMessage: "Sign in",
  },
  [Keys.SignInToWebex]: {
    id: getId(Keys.SignInToWebex),
    defaultMessage: "Sign in to your Webex account.",
  },
  [Keys.SignInHelp]: {
    id: getId(Keys.SignInHelp),
    defaultMessage: "Need help signing in?",
  },
  [Keys.UserName]: {
    id: getId(Keys.UserName),
    defaultMessage: "Username",
  },
  [Keys.ContactSupport]: {
    id: getId(Keys.ContactSupport),
    defaultMessage: "Contact Support",
  },
  [Keys.Email_Placeholder]: {
    id: getId(Keys.Email_Placeholder),
    defaultMessage: "Email Address",
  },
});
