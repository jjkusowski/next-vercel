import { Browser } from "playwright";

import * as playwright from "playwright";
import { SupportedBrowsers } from "../../playwright/interfaces";

export default async function createBrowser(
  supportedBrowserKey: SupportedBrowsers
): Promise<Browser> {
  return playwright[supportedBrowserKey].launch();
}
