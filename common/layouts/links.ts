import { defineMessages } from "react-intl";
import { LocaleKey as Keys } from "./interfaces";

const getId = (id) => {
  return `FooterLinks.${id}`;
};

export default defineMessages({
  [Keys.Webex]: {
    id: getId(Keys.Webex),
    defaultMessage: "https://www.webex.com",
  },
  [Keys.Plans]: {
    id: getId(Keys.Plans),
    defaultMessage: "https://www.webex.com/pricing/index.html",
  },
  [Keys.Downloads]: {
    id: getId(Keys.Downloads),
    defaultMessage: "https://www.webex.com/downloads.html",
  },
  [Keys.DevicesRooms]: {
    id: getId(Keys.DevicesRooms),
    defaultMessage: "https://hardware.webex.com/devices/",
  },
  [Keys.ContactCenter]: {
    id: getId(Keys.ContactCenter),
    defaultMessage: "https://www.webex.com/contact-center.html",
  },
  [Keys.Events]: {
    id: getId(Keys.Events),
    defaultMessage: "https://www.webex.com/webinar.html",
  },
  [Keys.Training]: {
    id: getId(Keys.Training),
    defaultMessage: "https://www.webex.com/training-online.html",
  },
  [Keys.RemoteSupport]: {
    id: getId(Keys.RemoteSupport),
    defaultMessage: "https://www.webex.com/remote-support.html",
  },
  [Keys.HardwareService]: {
    id: getId(Keys.HardwareService),
    defaultMessage: "https://www.webex.com/hardware-as-a-service.html",
  },
  [Keys.WebexMeet]: {
    id: getId(Keys.WebexMeet),
    defaultMessage: "https://www.webex.com/video-conferencing.html",
  },
  [Keys.WebexCall]: {
    id: getId(Keys.WebexCall),
    defaultMessage: "https://www.webex.com/cloud-calling.html",
  },
  [Keys.WebexMessage]: {
    id: getId(Keys.WebexMessage),
    defaultMessage: "https://www.webex.com/team-collaboration.html",
  },
  [Keys.ScreenSharing]: {
    id: getId(Keys.ScreenSharing),
    defaultMessage: "https://www.webex.com/screen-sharing.html",
  },
  [Keys.ConferenceCall]: {
    id: getId(Keys.ConferenceCall),
    defaultMessage: "https://www.webex.com/conference-call.html",
  },
  [Keys.AI]: {
    id: getId(Keys.AI),
    defaultMessage: "https://www.webex.com/ai-assistant.html",
  },
  [Keys.Education]: {
    id: getId(Keys.Education),
    defaultMessage: "https://www.webex.com/industries/education.html",
  },
  [Keys.Healthcare]: {
    id: getId(Keys.Healthcare),
    defaultMessage: "https://www.webex.com/industries/healthcare.html",
  },
  [Keys.FinancialServices]: {
    id: getId(Keys.FinancialServices),
    defaultMessage: "https://www.webex.com/industries/financial-services.html",
  },
  [Keys.Government]: {
    id: getId(Keys.Government),
    defaultMessage: "https://www.webex.com/industries/government.html",
  },
  [Keys.Startups]: {
    id: getId(Keys.Startups),
    defaultMessage: "https://www.webex.com/industries/start-ups.html",
  },
  [Keys.Sports]: {
    id: getId(Keys.Sports),
    defaultMessage:
      "https://www.webex.com/industries/sports-entertainment.html",
  },
  [Keys.Developers]: {
    id: getId(Keys.Developers),
    defaultMessage: "https://developer.webex.com",
  },
  [Keys.IT]: {
    id: getId(Keys.IT),
    defaultMessage: "https://www.webex.com/products/it_buyer.html",
  },
  [Keys.Partners]: {
    id: getId(Keys.Partners),
    defaultMessage: "https://www.cisco.com/c/en/us/partners.html",
  },
  [Keys.HelpCenter]: {
    id: getId(Keys.HelpCenter),
    defaultMessage: "https://help.webex.com/?language=en-us",
  },
  [Keys.JoinTest]: {
    id: getId(Keys.JoinTest),
    defaultMessage: "https://www.webex.com/test-meeting.html",
  },
  [Keys.OnlineClasses]: {
    id: getId(Keys.OnlineClasses),
    defaultMessage: "https://help.webex.com/landing/onlineclasses",
  },
  [Keys.Blog]: {
    id: getId(Keys.Blog),
    defaultMessage: "https://blog.webex.com/",
  },
  [Keys.WebinarsDemos]: {
    id: getId(Keys.WebinarsDemos),
    defaultMessage: "https://www.webex.com/learn/webinars-demos.html",
  },
  [Keys.Integrations]: {
    id: getId(Keys.Integrations),
    defaultMessage: "https://www.webex.com/products/integrations/index.html",
  },
  [Keys.WebexEssentials]: {
    id: getId(Keys.WebexEssentials),
    defaultMessage: "https://essentials.webex.com/",
  },
  [Keys.WebexCommunity]: {
    id: getId(Keys.WebexCommunity),
    defaultMessage: "http://cs.co/webexcommunity",
  },
  [Keys.BusinessContinuity]: {
    id: getId(Keys.BusinessContinuity),
    defaultMessage: "https://www.webex.com/business-continuity.html",
  },
  [Keys.WhyWebex]: {
    id: getId(Keys.WhyWebex),
    defaultMessage: "https://www.webex.com/why-webex/index.html",
  },
  [Keys.Cisco]: {
    id: getId(Keys.Cisco),
    defaultMessage:
      "https://www.cisco.com/c/en/us/solutions/collaboration/index.html#~stickynav=1",
  },
  [Keys.FutureWork]: {
    id: getId(Keys.FutureWork),
    defaultMessage: "https://futureofwork.webex.com/",
  },
  [Keys.ContactSupport]: {
    id: getId(Keys.ContactSupport),
    defaultMessage: "https://help.webex.com/contact?language=en-us",
  },
  [Keys.ContactSales]: {
    id: getId(Keys.ContactSales),
    defaultMessage: "https://www.webex.com/contact-sales.html",
  },
  [Keys.Terms]: {
    id: getId(Keys.Terms),
    defaultMessage:
      "https://www.cisco.com/c/en/us/about/legal/terms-conditions.html",
  },
  [Keys.Privacy]: {
    id: getId(Keys.Privacy),
    defaultMessage:
      "https://www.cisco.com/c/en/us/about/legal/privacy-full.html",
  },
  [Keys.Cookies]: {
    id: getId(Keys.Cookies),
    defaultMessage:
      "https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies",
  },
  [Keys.Trademarks]: {
    id: getId(Keys.Trademarks),
    defaultMessage: "https://www.cisco.com/web/siteassets/legal/trademark.html",
  },
});
