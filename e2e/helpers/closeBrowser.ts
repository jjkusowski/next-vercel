import { Browser } from "playwright";

export default async function closeBrowser(
  browser: Browser
): Promise<undefined> {
  browser.close();

  return undefined;
}
