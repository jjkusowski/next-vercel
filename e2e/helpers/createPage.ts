import { Browser, Page } from "playwright";

export default async function createPage(browser: Browser): Promise<Page> {
  return browser.newPage();
}
