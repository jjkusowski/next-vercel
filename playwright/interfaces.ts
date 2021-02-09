export enum SupportedBrowsers {
  CHROME = "chromium",
  SAFARI = "webkit",
  FIREFOX = "firefox",
}

export type BrowserTest = (browserKey: SupportedBrowsers) => void;
